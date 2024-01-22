import React from 'react'
import BookingButton from './BookingButton'
import aboutImage from '../components/img/pizza_grate.jpg'
import mapImage from '../components/img/terkep.png'
import backgroundImage from '../components/img/bg_bottom.jpg'
import styled from 'styled-components'

const AboutContainerStyles = styled.div`
    display: flex;
    flex-direction: row;
    height: 80vh;
    background-image: url(${backgroundImage});
    background-repeat: no-repeat;
    background-size: cover;
    align-items: center;
  
    .picture {
        flex: 1 1 50%;    
         padding: 0 0 0 20px;
        img{
            margin: auto;
            max-width: 100%;
        }
    }
    .article {
        flex: 1 1 50%;
        padding: 30px;
        font-family: 'Roboto', sans-serif;
        text-align: justify;
        display: flex;
        flex-direction: column;
        justify-content: center;

        h2 {
            text-align: center;
        }
        .first {
            padding: 15px;
        }
        .second {
            display: flex;
          
            .second_left {
                li {
                list-style-type: none; 
              }            
               
                .open {
                    margin: 30px 50px;
                    padding-left: 20px;
                    p {
                        padding: 8px 0;
                    }
                }
            }
            .second_right {
                display: flex;
                flex:50%;
                align-items: center;
                img {
                    width:100%;
                    padding: 20px 20px 20px 0;
                }
            }
        }
        @media (max-width: 1200px) {
             .second {
                display: none;
            }
        }
    }  
`

const About = () =>
  <AboutContainerStyles id="introduction" class="content_panel">
    <div class="picture">
      <img src={aboutImage} alt="Grate Pizza" />
    </div>
    <div class="article">
      <h2>Pizza & Me</h2>
      <div class="first">
        <p>
          Nem csak 24cm-es, 30cm-es és 45cm-es pizzák kaphatóak 52 féle ízben, hanem olyan
          extravagáns,
          csak itt kapható változatok is, mint a pizzatekercs és a pizzakagyló. Klasszikus
          tésztaételek is
          kaphatóak, ha éppen nem pizzát kívánunk. Aki pedig édességre vágyna az étkezés végén, azok
          számára sokféle ízesítésű palacsinta is készül.
        </p>
      </div>
      <div class="second">
        <div class="second_left">

          <BookingButton />

          <div class="open">
            <p><strong>Nyitvatartás</strong></p>
            <ul>
              <li>
                Hétfő: 9:30-22:30
              </li>
              <li>
                Kedd: 9:30-22:30
              </li>
              <li>
                Szerda: 9:30-22:30
              </li>
              <li>
                Csütörtök: 9:30-22:30
              </li>
              <li>
                Péntek: 9:30-22:30
              </li>
              <li>
                Szombat: 10:00-23:00
              </li>
              <li>
                Vasárnap: 10:00-23:00
              </li>
            </ul>
          </div>
        </div>
        <div class="second_right">
          <img src={mapImage} alt="Map" />
        </div>
      </div>
    </div>
  </AboutContainerStyles>

export default About