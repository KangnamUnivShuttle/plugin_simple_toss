const errorResponse = {
    "version": "2.0",
    "template": {
        "outputs": [
            {
                "simpleText": {
                    "text": ""
                }
            }
        ],
        "quickReplies": [
            {
                "messageText": "홈 으로",
                "action": "message",
                "label": "홈"
            },
            {
                "messageText": "뒤로 가기",
                "action": "message",
                "label": "↩"
            }
        ]
    }
}

const successResponse = {
    "version": "2.0",
    "template": {
        "outputs": [
        ],
        "quickReplies": [
            {
                "messageText": "홈 으로",
                "action": "message",
                "label": "홈"
            },
            {
                "messageText": "뒤로 가기",
                "action": "message",
                "label": "↩"
            }
        ]
    }
}

module.exports = {
}