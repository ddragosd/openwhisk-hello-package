var util = require("util")
/**
 * Return a simple greeting message for someone.
 *
 * @param name A person's name.
 * @param place Where the person is from.
 */
function main(params) {
    var name = params.name || params.payload || 'stranger';
    // openwhisk's api-gateway may populate context.identity
    // based on the info coming from an OAuth Token
    if( params.context !== null && typeof(params.context) !== "undefined"
        && params.context.identity !== null ) {
        name = params.context.identity.user_id;
    }

    var place = params.place || 'branch-1';
    return {
        payload:  'Hello, ' + name + ' from ' + place + ' !',
        event: params
    };
}
