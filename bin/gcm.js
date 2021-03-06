/**
 * Created by hyq on 2016/7/14.
 */
var onNotice = function(notification) {
    console.log('Event Received: ' + notification);
}
export default function(senderId, callback) {
    if (window.GcmPushPlugin !== undefined) {
        window.GcmPushPlugin.register({
            'senderId': senderId,
            'jsCallback': 'onNotice'
        }, function(result) {
            var params = {
                token: result.gcm
            };
            console.log('%o', result);
            if (callback) {
                callback(params);
            } else {
                return Promise.resolve(params);
            }
        }, function(error) {
            console.log('Error: ' + error);
        });
    }
};