<template>
    <div>
      <div v-if="showWelcomePage" class="welcome-page">
        <h1>Welcome to My Personal Profile</h1>
        <button @click="enterSite">Enter Site</button>
      </div>
 
      <div v-show="!showWelcomePage" class="main-content">
        <nav class="navbar">
          <ul>
            <li><a href="#about">About Me</a></li>
            <li><a href="#connect">Connect With Me</a></li>
            <li><a href="#hobbies">Hobbies & Goals</a></li>
            <li><a href="#gallery">Gallery</a></li>
          </ul>
        </nav>
  
        <div class="grid-container">
          <div class="item1" id="about">
            <h1>Personal Profile Web Page</h1>
          </div>
          <div class="item2" id="connect">
            <h2>Connect With Me</h2>
            <p>
              You can find me on
              <a href="https://www.linkedin.com/in/luis-lazaro-b626a8286/" target="_blank">LinkedIn</a>.
            </p>
          </div>
          <div class="item3">
            <h2>About Me</h2>
            <p>I am Luis Lorenzo D. Lazaro.</p>
            <p>
              I am currently enrolled at Asia Pacific College in the course BSCS-SF231. I live in Marikina City. 
              Fun Fact about me is I have 3 dogs that are all girls.
            </p>
            <h3>Education / Achievements</h3>
            <p>I have graduated preschool from Integrated School for Young Children (ISYC).</p>
            <p>I have graduated elementary level from Marist School.</p>
            <p>I have graduated senior high from Marikina Science High School.</p>
            <h3>IT Experience</h3>
            <ul>
              <li>
                Contributed to a working website and app for a school project here in APC, 
                the website and application was named Rams Pawtners.
              </li>
              <li>Completed a course in Code Combat.</li>
            </ul>
          </div>
          <div class="item4" id="hobbies">
            <h3>Hobbies and Goals</h3>
            <table>
              <thead>
                <tr>
                  <th>Hobbies & Interests</th>
                  <th>Goals in Life / Dream</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Playing basketball</td>
                  <td>To finish college</td>
                </tr>
                <tr>
                  <td>Playing video games</td>
                  <td>To give back to my parents for their sacrifices</td>
                </tr>
                <tr>
                  <td>Listening to music</td>
                  <td>To be a successful professional in my chosen field</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="item5" id="gallery">
            <h3>Picture Gallery</h3>
            <div class="gallery">
              <img src="https://scontent.fmnl30-2.fna.fbcdn.net/v/t1.15752-9/481865437_617940431220588_1566384181150925618_n.jpg?stp=dst-jpg_s640x640_tt6&_nc_cat=111&ccb=1-7&_nc_sid=0024fc&_nc_eui2=AeFsZmvX0tVAoIqx0tB67x9NJvCyHObet5Im8LIc5t63ksiesxQpTJPqfQ-c1odGFHFzifMDSTyhSxUBVMF31jxZ&_nc_ohc=AB2-FFZrEtkQ7kNvgGpQakU&_nc_oc=AdinyEbni7tA2Lzswrcp3pTfLkp9X4lpkTb12A0dOYaw0QkBro9Cs_95jKwbuGDbImQ&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fmnl30-2.fna&oh=03_Q7cD1gGy6QGomWZt6WSplg-iclCN2bunJiJuExRFCesZGXZoXw&oe=67EFC623" alt="Image 1">
              <img src="https://scontent.fmnl30-2.fna.fbcdn.net/v/t1.15752-9/482194901_1164921068512703_5433057008602376022_n.jpg?stp=dst-jpg_s480x480_tt6&_nc_cat=100&ccb=1-7&_nc_sid=0024fc&_nc_eui2=AeHrkoHL_N91vbYQnPytXZ-mC1AjgKw1UTsLUCOArDVRO_s_qma3xKiAEMYJvo-fVs2eQvjX9zDAHg_P0H4Db6oc&_nc_ohc=ssWS8aQHxg4Q7kNvgGXTCU8&_nc_oc=Adh1wzKtQ-9oRaixr6K9nCiBMQjCw8Ss5iS-RP9mFvtM4TwpykrucVQ6OJ4fE8w-7KE&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fmnl30-2.fna&oh=03_Q7cD1gFn9XJi_s6Y8oEMV_T-le6gTEz2g5wWt7egkyTw-JjGvQ&oe=67EFADEC" alt="Image 2">
              <img src="https://scontent.fmnl30-2.fna.fbcdn.net/v/t1.15752-9/482291816_2817193478463738_172566148447157408_n.jpg?stp=dst-jpg_s640x640_tt6&_nc_cat=110&ccb=1-7&_nc_sid=0024fc&_nc_eui2=AeF1TwNScCDxhAE_2qLduhaN4s-Izre11uDiz4jOt7XW4Ome5cz3arukPtnQqk0itcQlYlPrENl1i6MJizXtt_47&_nc_ohc=cXBPIZZJCzsQ7kNvgEaBlxC&_nc_oc=AdhP56I4WItlEAnZ9pQQJnk8wwDN3KY6RQFqh0NlyZCItw-OflEZCihFy0aJVP24I64&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fmnl30-2.fna&oh=03_Q7cD1gGaMTvco2kPf-HQjKPegiKvERvcI-Ui_7qDsBGnOkFM5g&oe=67EFD2B6" alt="Image 3">
              <img src="https://scontent.fmnl30-3.fna.fbcdn.net/v/t1.15752-9/481401204_28578321155145885_5681485140275656498_n.png?stp=dst-png_s640x640&_nc_cat=101&ccb=1-7&_nc_sid=0024fc&_nc_eui2=AeFEIh7ilYSHmJ6A-Vs8e-bcWY3R4qe2JFJZjdHip7YkUqmIXLzwFcYa08nI7DSsPa7AO-px62fRapZ9dMTOFvTL&_nc_ohc=_dBfwO1m2rMQ7kNvgEviggM&_nc_oc=Adivxvi7iRnN_1PYCml2Nr68bxnq22f0e1imk9Un-GEk-0-ICVnES2Akk3hNeYh-Xec&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fmnl30-3.fna&oh=03_Q7cD1gGToli7cGEmGtikyjYANLx6sanWPnFOyORZQjft_SPD5g&oe=67EFD7CC" alt="Image 4">
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        showWelcomePage: true,
      };
    },
    methods: {
      enterSite() {
        this.showWelcomePage = false;
      },
    },
  };
  </script>
  
  <style scoped>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: "Poppins", sans-serif;
    line-height: 1.6;
    background-color: #f4f4f4;
    color: #333;
    background-image: url("https://images.unsplash.com/photo-1485470733090-0aae1788d5af?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80");
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
  }

  .welcome-page {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.7);
    color: #fff;
    text-align: center;
    z-index: 1000;
  }
  
  .welcome-page h1 {
    font-size: 3rem;
    margin-bottom: 20px;
  }
  
  .welcome-page button {
    padding: 10px 20px;
    font-size: 1.2rem;
    background: #3498db;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background 0.3s ease;
  }
  
  .welcome-page button:hover {
    background: #2980b9;
  }

  .main-content {
    background-color: white;
  }

  .navbar {
    background: rgba(52, 152, 219, 0.9);
    padding: 10px 20px;
    position: sticky;
    top: 0;
    z-index: 1000;
  }
  
  .navbar ul {
    list-style: none;
    display: flex;
    justify-content: center;
  }
  
  .navbar ul li {
    margin: 0 15px;
  }
  
  .navbar ul li a {
    color: #fff;
    text-decoration: none;
    font-size: 1.1rem;
    transition: color 0.3s ease;
  }
  
  .navbar ul li a:hover {
    color: #f1c40f;
  }

  .grid-container {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
    padding: 20px;
    max-width: 1200px;
    margin: 20px auto;
    background: rgba(255, 255, 255, 0.9);
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .item1, .item2, .item3, .item4, .item5 {
    padding: 20px;
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.95);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .item1:hover, .item2:hover, .item3:hover, .item4:hover, .item5:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }

  @media (min-width: 768px) {
    .grid-container {
      grid-template-columns: repeat(2, 1fr);
    }
  
    .item1 {
      grid-column: span 2;
    }
  }
  
  @media (min-width: 1024px) {
    .grid-container {
      grid-template-columns: repeat(3, 1fr);
    }
  
    .item1 {
      grid-column: span 3;
    }
  
    .item4 {
      grid-column: span 2;
    }
  }
  </style>
  