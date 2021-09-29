import React, { Component } from "react";
import "../Css_Pages/Home.css";
import caro1 from "../../images/caro1.jpg";
import C_logo from "../../images/c-logo.png";
import sir from "../../images/annamalai_sir.png";
import mam from "../../images/sudha_mam.png";

export default class Home extends Component {
  render() {
    return (
      <div>
        <div
          class="carousel slide"
          data-ride="carousel"
          id="carouselExampleIndicators"
        >
          {/* <ol class="carousel-indicators">
            <li
              class="active"
              data-slide-to="0"
              data-target="#carouselExampleIndicators"
            ></li>
            <li data-slide-to="1" data-target="#carouselExampleIndicators"></li>
            <li data-slide-to="2" data-target="#carouselExampleIndicators"></li>
          </ol> */}
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img alt="First slide" class="d-block w-100" src={caro1} />
              <div class="carousel-caption d-none d-md-block">
                <h5>Slider One Item</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Maxime, nulla, tempore. Deserunt excepturi quas vero.
                </p>
                {/* <button className="btn btn-primary ml-4">Gets Started</button> */}
              </div>
            </div>
            <div class="carousel-item">
              <img
                alt="Second slide"
                class="d-block w-100"
                src="https://miro.medium.com/max/2892/1*GHJnsutrX_nGsxWWAetYxw.jpeg"
              />
              <div class="carousel-caption d-none d-md-block">
                <h5>Slider One Item</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Maxime, nulla, tempore. Deserunt excepturi quas vero.
                </p>
                {/* <button className="btn btn-primary ml-4">Gets Started</button> */}
              </div>
            </div>
            <div class="carousel-item">
              <img alt="Third slide" class="d-block w-100" src={caro1} />
              <div class="carousel-caption d-none d-md-block">
                <h5>Slider One Item</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Maxime, nulla, tempore. Deserunt excepturi quas vero.
                </p>
                {/* <button className="btn btn-primary ml-4">Gets Started</button> */}
              </div>
            </div>
          </div>
          <a
            class="carousel-control-prev"
            data-slide="prev"
            href="#carouselExampleIndicators"
            role="button"
          >
            <span aria-hidden="true" class="carousel-control-prev-icon"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            data-slide="next"
            href="#carouselExampleIndicators"
            role="button"
          >
            <span aria-hidden="true" class="carousel-control-next-icon"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
        <div className="about-book">
          <div className="container">
            <div className="content-section">
              <div className="tittle">
                <h1>About Book</h1>
              </div>
              <div class="content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
                <div className="button">
                  <a href="">Read More</a>
                </div>
              </div>
            </div>
            <div className="image-section">
              <img src={caro1}></img>
            </div>
          </div>
        </div>
        <div className="course-section container">
          <h1>Interview Preparation</h1>
          <div class="row">
            <div class="col">
              <img src={C_logo}></img>
            </div>
            <div class="col">
              <div class="tabs">
                <div class="tab">
                  <input type="checkbox" id="chck1" />
                  <label class="tab-label" for="chck1">
                    TCS Ninja
                  </label>
                  <div class="tab-content">
                    <ul>
                      <li>Arrays</li>
                      <li>Objects</li>
                      <li>Constructor</li>
                    </ul>
                    <button className="btn btn-primary ml-4">
                      Gets Started
                    </button>
                  </div>
                </div>
                <div class="tab">
                  <input type="checkbox" id="chck2" />
                  <label class="tab-label" for="chck2">
                    Infosis InfyQ
                  </label>
                  <div class="tab-content">
                    <ul>
                      <li>Arrays</li>
                      <li>Objects</li>
                      <li>Constructor</li>
                    </ul>
                    <button className="btn btn-primary ml-4">
                      Gets Started
                    </button>
                  </div>
                </div>
                <div class="tab">
                  <input type="checkbox" id="chck3" />
                  <label class="tab-label" for="chck3">
                    TCS NQT
                  </label>
                  <div class="tab-content">
                    <ul>
                      <li>Arrays</li>
                      <li>Objects</li>
                      <li>Constructor</li>
                    </ul>
                    <button className="btn btn-primary ml-4">
                      Gets Started
                    </button>
                  </div>
                </div>
                <div class="tab">
                  <input type="checkbox" id="chck4" />
                  <label class="tab-label" for="chck4">
                    HackwithInfy
                  </label>
                  <div class="tab-content">
                    <ul>
                      <li>Arrays</li>
                      <li>Objects</li>
                      <li>Constructor</li>
                    </ul>
                    <button className="btn btn-primary ml-4">
                      Gets Started
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="author-profile">
          <div class="container">
            <h2 class="heading">
              {/* <span>meet</span>Our Team */}
              Author's Profile
            </h2>

            <div class="profiles">
            <div class="profile">
                <img src={sir} class="profile-img" />

                <h3 class="user-name">Annamalai</h3>
                <h5>Associate Professor</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                  facilis sint quod.
                </p>
              </div>
             
              <div class="profile">
                <img src={mam} class="profile-img" />

                <h3 class="user-name">Sudha Mercy</h3>
                <h5>Assistant Professor</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                  eveniet soluta hic sunt sit reprehenderit.
                </p>
              </div>
              
            </div>
          </div>
        </section>
        <section className="subscribe-wrapper">
          <div className="subscribe-box">
            <h1>Subscribe to our community</h1>
            <p></p>
            <form>
              <div>
                <input type="text" name=""></input>
                <input type="submit" value="join us" name=""></input>
              </div>
            </form>
          </div>
        </section>

        <footer class="site-footer">
          <div class="container">
            <div class="row">
              <div class="col-sm-12 col-md-6">
                <h6>About</h6>
                <p class="text-justify">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>

              <div class="col-xs-6 col-md-3">
                {/* <h6>Categories</h6>
                <ul class="footer-links">
                  <li>
                    <a href="http://scanfcode.com/category/c-language/">C</a>
                  </li>
                  <li>
                    <a href="http://scanfcode.com/category/front-end-development/">
                      UI Design
                    </a>
                  </li>
                  <li>
                    <a href="http://scanfcode.com/category/back-end-development/">
                      PHP
                    </a>
                  </li>
                  <li>
                    <a href="http://scanfcode.com/category/java-programming-language/">
                      Java
                    </a>
                  </li>
                  <li>
                    <a href="http://scanfcode.com/category/android/">Android</a>
                  </li>
                  <li>
                    <a href="http://scanfcode.com/category/templates/">
                      Templates
                    </a>
                  </li>
                </ul> */}
              </div>

              <div class="col-xs-6 col-md-3">
                <h6>Quick Links</h6>
                <ul class="footer-links">
                  <li>
                    <a href="">About Us</a>
                  </li>
                  <li>
                    <a href="">Contact Us</a>
                  </li>
                </ul>
              </div>
            </div>
            <hr />
          </div>
          <div class="container">
            <div class="row">
              <div class="col-md-8 col-sm-6 col-xs-12">
                <p class="copyright-text">
                  Copyright &copy; 2021 All Rights Reserved by
                  <a href="#"> Book</a>.
                </p>
              </div>

              <div class="col-md-4 col-sm-6 col-xs-12">
                <ul class="social-icons">
                  <li>
                    <a class="facebook" href="#">
                      <i class="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a class="twitter" href="#">
                      <i class="fa fa-twitter"></i>
                    </a>
                  </li>

                  <li>
                    <a class="linkedin" href="#">
                      <i class="fa fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
