
let smallDog = "dog1.png";
let midDog = "dog2.png";
let bigDog = "dog3.png";

const pets = [smallDog,midDog,bigDog]


const app = {
data() {
  return {
  }
},
template:`<div  class="position">
<h4>Navigation</h4>
<table>
<tr>
<td>Intro</td>
<td>
<a href= "page1.html">page1 </a>
</td>
</tr>
<tr>
<td>Video</td>
<td>
<a href= "page2.html">page2 </a>
</td>
</tr>
<tr>
<td>NFT</td>
<td>
    <a href= "page3.html">page3 </a>
</td>
</tr>
</table>
</div>`
}

Vue.createApp(app).mount('#panda')
