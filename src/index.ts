// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
// import Channel from "./structures/Channel";

import Categories from './structures/Categories';
import Channels from './structures/Channel';

// const channelClient = new Channel();

// channelClient.getChannelId('PappousBanGacha').then(channel => channelClient.getChannel(channel).then(({is_live}) => console.log(is_live)))

// function timer()
// {
// 	const timer = {
// 	    running: false,
// 	    iv: 5000,
// 	    timeout: false,
// 	    cb: function(){},
// 	    start: function(cb,iv,sd){
// 	        // eslint-disable-next-line @typescript-eslint/no-this-alias
// 	        let elm = this;
// 	        clearInterval(this.timeout);
// 	        this.running = true;
// 	        if(cb) this.cb = cb;
// 	        if(iv) this.iv = iv;
// 	        if(sd) elm.execute(elm);
// 	        else this.timeout = setTimeout(function(){elm.execute(elm)}, this.iv);
// 	    },
// 	    execute : function(e){
// 	        if(!e.running) return false;
// 	        e.cb();
// 	        e.start();
// 	    },
// 	    stop : function(){
// 	        this.running = false;
// 	    },
// 	    set_interval : function(iv){
// 	        clearInterval(this.timeout);
// 	        this.start(false, iv);
// 	    }
// 	};
// 	return timer;
// }

const channels = new Channels();

channels
  .getChannel('programming')
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
