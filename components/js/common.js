import { GoogleAnalytics } from './google/analytics';

export function CommonJS() {
    // please change the following with the ab506.church trackging Id
    const jsx = <GoogleAnalytics trackingId="UA-8680690-4" />;
    return jsx;
}
