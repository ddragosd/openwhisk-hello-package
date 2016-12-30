/**
 * Return a simple greeting message for someone.
 *
 * @param name A person's name.
 * @param place Where the person is from.
 */
function main(params) {
    var name = params.name || params.payload || 'stranger';
    if( params.context && params.context.identity ) {
        name = params.context.identity.user_id;
    }

    var place = params.place || 'branch-1';
    return {payload:  'Hello, ' + name + ' from ' + place + ' !'};
}
