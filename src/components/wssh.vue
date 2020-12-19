<!--
 * @Author: your name
 * @Date: 2020-12-18 08:52:57
 * @LastEditTime: 2020-12-18 16:27:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mywssh\src\components\wssh.vue
-->
<template>
  <div class="container">
    <div id="terminal-container" />
  </div>
</template>

<script>
import "xterm/css/xterm.css";
import { Terminal } from "xterm";
// import {fit} from "xterm/lib/addons/fit/fit";
// import { Terminal } from "xterm";
import { FitAddon } from "xterm-addon-fit";
// import { AttachAddon } from "xterm-addon-attach";
import { WebglAddon } from 'xterm-addon-webgl';
// Apply the `fit` addon

export default {
  data() {
    return {
      copy: "",
    };
  },
  mounted() {
    let terminalContainer = document.getElementById("terminal-container");
    let term = new Terminal({
      // 光标闪烁
      cursorBlink: true,
    });

    const fitAddon = new FitAddon();

    term.loadAddon(fitAddon);
    // term.loadAddon(new AttachAddon())
    term.open(terminalContainer, true);    
    term.loadAddon(new WebglAddon())

    fitAddon.fit();
    // term.fit();
    window.addEventListener('resize',this.windowChange)

    let websocket = new WebSocket("ws://localhost:8000/webssh"); //地址
    // websocket.binaryType = "arraybuffer";
    //连接成功
    websocket.onopen = function(evt) {
      console.log("onopen", evt);
      term.writeln('Hello from \x1B[1;3;31mxterm.js\x1B[0m $ ')
      term.writeln('Welcome to xterm.js')
      term.writeln('This is a local terminal emulation, without a real terminal in the back-end.')
      term.writeln('Type some keys and commands to play around.')
      term.writeln(
        "******************************************************************"
      );
    };
    term.prompt = () => {
        term.write('\r\n$ ')
      }
      
    //输入
    term.onData(function(key) {
    //   websocket.send(new TextEncoder().encode("\x00" + key));
      // console.log("onData")
      // console.log(key)
      // console.log("onData print key")
      term.write(key)
      websocket.send(key);
    });

    // term.onData(e => {
    // //   websocket.send(new TextEncoder().encode("\x00" + key));
    //   console.log("onData start")
    //   console.log(e)
    //   console.log("onData end")
    //   // console.log(key)
    //   // console.log("onData print key")
    //   // term.write(key)
    //   // websocket.send(key);
    // });

    //    term.onData(e => {
    // //   websocket.send(new TextEncoder().encode("\x00" + key));
    //   const ev = e.domEventsole.log(key)
    //   term.write(key)
    //   websocket.send( key);
    // });



     term.onKey(e => {
        console.log(e)
        const ev = e.domEvent
       // const printable = !ev.altKey && !ev.altGraphKey && !ev.metaKey // && !ev.ctrlKey && !ev.metaKey
        // if (ev.keyCode === 13) {
        //   term.prompt()
        // } else 
        if (ev.keyCode === 8) {
          // Do not delete the prompt
          if (term._core.buffer.x > 2) {
            term.write('\b \b')
          }
        } 
        // else //if (printable) 
        // {
        //   term.write(e.key)        

        // }
        // websocket.send(e.key);
      })
    //返回
    websocket.onmessage = function(evt) {
    //   let str = new TextDecoder().decode(evt.data);
    //   let strlen = evt.data.length
    //   if (strlen>=4) {
    //     term.write(evt.data);
    //   }else{
    //       term.write('');
    //   }
      term.write(evt.data);
   
      
  
    };
    //关闭
    websocket.onclose = function(evt) {
      console.log("close", evt);
      window.removeEventListener('resize',this.windowChange)
    };
    //错误
    websocket.onerror = function(evt) {
      console.log("error", evt);
    };
    //选中 复制
    // term.onKey("selection", function() {
    //   if (term.hasSelection()) {
    //     this.copy = term.getSelection();
    //   }
    // });
    // term.attachCustomKeyEventHandler(function(ev) {
    //   //粘贴 ctrl+v
    //   if (ev.keyCode == 86 && ev.ctrlKey) {
    //     websocket.send(new TextEncoder().encode("\x00" + this.copy));
    //   }
    // });
  },
  methods: {
   windowChange() {
       let height = document.body.clientHeight;
        let rows = height/18;
        this.term.fit();
        this.term.resize(this.term.cols,parseInt(rows))//终端窗口重新设置大小 并触发term.on("resize"
        this.term.scrollToBottom();
     }
  },
};
</script>
