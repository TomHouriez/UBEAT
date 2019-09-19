<template>
<section class="hero is-fullheight has-background-grey">
  <div class="hero-body">
   <div class="container">

  <figure class="image center">
    <img src="http://www.ac-grenoble.fr/ecole/praranger/wp-content/uploads/2017/10/musique.png">
    <figcaption><a class="button is-primary is-large is-outlined is-round" href="./artist">Try it ! </a></figcaption>
     
  </figure>
 
   </div>
   </div>
  
</section>
  
</template>

<style>

.center{
	display: flex;
  flex-direction: row ; 
	justify-content: center;
	align-items: center;
}

.button
{
  position: absolute ; 
  float :right;
  background-color:rgb(245, 130, 31);
 
  /*width: 200px;*/

}

@media (max-width:  1024px) { 
     .button{ width: 300px;
     height: 100px;
     }
}    


@media (max-width:  769px) { 
     .button{ width: 100px;}
}    



/*mobile: up to 768px
tablet: from 769px
desktop: from 1024px*/

/*.hero 
{
  background: url(http://www.ac-grenoble.fr/ecole/praranger/wp-content/uploads/2017/10/musique.png) center/cover;
}
@media (max-width: 1024px) { .hero { background: url(http://www.ac-grenoble.fr/ecole/praranger/wp-content/uploads/2017/10/musique.png) center / cover; } }
@media (max-width:  768px) { .hero { background: url(http://www.ac-grenoble.fr/ecole/praranger/wp-content/uploads/2017/10/musique.png) center / cover; } }
*/
/*:not(path):not(g) {
	color:                    hsla(210, 100%, 100%, 0.9) !important;
	background:               hsla(210, 100%,  50%, 0.5) !important;
	outline:    solid 0.25rem hsla(210, 100%, 100%, 0.5) !important;

	box-shadow: none !important;
}*/
</style>
