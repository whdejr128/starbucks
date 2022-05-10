let left=document.querySelectorAll('.left');
let right=document.querySelectorAll('.right');
let left2=document.querySelectorAll('.left2');
let right2=document.querySelectorAll('.right2');
let left_right=document.querySelector('.left_right');
let left_right2=document.querySelector('.left_right2');
let promotion_img=document.querySelectorAll('.promotion_img');
let promotion=document.querySelector('.promotion');
let slide_img=document.querySelector('.slide_img');
let slide_img2=document.querySelector('.slide_img2');
let slide_bt=document.querySelectorAll('.slide_bt');
let slide_bt2=document.querySelectorAll('.slide_bt2');
let paging_img=document.querySelectorAll('.paging_img');
let paging_img2=document.querySelectorAll('.paging_img2');
let media_bottom2_slide2=document.querySelector('.media_bottom2_slide2');
let img_up=document.querySelector('#img_up');
let img_up2=document.querySelector('#img_up2');
let radio=document.querySelector('.radio');
let login=document.querySelector('.login');
let new_menu1=document.querySelector('.new_menu1');
let new_menu2=document.querySelector('.new_menu2');
let new1=document.querySelector('.new1');
let new2=document.querySelector('.new2');
let new_menu_button=document.querySelector('#new_menu_button');
let pick=document.querySelector('.pick');
let footer1=document.querySelector('.footer1');
let footer2=document.querySelector('.footer2');
let section=document.querySelector('.section');
let media_img3=document.querySelector('.media_img3');
let exit=document.querySelector('.exit');
let media=document.querySelector('.media');
let header=document.querySelector('header');
let main_img=document.querySelector('.main_img');
let media_down=document.querySelectorAll('.media_down');
let media_button=document.querySelectorAll('.media_button');
let stuff=document.querySelectorAll('.stuff');
let smaller_so=document.querySelectorAll('.smaller_so');
let smallest=document.querySelector('.smallest');
let so=document.querySelectorAll('.so');
let smaller_a=document.querySelectorAll('.smaller_a');
let back_back=document.querySelector('.back_back');
let banner=document.querySelector('.banner');
let media_bottom=document.querySelector('.media_bottom');
let media_bottom_img=document.querySelectorAll('.media_bottom_img');
let media_bottom_inline=document.querySelectorAll('.media_bottom_inline');
let media_bottom_second_line=document.querySelectorAll('.media_bottom_second_line');
let media_bottom_slide_img=document.querySelector('.media_bottom_slide_img');
let media_bottom_slide_button=document.querySelector('.media_bottom_slide_button');
const coffee_img1=document.querySelector('.coffee_img1');
const coffee_img2=document.querySelector('.coffee_img2');
const coffee_img3=document.querySelector('.coffee_img3');
const coffee_img4=document.querySelector('.coffee_img4');
const coffee_img_button=document.querySelector('.coffee_img_button');


slide_bt2[0].addEventListener('click',()=>{ //멈춤일때
if(slide_bt2[0].value=='play'){
slide_bt2[0].value='pause';
slide_img2.src='/starbucks/starbucks_img/play.svg';
promotion.style.transform='translate(-23%)';
promotion.style.animationName='pause';
left_right2.style.display='block';
left2[1].style.display='block';
right2[1].style.display='block';
for(let i=0; i<paging_img.length; i++){
paging_img2[i].style.animationName='stop';
}
}
else if(slide_bt2[0].value=='pause'){ //재생일때
slide_bt2[0].value='play';
slide_img2.src='/starbucks/starbucks_img/pause.svg';
promotion.style.animationName='pro2';
for(let i=0; i<2; i++){
left2[i].style.display='none';
right2[i].style.display='none';
}
paging_img2[0].style.animationName='paging1';
paging_img2[1].style.animationName='paging2';
paging_img2[2].style.animationName='paging3';
}
});

slide_bt2[1].addEventListener('click',()=>{
promotion.style.transform='translate(2%)';
paging_img2[0].src='https://www.starbucks.co.kr/common/img/main/main_prom_on.png';
paging_img2[1].src='https://www.starbucks.co.kr/common/img/main/main_prom_off.png';
paging_img2[2].src='https://www.starbucks.co.kr/common/img/main/main_prom_off.png';
});

slide_bt2[2].addEventListener('click',()=>{
promotion.style.transform='translate(-23%)';
paging_img2[0].src='https://www.starbucks.co.kr/common/img/main/main_prom_off.png';
paging_img2[1].src='https://www.starbucks.co.kr/common/img/main/main_prom_on.png';
paging_img2[2].src='https://www.starbucks.co.kr/common/img/main/main_prom_off.png';
});

slide_bt2[3].addEventListener('click',()=>{
promotion.style.transform='translate(-49%)';
paging_img[0].src='https://www.starbucks.co.kr/common/img/main/main_prom_off.png';
paging_img[1].src='https://www.starbucks.co.kr/common/img/main/main_prom_off.png';
paging_img[2].src='https://www.starbucks.co.kr/common/img/main/main_prom_on.png';
});


slide_bt[0].addEventListener('click',()=>{ //재생모양일때 (멈춤상태)
if(slide_bt[0].value=='play'){
slide_bt[0].value='pause';
slide_img.src='/starbucks/starbucks_img/play.svg';
promotion.style.animationName='pause';
promotion.style.transform='translate(-15%)';
left[1].style.display='block';
right[1].style.display='block';
for(let i=0; i<paging_img.length; i++){
paging_img[i].style.animationName='stop';
}

}

else if(slide_bt[0].value=='pause'){ //멈춤모양일때 (재생상태)
slide_bt[0].value='play';
slide_img.src='/starbucks/starbucks_img/pause.svg';
promotion.style.animationName='pro';

for(let i=0; i<2; i++){
left[i].style.display='none';
right[i].style.display='none';
}
paging_img[0].style.animationName='paging1';
paging_img[1].style.animationName='paging2';
paging_img[2].style.animationName='paging3';
}
});


slide_bt[1].addEventListener('click',()=>{
if(slide_bt[1].value=='gray'){
paging_img[0].src='https://www.starbucks.co.kr/common/img/main/main_prom_on.png';
paging_img[1].src="https://www.starbucks.co.kr/common/img/main/main_prom_off.png";
paging_img[2].src="https://www.starbucks.co.kr/common/img/main/main_prom_off.png";
promotion.style.transform='translate(10%)';
}
});
slide_bt[2].addEventListener('click',()=>{
if(slide_bt[2].value=='gray'){
paging_img[1].src='https://www.starbucks.co.kr/common/img/main/main_prom_on.png';
paging_img[0].src="https://www.starbucks.co.kr/common/img/main/main_prom_off.png";
paging_img[2].src="https://www.starbucks.co.kr/common/img/main/main_prom_off.png";
promotion.style.transform='translate(-15%)';
}
});
slide_bt[3].addEventListener('click',()=>{
if(slide_bt[3].value=='gray'){
paging_img[2].src='https://www.starbucks.co.kr/common/img/main/main_prom_on.png';
paging_img[0].src="https://www.starbucks.co.kr/common/img/main/main_prom_off.png";
paging_img[1].src="https://www.starbucks.co.kr/common/img/main/main_prom_off.png";
promotion.style.transform='translate(-41%)';
}
});

left[0].addEventListener('click',()=>{
paging_img[2].src='https://www.starbucks.co.kr/common/img/main/main_prom_on.png';
paging_img[0].src="https://www.starbucks.co.kr/common/img/main/main_prom_off.png";
paging_img[1].src="https://www.starbucks.co.kr/common/img/main/main_prom_off.png";

promotion.style.transform='translate(-25%)';
});

right[0].addEventListener('click',()=>{
paging_img[1].src='https://www.starbucks.co.kr/common/img/main/main_prom_on.png';
paging_img[0].src="https://www.starbucks.co.kr/common/img/main/main_prom_off.png";
paging_img[2].src="https://www.starbucks.co.kr/common/img/main/main_prom_off.png";
promotion.style.transform='translate(-16%)';
left[0].style.display='none';
left[2].style.display='none';
right[0].style.display='none';
right[2].style.display='none';
left[1].style.display='block';
right[1].style.display='block';
});
right[1].addEventListener('click',()=>{
paging_img[2].src='https://www.starbucks.co.kr/common/img/main/main_prom_on.png';
paging_img[0].src="https://www.starbucks.co.kr/common/img/main/main_prom_off.png";
paging_img[1].src="https://www.starbucks.co.kr/common/img/main/main_prom_off.png";
left[0].style.display='none';
left[1].style.display='none';
right[0].style.display='none';
right[1].style.display='none';
left[2].style.display='block';
right[2].style.display='block';
promotion.style.transform='translate(-42%)';
});
right[2].addEventListener('click',()=>{
paging_img[0].src='https://www.starbucks.co.kr/common/img/main/main_prom_on.png';
paging_img[1].src="https://www.starbucks.co.kr/common/img/main/main_prom_off.png";
paging_img[2].src="https://www.starbucks.co.kr/common/img/main/main_prom_off.png";
promotion.style.transform='translate(9%)';
left[1].style.display='none';
left[2].style.display='none';
right[1].style.display='none';
right[2].style.display='none';
left[0].style.display='block';
right[0].style.display='block';
});
left[1].addEventListener('click',()=>{
paging_img[0].src='https://www.starbucks.co.kr/common/img/main/main_prom_on.png';
paging_img[1].src="https://www.starbucks.co.kr/common/img/main/main_prom_off.png";
paging_img[2].src="https://www.starbucks.co.kr/common/img/main/main_prom_off.png";
promotion.style.transform='translate(9%)';
left[1].style.display='none';
left[2].style.display='none';
right[1].style.display='none';
right[2].style.display='none';
left[0].style.display='block';
right[0].style.display='block';
});
left[2].addEventListener('click',()=>{
paging_img[1].src='https://www.starbucks.co.kr/common/img/main/main_prom_on.png';
paging_img[0].src="https://www.starbucks.co.kr/common/img/main/main_prom_off.png";
paging_img[2].src="https://www.starbucks.co.kr/common/img/main/main_prom_off.png";
promotion.style.transform='translate(-16%)';
left[0].style.display='none';
left[2].style.display='none';
right[0].style.display='none';
right[2].style.display='none';
left[1].style.display='block';
right[1].style.display='block';
});
left[0].addEventListener('click',()=>{
paging_img[2].src='https://www.starbucks.co.kr/common/img/main/main_prom_on.png';
paging_img[0].src="https://www.starbucks.co.kr/common/img/main/main_prom_off.png";
paging_img[1].src="https://www.starbucks.co.kr/common/img/main/main_prom_off.png";
left[0].style.display='none';
left[1].style.display='none';
right[0].style.display='none';
right[1].style.display='none';
left[2].style.display='block';
right[2].style.display='block';
promotion.style.transform='translate(-42%)';
});

right2[0].addEventListener('click',()=>{
paging_img2[1].src='https://www.starbucks.co.kr/common/img/main/main_prom_on.png';
paging_img2[0].src="https://www.starbucks.co.kr/common/img/main/main_prom_off.png";
paging_img2[2].src="https://www.starbucks.co.kr/common/img/main/main_prom_off.png";
promotion.style.transform='translate(-23%)';
left2[0].style.display='none';
left2[2].style.display='none';
right2[0].style.display='none';
right2[2].style.display='none';
left2[1].style.display='block';
right2[1].style.display='block';
});
right2[1].addEventListener('click',()=>{
paging_img2[2].src='https://www.starbucks.co.kr/common/img/main/main_prom_on.png';
paging_img2[0].src="https://www.starbucks.co.kr/common/img/main/main_prom_off.png";
paging_img2[1].src="https://www.starbucks.co.kr/common/img/main/main_prom_off.png";
left2[0].style.display='none';
left2[1].style.display='none';
right2[0].style.display='none';
right2[1].style.display='none';
left2[2].style.display='block';
right2[2].style.display='block';
promotion.style.transform='translate(-49%)';
});
right2[2].addEventListener('click',()=>{
paging_img2[0].src='https://www.starbucks.co.kr/common/img/main/main_prom_on.png';
paging_img2[1].src="https://www.starbucks.co.kr/common/img/main/main_prom_off.png";
paging_img2[2].src="https://www.starbucks.co.kr/common/img/main/main_prom_off.png";
promotion.style.transform='translate(2%)';
left2[1].style.display='none';
left2[2].style.display='none';
right2[1].style.display='none';
right2[2].style.display='none';
left2[0].style.display='block';
right2[0].style.display='block';
});
left2[1].addEventListener('click',()=>{
paging_img2[0].src='https://www.starbucks.co.kr/common/img/main/main_prom_on.png';
paging_img2[1].src="https://www.starbucks.co.kr/common/img/main/main_prom_off.png";
paging_img2[2].src="https://www.starbucks.co.kr/common/img/main/main_prom_off.png";
promotion.style.transform='translate(2%)';
left2[1].style.display='none';
left2[2].style.display='none';
right2[1].style.display='none';
right2[2].style.display='none';
left2[0].style.display='block';
right2[0].style.display='block';
});
left2[2].addEventListener('click',()=>{
paging_img2[1].src='https://www.starbucks.co.kr/common/img/main/main_prom_on.png';
paging_img2[0].src="https://www.starbucks.co.kr/common/img/main/main_prom_off.png";
paging_img2[2].src="https://www.starbucks.co.kr/common/img/main/main_prom_off.png";
promotion.style.transform='translate(-23%)';
left2[0].style.display='none';
left2[2].style.display='none';
right2[0].style.display='none';
right2[2].style.display='none';
left2[1].style.display='block';
right2[1].style.display='block';
});
left2[0].addEventListener('click',()=>{
paging_img2[2].src='https://www.starbucks.co.kr/common/img/main/main_prom_on.png';
paging_img2[0].src="https://www.starbucks.co.kr/common/img/main/main_prom_off.png";
paging_img2[1].src="https://www.starbucks.co.kr/common/img/main/main_prom_off.png";
left2[0].style.display='none';
left2[1].style.display='none';
right2[0].style.display='none';
right2[1].style.display='none';
left2[2].style.display='block';
right2[2].style.display='block';
promotion.style.transform='translate(-49%)';
});


img_up.addEventListener('click',()=>{
if(img_up.src=="https://image.istarbucks.co.kr/common/img/common/btn_prom_down.png"){
img_up.src='https://image.istarbucks.co.kr/common/img/common/btn_prom_up.png';
promotion.style.display='flex';
section.style.top='1280px';
header.style.height='4250px';
media_bottom.style.top='3150px';
}
else if(img_up.src=='https://image.istarbucks.co.kr/common/img/common/btn_prom_up.png'){
img_up.src="https://image.istarbucks.co.kr/common/img/common/btn_prom_down.png";
section.style.top='700px';
header.style.height='3710px';
media_bottom.style.top='2570px';
}
});



media_img3.addEventListener('click',()=>{

exit.style.display='block';
media.style.display='none';
banner.style.display='none';
header.style.left='0%';
});

exit.addEventListener('click',()=>{

back_back.left='0%';
exit.style.display='none';
media.style.display='flex';
header.style.left='100%';
header.style.height='3710px';
banner.style.display='flex';
});

media_button[0].addEventListener('click',()=>{
if(media_button[0].value=='down'){
media_button[0].value='up';
media_down[0].src='https://www.starbucks.co.kr/common/img/common/mob_gnb_arrow_up_w.png';
for(let i=0; i<12; i++){
so[i].style.height='60px';
stuff[i].style.display='flex';
}
}
else if(media_button[0].value=='up'){
media_button[0].value='down';
media_down[0].src='https://www.starbucks.co.kr/common/img/common/mob_gnb_arrow_down_w.png';
for(let i=0; i<12; i++){
so[i].style.height='0px';
stuff[i].style.display='none';
}
for(let i=0; i<15;i++){
smaller_a[i].style.height='0px';
}
for(let i=0; i<5;i++){
smaller_so[i].style.height='0px';
}
for (let i=0; i<6; i++){
media_down[i].src='https://www.starbucks.co.kr/common/img/common/mob_gnb_arrow_down_w.png';
media_button[i].value='down';
}
}
}); //My_Starbucks
media_button[1].addEventListener('click',()=>{
if(media_button[1].value=='down'){
media_button[1].value='up';
media_down[1].src='https://www.starbucks.co.kr/common/img/common/mob_gnb_arrow_up_w.png';
smaller_so[0].style.height='90px';
for(let i=0; i<2;i++){
smaller_a[i].style.height='30px';

}
}

else if(media_button[1].value=='up'){
media_button[1].value='down';
media_down[1].src='https://www.starbucks.co.kr/common/img/common/mob_gnb_arrow_down_w.png';
smaller_so[0].style.height='0px';
for(let i=0; i<2;i++){
smaller_a[i].style.height='0px';
}
}
});
media_button[2].addEventListener('click',()=>{
if(media_button[2].value=='down'){
media_button[2].value='up';
media_down[2].src='https://www.starbucks.co.kr/common/img/common/mob_gnb_arrow_up_w.png';
smaller_so[1].style.height='130px';
for(let i=2; i<6;i++){
smaller_a[i].style.height='30px';
}

}
else if(media_button[2].value=='up'){
media_button[2].value='down';
media_down[2].src='https://www.starbucks.co.kr/common/img/common/mob_gnb_arrow_down_w.png';
smaller_so[1].style.height='0px';
for(let i=2; i<6;i++){
smaller_a[i].style.height='0px';
}
}
});
media_button[3].addEventListener('click',()=>{
if(media_button[3].value=='down'){
media_button[3].value='up';
media_down[3].src='https://www.starbucks.co.kr/common/img/common/mob_gnb_arrow_up_w.png';
smaller_so[2].style.height='130px';
for(let i=6; i<9;i++){
smaller_a[i].style.height='30px';
}

}
else if(media_button[3].value=='up'){
media_button[3].value='down';
media_down[3].src='https://www.starbucks.co.kr/common/img/common/mob_gnb_arrow_down_w.png';
smaller_so[2].style.height='0px';
for(let i=6; i<9;i++){
smaller_a[i].style.height='0px';
}
}
});
media_button[4].addEventListener('click',()=>{
if(media_button[4].value=='down'){
media_button[4].value='up';
media_down[4].src='https://www.starbucks.co.kr/common/img/common/mob_gnb_arrow_up_w.png';
smaller_so[3].style.height='130px';
for(let i=9; i<12;i++){
smaller_a[i].style.height='30px';
}

}
else if(media_button[4].value=='up'){
media_button[4].value='down';
media_down[4].src='https://www.starbucks.co.kr/common/img/common/mob_gnb_arrow_down_w.png';
smaller_so[3].style.height='0px';
for(let i=9; i<12;i++){
smaller_a[i].style.height='0px';
}
}
});
media_button[5].addEventListener('click',()=>{
if(media_button[5].value=='down'){
media_button[5].value='up';
media_down[5].src='https://www.starbucks.co.kr/common/img/common/mob_gnb_arrow_up_w.png';
smaller_so[4].style.height='130px';
for(let i=12; i<15;i++){
smaller_a[i].style.height='30px';
}

}
else if(media_button[5].value=='up'){
media_button[5].value='down';
media_down[5].src='https://www.starbucks.co.kr/common/img/common/mob_gnb_arrow_down_w.png';
smaller_so[4].style.height='0px';
for(let i=12; i<15;i++){
smaller_a[i].style.height='0px';
}
}
});

media_button[6].addEventListener('click',()=>{
if(media_button[6].value=='down'){
media_button[6].value='up';
media_down[6].src='https://www.starbucks.co.kr/common/img/common/mob_gnb_arrow_up_w.png';
for(let i=12; i<19; i++){
so[i].style.height='60px';
stuff[i].style.display='flex';
}
}
else if(media_button[6].value=='up'){ //coffee를 닫았을때
media_button[6].value='down';
media_down[6].src='https://www.starbucks.co.kr/common/img/common/mob_gnb_arrow_down_w.png';
for(let i=12; i<19; i++){
so[i].style.height='0px';
stuff[i].style.display='none';
}
for(let i=15; i<37;i++){
smaller_a[i].style.height='0px';
}
for(let i=5; i<10; i++){
smaller_so[i].style.height='0px';
}
for (let i=7; i<11; i++){
media_button[i].value='down';
media_down[i].src='https://www.starbucks.co.kr/common/img/common/mob_gnb_arrow_down_w.png';
}
}
}); // COFFEE
media_button[7].addEventListener('click',()=>{
if(media_button[7].value=='down'){
media_button[7].value='up';
media_down[7].src='https://www.starbucks.co.kr/common/img/common/mob_gnb_arrow_up_w.png';
smaller_so[5].style.height='90px';
for(let i=15; i<18;i++){
smaller_a[i].style.height='30px';

}
}

else if(media_button[7].value=='up'){
media_button[7].value='down';
media_down[7].src='https://www.starbucks.co.kr/common/img/common/mob_gnb_arrow_down_w.png';
smaller_so[5].style.height='0px';
for(let i=15; i<18;i++){
smaller_a[i].style.height='0px';
}
}
});
media_button[8].addEventListener('click',()=>{
if(media_button[8].value=='down'){
media_button[8].value='up';
media_down[8].src='https://www.starbucks.co.kr/common/img/common/mob_gnb_arrow_up_w.png';
smaller_so[6].style.height='90px';
for(let i=18; i<20;i++){
smaller_a[i].style.height='30px';
}
}

else if(media_button[8].value=='up'){
media_button[8].value='down';
media_down[8].src='https://www.starbucks.co.kr/common/img/common/mob_gnb_arrow_down_w.png';
smaller_so[6].style.height='0px';
for(let i=18; i<20;i++){
smaller_a[i].style.height='0px';
}
}
});
media_button[9].addEventListener('click',()=>{
if(media_button[9].value=='down'){
media_button[9].value='up';
media_down[9].src='https://www.starbucks.co.kr/common/img/common/mob_gnb_arrow_up_w.png';
smaller_so[7].style.height='250px';
for(let i=20; i<27;i++){
smaller_a[i].style.height='35px';
}
}

else if(media_button[9].value=='up'){
media_button[9].value='down';
media_down[9].src='https://www.starbucks.co.kr/common/img/common/mob_gnb_arrow_down_w.png';
smaller_so[7].style.height='0px';
for(let i=20; i<27;i++){
smaller_a[i].style.height='0px';
}
}
});
media_button[10].addEventListener('click',()=>{
if(media_button[10].value=='down'){
media_button[10].value='up';
media_down[10].src='https://www.starbucks.co.kr/common/img/common/mob_gnb_arrow_up_w.png';
smaller_so[8].style.height='250px';
for(let i=27; i<32;i++){
smaller_a[i].style.height='40px';
}
}

else if(media_button[10].value=='up'){
media_button[10].value='down';
media_down[10].src='https://www.starbucks.co.kr/common/img/common/mob_gnb_arrow_down_w.png';
smaller_so[8].style.height='0px';
for(let i=27; i<32;i++){
smaller_a[i].style.height='0px';
}
}
});
media_button[11].addEventListener('click',()=>{
if(media_button[11].value=='down'){
media_button[11].value='up';
media_down[11].src='https://www.starbucks.co.kr/common/img/common/mob_gnb_arrow_up_w.png';
smaller_so[9].style.height='250px';
for(let i=32; i<37;i++){
smaller_a[i].style.height='40px';
}
}

else if(media_button[11].value=='up'){
media_button[11].value='down';
media_down[11].src='https://www.starbucks.co.kr/common/img/common/mob_gnb_arrow_down_w.png';
smaller_so[9].style.height='0px';
for(let i=32; i<37;i++){
smaller_a[i].style.height='0px';
}
}
});

media_button[12].addEventListener('click',()=>{
if(media_button[12].value=='down'){
media_button[12].value='up';
media_down[12].src='https://www.starbucks.co.kr/common/img/common/mob_gnb_arrow_up_w.png';
for(let i=19; i<25; i++){
so[i].style.height='60px';
stuff[i].style.display='flex';
}
}
else if(media_button[12].value=='up'){ //coffee를 닫았을때
media_button[12].value='down';
media_down[12].src='https://www.starbucks.co.kr/common/img/common/mob_gnb_arrow_down_w.png';
for(let i=19; i<25; i++){
so[i].style.height='0px';
stuff[i].style.display='none';
}
for(let i=37; i<70;i++){
smaller_a[i].style.height='0px';
}
for(let i=10; i<14; i++){
smaller_so[i].style.height='0px';
}
for (let i=12; i<18; i++){
media_button[i].value='down';
media_down[i].src='https://www.starbucks.co.kr/common/img/common/mob_gnb_arrow_down_w.png';
}
}
}); //MENU
media_button[13].addEventListener('click',()=>{
if(media_button[13].value=='down'){
media_button[13].value='up';
media_down[13].src='https://www.starbucks.co.kr/common/img/common/mob_gnb_arrow_up_w.png';
smaller_so[10].style.height='400px';
for(let i=37; i<46;i++){
smaller_a[i].style.height='35px';

}
}

else if(media_button[13].value=='up'){
media_button[13].value='down';
media_down[13].src='https://www.starbucks.co.kr/common/img/common/mob_gnb_arrow_down_w.png';
smaller_so[10].style.height='0px';
for(let i=37; i<46;i++){
smaller_a[i].style.height='0px';
}
}
});
media_button[14].addEventListener('click',()=>{
if(media_button[14].value=='down'){
media_button[14].value='up';
media_down[14].src='https://www.starbucks.co.kr/common/img/common/mob_gnb_arrow_up_w.png';
smaller_so[11].style.height='300px';
for(let i=47; i<55;i++){
smaller_a[i].style.height='35px';

}
}

else if(media_button[14].value=='up'){
media_button[14].value='down';
media_down[14].src='https://www.starbucks.co.kr/common/img/common/mob_gnb_arrow_down_w.png';
smaller_so[11].style.height='0px';
for(let i=47; i<55;i++){
smaller_a[i].style.height='0px';
}
}
});
media_button[15].addEventListener('click',()=>{
if(media_button[15].value=='down'){
media_button[15].value='up';
media_down[15].src='https://www.starbucks.co.kr/common/img/common/mob_gnb_arrow_up_w.png';
smaller_so[12].style.height='350px';
for(let i=55; i<64;i++){
smaller_a[i].style.height='35px';

}
}

else if(media_button[15].value=='up'){
media_button[15].value='down';
media_down[15].src='https://www.starbucks.co.kr/common/img/common/mob_gnb_arrow_down_w.png';
smaller_so[12].style.height='0px';
for(let i=55; i<64;i++){
smaller_a[i].style.height='0px';
}
}
});
media_button[16].addEventListener('click',()=>{
if(media_button[16].value=='down'){
media_button[16].value='up';
media_down[16].src='https://www.starbucks.co.kr/common/img/common/mob_gnb_arrow_up_w.png';
smaller_so[13].style.height='150px';
for(let i=64; i<67;i++){
smaller_a[i].style.height='35px';

}
}

else if(media_button[16].value=='up'){
media_button[16].value='down';
media_down[16].src='https://www.starbucks.co.kr/common/img/common/mob_gnb_arrow_down_w.png';
smaller_so[13].style.height='0px';
for(let i=64; i<67;i++){
smaller_a[i].style.height='0px';
}
}
});
media_button[17].addEventListener('click',()=>{
if(media_button[17].value=='down'){
media_button[17].value='up';
media_down[17].src='https://www.starbucks.co.kr/common/img/common/mob_gnb_arrow_up_w.png';
smaller_so[14].style.height='150px';
for(let i=67; i<70;i++){
smaller_a[i].style.height='35px';

}
}

else if(media_button[17].value=='up'){
media_button[17].value='down';
media_down[17].src='https://www.starbucks.co.kr/common/img/common/mob_gnb_arrow_down_w.png';
smaller_so[14].style.height='0px';
for(let i=67; i<70;i++){
smaller_a[i].style.height='0px';
}
}
});

media_button[18].addEventListener('click',()=>{
if(media_button[18].value=='down'){
media_button[18].value='up';
media_down[18].src='https://www.starbucks.co.kr/common/img/common/mob_gnb_arrow_up_w.png';
for(let i=25; i<31; i++){
so[i].style.height='60px';
stuff[i].style.display='flex';
}
}
else if(media_button[18].value=='up'){ //coffee를 닫았을때
media_button[18].value='down';
media_down[18].src='https://www.starbucks.co.kr/common/img/common/mob_gnb_arrow_down_w.png';
for(let i=25; i<31; i++){
so[i].style.height='0px';
stuff[i].style.display='none';
}
for(let i=70; i<73;i++){
smaller_a[i].style.height='0px';
}
for(let i=15; i<17; i++){
smaller_so[i].style.height='0px';
}
for (let i=18; i<21; i++){
media_button[i].value='down';
media_down[i].src='https://www.starbucks.co.kr/common/img/common/mob_gnb_arrow_down_w.png';
}
}
}); //STORE
media_button[19].addEventListener('click',()=>{
if(media_button[19].value=='down'){
media_button[19].value='up';
media_down[19].src='https://www.starbucks.co.kr/common/img/common/mob_gnb_arrow_up_w.png';
smaller_so[15].style.height='100px';
for(let i=70; i<72;i++){
smaller_a[i].style.height='35px';
}
}
else if(media_button[19].value=='up'){
media_button[19].value='down';
media_down[19].src='https://www.starbucks.co.kr/common/img/common/mob_gnb_arrow_down_w.png';
smaller_so[15].style.height='0px';
for(let i=70; i<72;i++){
smaller_a[i].style.height='0px';
}
}
});
media_button[20].addEventListener('click',()=>{
if(media_button[20].value=='down'){
media_button[20].value='up';
media_down[20].src='https://www.starbucks.co.kr/common/img/common/mob_gnb_arrow_up_w.png';
smaller_so[16].style.height='50px';
for(let i=72; i<73;i++){
smaller_a[i].style.height='35px';
}
}
else if(media_button[20].value=='up'){
media_button[20].value='down';
media_down[20].src='https://www.starbucks.co.kr/common/img/common/mob_gnb_arrow_down_w.png';
smaller_so[16].style.height='0px';
for(let i=72; i<73;i++){
smaller_a[i].style.height='0px';
}
}
});

media_button[21].addEventListener('click',()=>{
if(media_button[21].value=='down'){
media_button[21].value='up';
media_down[21].src='https://www.starbucks.co.kr/common/img/common/mob_gnb_arrow_up_w.png';
for(let i=31; i<37; i++){
so[i].style.height='60px';
stuff[i].style.display='flex';
}
}
else if(media_button[21].value=='up'){ //coffee를 닫았을때
media_button[21].value='down';
media_down[21].src='https://www.starbucks.co.kr/common/img/common/mob_gnb_arrow_down_w.png';
for(let i=31; i<37; i++){
so[i].style.height='0px';
stuff[i].style.display='none';
}
for(let i=73; i<88;i++){
smaller_a[i].style.height='0px';
}
for(let i=17; i<21; i++){
smaller_so[i].style.height='0px';
}
for (let i=21; i<25; i++){
media_button[i].value='down';
media_down[i].src='https://www.starbucks.co.kr/common/img/common/mob_gnb_arrow_down_w.png';
}
}
}); //RESPONSIBILITY
media_button[22].addEventListener('click',()=>{
if(media_button[22].value=='down'){
media_button[22].value='up';
media_down[22].src='https://www.starbucks.co.kr/common/img/common/mob_gnb_arrow_up_w.png';
smaller_so[17].style.height='250px';
for(let i=73; i<79;i++){
smaller_a[i].style.height='35px';
}
}
else if(media_button[22].value=='up'){
media_button[22].value='down';
media_down[22].src='https://www.starbucks.co.kr/common/img/common/mob_gnb_arrow_down_w.png';
smaller_so[17].style.height='0px';
for(let i=73; i<79;i++){
smaller_a[i].style.height='0px';
}
}
});
media_button[23].addEventListener('click',()=>{
if(media_button[23].value=='down'){
media_button[23].value='up';
media_down[23].src='https://www.starbucks.co.kr/common/img/common/mob_gnb_arrow_up_w.png';
smaller_so[18].style.height='150px';
for(let i=79; i<82;i++){
smaller_a[i].style.height='35px';
}
}
else if(media_button[23].value=='up'){
media_button[23].value='down';
media_down[23].src='https://www.starbucks.co.kr/common/img/common/mob_gnb_arrow_down_w.png';
smaller_so[18].style.height='0px';
for(let i=79; i<82;i++){
smaller_a[i].style.height='0px';
}
}
});
media_button[24].addEventListener('click',()=>{
if(media_button[24].value=='down'){
media_button[24].value='up';
media_down[24].src='https://www.starbucks.co.kr/common/img/common/mob_gnb_arrow_up_w.png';
smaller_so[19].style.height='130px';
for(let i=82; i<85;i++){
smaller_a[i].style.height='35px';
}
}
else if(media_button[24].value=='up'){
media_button[24].value='down';
media_down[24].src='https://www.starbucks.co.kr/common/img/common/mob_gnb_arrow_down_w.png';
smaller_so[19].style.height='0px';
for(let i=82; i<85;i++){
smaller_a[i].style.height='0px';
}
}
});
media_button[25].addEventListener('click',()=>{
if(media_button[25].value=='down'){
media_button[25].value='up';
media_down[25].src='https://www.starbucks.co.kr/common/img/common/mob_gnb_arrow_up_w.png';
smaller_so[20].style.height='130px';
for(let i=85; i<88;i++){
smaller_a[i].style.height='35px';
}
}
else if(media_button[25].value=='up'){
media_button[25].value='down';
media_down[25].src='https://www.starbucks.co.kr/common/img/common/mob_gnb_arrow_down_w.png';
smaller_so[20].style.height='0px';
for(let i=85; i<88;i++){
smaller_a[i].style.height='0px';
}
}
});

media_button[26].addEventListener('click',()=>{
if(media_button[26].value=='down'){
media_button[26].value='up';
media_down[26].src='https://www.starbucks.co.kr/common/img/common/mob_gnb_arrow_up_w.png';
for(let i=37; i<41; i++){
so[i].style.height='60px';
stuff[i].style.display='flex';
}
}
else if(media_button[26].value=='up'){
media_button[26].value='down';
media_down[26].src='https://www.starbucks.co.kr/common/img/common/mob_gnb_arrow_down_w.png';
for(let i=37; i<41; i++){
so[i].style.height='0px';
stuff[i].style.display='none';
}
for(let i=88; i<102;i++){
smaller_a[i].style.height='0px';
}
for(let i=21; i<24; i++){
smaller_so[i].style.height='0px';
}
for (let i=27; i<30; i++){
media_button[i].value='down';
media_down[i].src='https://www.starbucks.co.kr/common/img/common/mob_gnb_arrow_down_w.png';
}
}
}); //Starbucks Rewards
media_button[27].addEventListener('click',()=>{
if(media_button[27].value=='down'){
media_button[27].value='up';
media_down[27].src='https://www.starbucks.co.kr/common/img/common/mob_gnb_arrow_up_w.png';
smaller_so[21].style.height='200px';
for(let i=88; i<92;i++){
smaller_a[i].style.height='35px';
}
}
else if(media_button[27].value=='up'){
media_button[27].value='down';
media_down[27].src='https://www.starbucks.co.kr/common/img/common/mob_gnb_arrow_down_w.png';
smaller_so[21].style.height='0px';
for(let i=88; i<92;i++){
smaller_a[i].style.height='0px';
}
}
});
media_button[28].addEventListener('click',()=>{
if(media_button[28].value=='down'){
media_button[28].value='up';
media_down[28].src='https://www.starbucks.co.kr/common/img/common/mob_gnb_arrow_up_w.png';
smaller_so[22].style.height='250px';
for(let i=92; i<98;i++){
smaller_a[i].style.height='35px';
}
}
else if(media_button[28].value=='up'){
media_button[28].value='down';
media_down[28].src='https://www.starbucks.co.kr/common/img/common/mob_gnb_arrow_down_w.png';
smaller_so[22].style.height='0px';
for(let i=92; i<98;i++){
smaller_a[i].style.height='0px';
}
}
});
media_button[29].addEventListener('click',()=>{
if(media_button[29].value=='down'){
media_button[29].value='up';
media_down[29].src='https://www.starbucks.co.kr/common/img/common/mob_gnb_arrow_up_w.png';
smaller_so[23].style.height='200px';
for(let i=98; i<102;i++){
smaller_a[i].style.height='35px';
}
}
else if(media_button[29].value=='up'){
media_button[29].value='down';
media_down[29].src='https://www.starbucks.co.kr/common/img/common/mob_gnb_arrow_down_w.png';
smaller_so[23].style.height='0px';
for(let i=98; i<102;i++){
smaller_a[i].style.height='0px';
}
}
});

media_button[30].addEventListener('click',()=>{
if(media_button[30].value=='down'){
media_button[30].value='up';
media_down[30].src='https://www.starbucks.co.kr/common/img/common/mob_gnb_arrow_up_w.png';
for(let i=41; i<47; i++){
so[i].style.height='60px';
stuff[i].style.display='flex';
}
}
else if(media_button[30].value=='up'){
media_button[30].value='down';
media_down[30].src='https://www.starbucks.co.kr/common/img/common/mob_gnb_arrow_down_w.png';
for(let i=41; i<47; i++){
so[i].style.height='0px';
stuff[i].style.display='none';
}
for(let i=102; i<113;i++){
smaller_a[i].style.height='0px';
}
for(let i=24; i<28; i++){
smaller_so[i].style.height='0px';
}
for (let i=31; i<35; i++){
media_button[i].value='down';
media_down[i].src='https://www.starbucks.co.kr/common/img/common/mob_gnb_arrow_down_w.png';
}
}
}); //WHAT'S NEW
media_button[31].addEventListener('click',()=>{
if(media_button[31].value=='down'){
media_button[31].value='up';
media_down[31].src='https://www.starbucks.co.kr/common/img/common/mob_gnb_arrow_up_w.png';
smaller_so[24].style.height='200px';
for(let i=102; i<106;i++){
smaller_a[i].style.height='35px';
}
}
else if(media_button[31].value=='up'){
media_button[31].value='down';
media_down[31].src='https://www.starbucks.co.kr/common/img/common/mob_gnb_arrow_down_w.png';
smaller_so[24].style.height='0px';
for(let i=102; i<106;i++){
smaller_a[i].style.height='0px';
}
}
});
media_button[32].addEventListener('click',()=>{
if(media_button[32].value=='down'){
media_button[32].value='up';
media_down[32].src='https://www.starbucks.co.kr/common/img/common/mob_gnb_arrow_up_w.png';
smaller_so[25].style.height='200px';
for(let i=106; i<111;i++){
smaller_a[i].style.height='35px';
}
}
else if(media_button[32].value=='up'){
media_button[32].value='down';
media_down[32].src='https://www.starbucks.co.kr/common/img/common/mob_gnb_arrow_down_w.png';
smaller_so[25].style.height='0px';
for(let i=106; i<111;i++){
smaller_a[i].style.height='0px';
}
}
});
media_button[33].addEventListener('click',()=>{
if(media_button[33].value=='down'){
media_button[33].value='up';
media_down[33].src='https://www.starbucks.co.kr/common/img/common/mob_gnb_arrow_up_w.png';
smaller_so[26].style.height='100px';
for(let i=111; i<113;i++){
smaller_a[i].style.height='35px';
}
}
else if(media_button[33].value=='up'){
media_button[33].value='down';
media_down[33].src='https://www.starbucks.co.kr/common/img/common/mob_gnb_arrow_down_w.png';
smaller_so[26].style.height='0px';
for(let i=111; i<113;i++){
smaller_a[i].style.height='0px';
}
}
});


media_bottom_img[0].addEventListener('click',()=>{
if(media_bottom_img[0].src=='https://www.starbucks.co.kr/common/img/common/mob_gnb_arrow_down_w.png'){
media_bottom_img[0].src='https://www.starbucks.co.kr/common/img/common/mob_gnb_arrow_up_w.png';
media_bottom_second_line[0].style.height='220px';

}
else if(media_bottom_img[0].src=='https://www.starbucks.co.kr/common/img/common/mob_gnb_arrow_up_w.png'){
media_bottom_img[0].src='https://www.starbucks.co.kr/common/img/common/mob_gnb_arrow_down_w.png';
media_bottom_second_line[0].style.height='0px';
media_bottom_inline[0].style.height='0px';
media_bottom_second_line[0].style.height='0px';
media_bottom_img[1].src='https://www.starbucks.co.kr/common/img/common/mob_gnb_arrow_down_w.png';
}
}); // CUSTOMER SERVICE & IDEAS
media_bottom_img[1].addEventListener('click',()=>{
if(media_bottom_img[1].src=='https://www.starbucks.co.kr/common/img/common/mob_gnb_arrow_down_w.png'){
media_bottom_img[1].src='https://www.starbucks.co.kr/common/img/common/mob_gnb_arrow_up_w.png';
media_bottom_inline[0].style.height='100px';
media_bottom_second_line[0].style.height='320px';
}
else if(media_bottom_img[1].src=='https://www.starbucks.co.kr/common/img/common/mob_gnb_arrow_up_w.png'){
media_bottom_img[1].src='https://www.starbucks.co.kr/common/img/common/mob_gnb_arrow_down_w.png';
media_bottom_inline[0].style.height='0px';
media_bottom_second_line[0].style.height='220px';
}
});

media_bottom_img[2].addEventListener('click',()=>{
if(media_bottom_img[2].src=='https://www.starbucks.co.kr/common/img/common/mob_gnb_arrow_down_w.png'){
media_bottom_img[2].src='https://www.starbucks.co.kr/common/img/common/mob_gnb_arrow_up_w.png';
media_bottom_second_line[1].style.height='250px';
}
else if(media_bottom_img[2].src=='https://www.starbucks.co.kr/common/img/common/mob_gnb_arrow_up_w.png'){
media_bottom_img[2].src='https://www.starbucks.co.kr/common/img/common/mob_gnb_arrow_down_w.png';
media_bottom_img[3].src='https://www.starbucks.co.kr/common/img/common/mob_gnb_arrow_down_w.png';
media_bottom_second_line[1].style.height='0px';
media_bottom_inline[1].style.height='0px';
}
}); //COMPANY
media_bottom_img[3].addEventListener('click',()=>{
if(media_bottom_img[3].src=='https://www.starbucks.co.kr/common/img/common/mob_gnb_arrow_down_w.png'){
media_bottom_img[3].src='https://www.starbucks.co.kr/common/img/common/mob_gnb_arrow_up_w.png';
media_bottom_inline[1].style.height='100px';
media_bottom_second_line[1].style.height='355px';
}
else if(media_bottom_img[3].src=='https://www.starbucks.co.kr/common/img/common/mob_gnb_arrow_up_w.png'){
media_bottom_img[3].src='https://www.starbucks.co.kr/common/img/common/mob_gnb_arrow_down_w.png';
media_bottom_inline[1].style.height='0px';
media_bottom_second_line[1].style.height='250px';
}
});

media_bottom_img[4].addEventListener('click',()=>{
if(media_bottom_img[4].src=='https://www.starbucks.co.kr/common/img/common/mob_gnb_arrow_down_w.png'){
media_bottom_img[4].src='https://www.starbucks.co.kr/common/img/common/mob_gnb_arrow_up_w.png';
media_bottom_second_line[2].style.height='50px';
}
else if(media_bottom_img[4].src=='https://www.starbucks.co.kr/common/img/common/mob_gnb_arrow_up_w.png'){
media_bottom_img[4].src='https://www.starbucks.co.kr/common/img/common/mob_gnb_arrow_down_w.png';
media_bottom_second_line[2].style.height='0px';
}
}); //CORPORATE SALES

media_bottom_img[5].addEventListener('click',()=>{
if(media_bottom_img[5].src=='https://www.starbucks.co.kr/common/img/common/mob_gnb_arrow_down_w.png'){
media_bottom_img[5].src='https://www.starbucks.co.kr/common/img/common/mob_gnb_arrow_up_w.png';
media_bottom_second_line[3].style.height='100px';
}
else if(media_bottom_img[5].src=='https://www.starbucks.co.kr/common/img/common/mob_gnb_arrow_up_w.png'){
media_bottom_img[5].src='https://www.starbucks.co.kr/common/img/common/mob_gnb_arrow_down_w.png';
media_bottom_second_line[3].style.height='0px';
}
}); //PARTNERSHIP

media_bottom_img[6].addEventListener('click',()=>{
if(media_bottom_img[6].src=='https://www.starbucks.co.kr/common/img/common/mob_gnb_arrow_down_w.png'){
media_bottom_img[6].src='https://www.starbucks.co.kr/common/img/common/mob_gnb_arrow_up_w.png';
media_bottom_second_line[4].style.height='200px';
}
else if(media_bottom_img[6].src=='https://www.starbucks.co.kr/common/img/common/mob_gnb_arrow_up_w.png'){
media_bottom_img[6].src='https://www.starbucks.co.kr/common/img/common/mob_gnb_arrow_down_w.png';
media_bottom_second_line[4].style.height='0px';
}
}); //ONLINE COMMUNITY

media_bottom_img[7].addEventListener('click',()=>{
if(media_bottom_img[7].src=='https://www.starbucks.co.kr/common/img/common/mob_gnb_arrow_down_w.png'){
media_bottom_img[7].src='https://www.starbucks.co.kr/common/img/common/mob_gnb_arrow_up_w.png';
media_bottom_second_line[5].style.height='100px';
}
else if(media_bottom_img[7].src=='https://www.starbucks.co.kr/common/img/common/mob_gnb_arrow_up_w.png'){
media_bottom_img[7].src='https://www.starbucks.co.kr/common/img/common/mob_gnb_arrow_down_w.png';
media_bottom_second_line[5].style.height='0px';
}
}); //RECRUIT


media_bottom_slide_button.addEventListener('click',()=>{
if(media_bottom_slide_button.value=='play'){
media_bottom_slide_button.value='pause';
media_bottom_slide_img.src='/starbucks/starbucks_img/pause.svg';
media_bottom2_slide2.style.animationName='media_slide';
}
else if(media_bottom_slide_button.value=='pause'){
media_bottom_slide_button.value='play';
media_bottom_slide_img.src='/starbucks/starbucks_img/play.svg';
media_bottom2_slide2.style.animationName='stop';
}
});

window.addEventListener('scroll',()=>{
console.log(window.scrollY);
if(window.scrollY<300){
coffee_img1.style.animationName='main1';
coffee_img2.style.animationName='main2';
coffee_img3.style.animationName='main3';
coffee_img4.style.animationName='main4';
coffee_img_button.style.animationName='main5';
}
else{
coffee_img1.style.animationName='stop';
coffee_img2.style.animationName='stop';
coffee_img3.style.animationName='stop';
coffee_img4.style.animationName='stop';
coffee_img_button.style.animationName='stop';
}
});
