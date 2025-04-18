import{ew as Y}from"./index-PAhymuf7.js";var A={};A.defaultNoDataValue=Y(-1/0),A.decode=function(t,i){var s=(i=i||{}).encodedMaskData||i.encodedMaskData===null,e=D(t,i.inputOffset||0,s),c=i.noDataValue!=null?Y(i.noDataValue):A.defaultNoDataValue,n=F(e,i.pixelType||Float32Array,i.encodedMaskData,c,i.returnMask),r={width:e.width,height:e.height,pixelData:n.resultPixels,minValue:e.pixels.minValue,maxValue:e.pixels.maxValue,noDataValue:c};return n.resultMask&&(r.maskData=n.resultMask),i.returnEncodedMask&&e.mask&&(r.encodedMaskData=e.mask.bitset?e.mask.bitset:null),i.returnFileInfo&&(r.fileInfo=b(e,c),i.computeUsedBitDepths&&(r.fileInfo.bitDepths=S(e))),r};var F=function(t,i,s,e,c){var n,r,d=0,m=t.pixels.numBlocksX,x=t.pixels.numBlocksY,y=Math.floor(t.width/m),v=Math.floor(t.height/x),p=2*t.maxZError;s=s||(t.mask?t.mask.bitset:null),n=new i(t.width*t.height),c&&s&&(r=new Uint8Array(t.width*t.height));for(var g,k,h=new Float32Array(y*v),M=0;M<=x;M++){var B=M!==x?v:t.height%x;if(B!==0)for(var I=0;I<=m;I++){var o=I!==m?y:t.width%m;if(o!==0){var P,a,u,w,l=M*t.width*v+I*y,U=t.width-o,f=t.pixels.blocks[d];if(f.encoding<2?(f.encoding===0?P=f.rawData:(E(f.stuffedData,f.bitsPerPixel,f.numValidPixels,f.offset,p,h,t.pixels.maxValue),P=h),a=0):u=f.encoding===2?0:f.offset,s)for(k=0;k<B;k++){for(7&l&&(w=s[l>>3],w<<=7&l),g=0;g<o;g++)7&l||(w=s[l>>3]),128&w?(r&&(r[l]=1),n[l++]=f.encoding<2?P[a++]:u):(r&&(r[l]=0),n[l++]=e),w<<=1;l+=U}else if(f.encoding<2)for(k=0;k<B;k++){for(g=0;g<o;g++)n[l++]=P[a++];l+=U}else for(k=0;k<B;k++)if(n.fill)n.fill(u,l,l+o),l+=o+U;else{for(g=0;g<o;g++)n[l++]=u;l+=U}if(f.encoding===1&&a!==f.numValidPixels)throw"Block and Mask do not match";d++}}}return{resultPixels:n,resultMask:r}},b=function(t,i){return{fileIdentifierString:t.fileIdentifierString,fileVersion:t.fileVersion,imageType:t.imageType,height:t.height,width:t.width,maxZError:t.maxZError,eofOffset:t.eofOffset,mask:t.mask?{numBlocksX:t.mask.numBlocksX,numBlocksY:t.mask.numBlocksY,numBytes:t.mask.numBytes,maxValue:t.mask.maxValue}:null,pixels:{numBlocksX:t.pixels.numBlocksX,numBlocksY:t.pixels.numBlocksY,numBytes:t.pixels.numBytes,maxValue:t.pixels.maxValue,minValue:t.pixels.minValue,noDataValue:i}}},S=function(t){for(var i=t.pixels.numBlocksX*t.pixels.numBlocksY,s={},e=0;e<i;e++){var c=t.pixels.blocks[e];c.encoding===0?s.float32=!0:c.encoding===1?s[c.bitsPerPixel]=!0:s[0]=!0}return Object.keys(s)},D=function(t,i,s){var e={},c=new Uint8Array(t,i,10);if(e.fileIdentifierString=String.fromCharCode.apply(null,c),e.fileIdentifierString.trim()!="CntZImage")throw"Unexpected file identifier string: "+e.fileIdentifierString;i+=10;var n=new DataView(t,i,24);if(e.fileVersion=n.getInt32(0,!0),e.imageType=n.getInt32(4,!0),e.height=n.getUint32(8,!0),e.width=n.getUint32(12,!0),e.maxZError=n.getFloat64(16,!0),i+=24,!s)if(n=new DataView(t,i,16),e.mask={},e.mask.numBlocksY=n.getUint32(0,!0),e.mask.numBlocksX=n.getUint32(4,!0),e.mask.numBytes=n.getUint32(8,!0),e.mask.maxValue=n.getFloat32(12,!0),i+=16,e.mask.numBytes>0){var r=new Uint8Array(Math.ceil(e.width*e.height/8)),d=(n=new DataView(t,i,e.mask.numBytes)).getInt16(0,!0),m=2,x=0;do{if(d>0)for(;d--;)r[x++]=n.getUint8(m++);else{var y=n.getUint8(m++);for(d=-d;d--;)r[x++]=y}d=n.getInt16(m,!0),m+=2}while(m<e.mask.numBytes);if(d!==-32768||x<r.length)throw"Unexpected end of mask RLE encoding";e.mask.bitset=r,i+=e.mask.numBytes}else e.mask.numBytes|e.mask.numBlocksY|e.mask.maxValue||(r=new Uint8Array(Math.ceil(e.width*e.height/8)),e.mask.bitset=r);n=new DataView(t,i,16),e.pixels={},e.pixels.numBlocksY=n.getUint32(0,!0),e.pixels.numBlocksX=n.getUint32(4,!0),e.pixels.numBytes=n.getUint32(8,!0),e.pixels.maxValue=n.getFloat32(12,!0),i+=16;var v=e.pixels.numBlocksX,p=e.pixels.numBlocksY,g=v+(e.width%v>0?1:0),k=p+(e.height%p>0?1:0);e.pixels.blocks=new Array(g*k);for(var h=1e9,M=0,B=0;B<k;B++)for(var I=0;I<g;I++){var o=0,P=t.byteLength-i;n=new DataView(t,i,Math.min(10,P));var a={};e.pixels.blocks[M++]=a;var u=n.getUint8(0);if(o++,a.encoding=63&u,a.encoding>3)throw"Invalid block encoding ("+a.encoding+")";if(a.encoding!==2){if(u!==0&&u!==2){if(u>>=6,a.offsetType=u,u===2)a.offset=n.getInt8(1),o++;else if(u===1)a.offset=n.getInt16(1,!0),o+=2;else{if(u!==0)throw"Invalid block offset type";a.offset=n.getFloat32(1,!0),o+=4}if(h=Math.min(a.offset,h),a.encoding===1)if(u=n.getUint8(o),o++,a.bitsPerPixel=63&u,u>>=6,a.numValidPixelsType=u,u===2)a.numValidPixels=n.getUint8(o),o++;else if(u===1)a.numValidPixels=n.getUint16(o,!0),o+=2;else{if(u!==0)throw"Invalid valid pixel count type";a.numValidPixels=n.getUint32(o,!0),o+=4}}var w;if(i+=o,a.encoding!=3){if(a.encoding===0){var l=(e.pixels.numBytes-1)/4;if(l!==Math.floor(l))throw"uncompressed block has invalid length";w=new ArrayBuffer(4*l),new Uint8Array(w).set(new Uint8Array(t,i,4*l));for(var U=new Float32Array(w),f=0;f<U.length;f++)h=Math.min(h,U[f]);a.rawData=U,i+=4*l}else if(a.encoding===1){var V=Math.ceil(a.numValidPixels*a.bitsPerPixel/8),X=Math.ceil(V/4);w=new ArrayBuffer(4*X),new Uint8Array(w).set(new Uint8Array(t,i,V)),a.stuffedData=new Uint32Array(w),i+=V}}}else i++,h=Math.min(h,0)}return e.pixels.minValue=h,e.eofOffset=i,e},E=function(t,i,s,e,c,n,r){var d,m,x,y=(1<<i)-1,v=0,p=0,g=Math.ceil((r-e)/c),k=4*t.length-Math.ceil(i*s/8);for(t[t.length-1]<<=8*k,d=0;d<s;d++){if(p===0&&(x=t[v++],p=32),p>=i)m=x>>>p-i&y,p-=i;else{var h=i-p;m=(x&y)<<h&y,m+=(x=t[v++])>>>(p=32-h)}n[d]=m<g?e+m*c:r}return n};const T=A.decode;class O{_decode(i){const s=T(i.buffer,i.options);return Promise.resolve({result:s,transferList:[s.pixelData.buffer]})}}function C(){return new O}export{C as default};
