import React from "react";
import MobileStoreButton from 'react-mobile-store-button';

////

export default class MyComponent extends React.Component {
	render() {
		const iOSUrl = 'https://apps.apple.com/us/app/hotspotshield-vpn-wifi-proxy/id771076721?mt=12';
    const googleUrl = 'https://play.google.com/store/apps/details?id=hotspotshield.android.vpn&hl=en_US&gl=US&pli=1';
		return (
      <>
        <div>
          <MobileStoreButton
            store="ios"
            url={iOSUrl}
            linkProps={{ title: 'iOS Store Button' }}
          />
        </div>
        <div>
          <MobileStoreButton
            store="android"
            url={googleUrl}
            linkProps={{ title: 'Google play Button' }}
          />
        </div>
      </>
		);
	}
}