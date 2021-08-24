import React, { Component } from 'react';
import swal from "sweetalert";
import { GET_SHARE_LINK } from '../../Request/OthersApi';
import _manifest from '../../_manifest';
import { logEventRecord } from '../../logger/log';


const $body = document.getElementsByTagName('body')[0];

// const shareMessage =
//     (localStorage.getItem('accessToken')) ?
//     `Start playing to win, Free Tickets and More. My Referral Code: ${JSON.parse(localStorage.getItem('profile')).referralCode}  Visit: https://sharetrip.net`:
//     `Start playing to win, Free Tickets and More. Visit: https://sharetrip.net`;
const shareMessage =
    (localStorage.getItem('accessToken') && localStorage.getItem('profile')) ?
        `Hi, check out the new ShareTrip App! The easiest way to book all your travel services! Use my referral code "${JSON.parse(localStorage.getItem('profile')).referralCode}" and also win air tickets and many more. Click to download ShareTrip app now http://bit.ly/stappinc`
        :
        `Hi, check out the new ShareTrip App! The easiest way to book all your travel services! You can also win  air tickets and many more. Click to download ShareTrip app now http://bit.ly/stappinc`;

let tablet = window.innerWidth < 992;


function Alert(title, msg, type, time = 5000) {
    swal({
        title: title,
        text: msg,
        icon: type,
        buttons: false,
        timer: time
    });
}

class ShareOptions extends Component {


    linkCopy = () => {
        const copyText = document.getElementById("myhiddenInput");
        copyText.select();
        document.execCommand("copy");
        Alert("Text Copied", 'Text Copied in your clipboard: ' + copyText.value, "success", 1200);

    };

    linkGoto = async (type) => {


        logEventRecord("Via_FB_Email_Twitter");
        let { link, source } = this.props;
        let params = {
            type: source,
            value: link
        };
        (localStorage.getItem('accessToken')) && await GET_SHARE_LINK(params);

        if (type === 'facebook') window.open(`https://www.facebook.com/dialog/feed?app_id=${_manifest.facebookLoginAppId}&display=iframe&link=https://sharetrip.net`);
        if (type === 'twitter') window.open(`https://twitter.com/intent/tweet?text=${shareMessage} &hashtags=ShareTrip`);
        if (type === 'mailto') window.open(`mailto:?subject=ShareTrip&body=${shareMessage}`);
        if (type === 'messenger') window.open(`fb-messenger://share/?link=${shareMessage}`);
        if (type === 'whatsapp') window.open(`whatsapp://send?text=${shareMessage}`);

        if (type === 'copyLink') this.linkCopy();
    };

    render() {

        let { link, source } = this.props;
        return (
            <div className="ShareOptions">
                <ul className="invite-options">
                    <li><a onClick={() => this.linkGoto('facebook')}><i className="mdi mdi-facebook-box"></i></a></li>
                    {tablet &&
                        <li onClick={() => this.linkGoto('messenger')}><a><i className="mdi mdi-facebook-messenger"></i></a>
                        </li>}
                    {tablet &&
                        <li onClick={() => this.linkGoto('whatsapp')}><a><i className="mdi mdi-whatsapp"></i></a></li>}
                    <li><a onClick={() => this.linkGoto('twitter')}><i className="mdi mdi-twitter"></i></a></li>
                    <li><a onClick={() => this.linkGoto('mailto')}><i className="mdi mdi-email"></i></a></li>
                    <li><a onClick={() => this.linkGoto('copyLink')}> <i className="mdi mdi-link-variant"></i></a></li>

                </ul>
                <input
                    style={{
                        opacity: 0,
                    }}
                    readOnly
                    type="text" className="form-control" id="myhiddenInput" value={`${shareMessage}`} />
            </div>
        );
    }
}

export default ShareOptions;