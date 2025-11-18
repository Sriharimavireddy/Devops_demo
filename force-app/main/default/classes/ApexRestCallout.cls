public class ApexRestCallout {
    public static void getUsersFromExternal() {

        HTTP httpObj = new HTTP();
        HTTPRequest req = new HTTPRequest();

        req.setEndPoint('https://reqres.in/api/users');
        req.setHeader('Content-Type', 'application/json');
        req.setMethod('GET');

        HTTPResponse res = new HTTPResponse();
        res = httpObj.send(req);
        System.debug('Response body   ' + res.getBody());

    }
}