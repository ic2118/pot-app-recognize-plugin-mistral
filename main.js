async function recognize(base64, lang, options) {
    const { config, utils } = options;
    const { tauriFetch } = utils;
    let { apikey } = config;

    if (apikey === undefined || apikey.length === 0) {
        throw "apikey not found";
    }

    // 确保API密钥没有多余的空格
    apikey = apikey.trim();

    // 构建请求URL - 修正为正确的端点
    const url = 'https://api.mistral.ai/v1/ocr';
    
    // 准备请求体 - 根据文档调整参数
    const requestBody = {
        model: "mistral-ocr-latest",
        document: {
            type: "image_url",
            image_url: `data:image/jpeg;base64,${base64}`
        }
    };

    // 发送请求到Mistral API，根据文档使用Bearer认证
    let res = await tauriFetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${apikey}`
        },
        body: {
            type: "Json",
            payload: requestBody
        }
    });

    if (res.ok) {
        const data = res.data;
        
        // 根据返回的实际格式解析结果
        if (data && data.pages && data.pages.length > 0) {
            // 提取所有页面的markdown内容并合并
            let extractedText = '';
            for (const page of data.pages) {
                if (page.markdown) {
                    extractedText += page.markdown + '\n';
                }
            }
            
            if (extractedText.trim()) {
                return extractedText.trim();
            } else {
                throw "No markdown content found in pages";
            }
        } else {
            throw "Invalid response format: " + JSON.stringify(data);
        }
    } else {
        // 详细的错误信息
        const errorDetails = {
            status: res.status,
            message: res.data?.message || "Unknown error",
            requestId: res.data?.request_id || "N/A",
            headers: res.headers || {}
        };
        
        throw `Authentication failed (${res.status}): ${errorDetails.message}. Response: ${JSON.stringify(res.data)}`;
    }
}