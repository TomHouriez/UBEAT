<template>

<nav class="navbar is-black" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">  
 <a class="navbar-item">
        <span class="icon">
          <i class="fas fa-home is-medium"></i>
        </span>
        <span>Home</span>
      </a>
       
    <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
         
      <a class="navbar-item desktop tablet">
        <div class="control has-icons-left"  >
        <input class="input" type="search" placeholder="search...">
        <span class="icon is-left">
          <i class="fas fa-search"></i>
        </span>
  
        </div>
      </a>   
      <a class="navbar-item desktop">
       <a class="button is-black">Listes de lectures</a>
      </a>
    
    </div>
    <div class="navbar-end desktop tablet">
    <div class="navbar-item has-dropdown is-hoverable">
      <a class="navbar-link">
      <span class="icon is-medium"><i class="fa fa-user"></i></span>
      <span>User</span>
      </a>
         <div class="navbar-dropdown">
        <a class="navbar-item">        
        <span class="icon"><i class="fa fa-sign-out"></i></span>
        <span>Sign out</span>
       </a>
      <a class="navbar-item">      
     <span class="icon"><i class="fa fa-cog"></i></span>
     <span>Settings</span>
    </a>      
    </div>
    </div>     
        
      
    </div>
  </div>
</nav>
</template>

<style>

</style>