import React from 'react'
import pizza1Image from '../components/img/menu/sonka-kukorica.png'
import pizza2Image from '../components/img/menu/olaszkolbaszos.png'
import pizza3Image from '../components/img/menu/mediterran.png'
import pizza4Image from '../components/img/menu/chili-con-carne.png'
import pizza5Image from '../components/img/menu/bbq.png'
import pizza6Image from '../components/img/menu/bivaly.png'
import pizza7Image from '../components/img/menu/bolognese.png'
import pizza8Image from '../components/img/menu/gyros.png'
import pizza9Image from '../components/img/menu/hawaii.png'
import pizza0Image from '../components/img/menu/cowboy-menu.png'
import styled from 'styled-components'

const MenuContainerStyles = styled.div`
.title {
    font-size: 1.5em;
    margin-top: 3em;
    text-align: center;
    color: orangered;
}
.menu {
    display: flex;
    flex-direction: row;
    text-align: left;
    flex-wrap: wrap;
    font-family: 'Roboto', sans-serif;
    .box{
        display: flex;
        flex: 1 1 40%;
        border: 1px solid white;
        border-radius: 10px;
        margin: 20px 20px;
        min-width: 250px; /* added by erika  - iphone5 -nél kilogott a menu neve  */
        background-color: rgb(226, 226, 225);
        
        .picture{
            flex:1 1 50%; 
        }
        .article {
            flex:1 1 50%;
            text-align: center;
            height: 100%;   /* Erika */
           display: flex;
           flex-direction: column;
           justify-content: center;
            p{
                padding: 1em 0 2em 0;
                width: 100%;
            }
        } 
    }
} 
@media (max-width: 1200px) {
    .menu {
        flex-direction: wrap;
        align-items: center;
        .box{
            width: 90%;
            .article{
                flex: 1 1 50%;
                width:50%;
                p{
                    font-size: smaller;
                }
            }
            .picture{
                flex: 1 1 50%;
                width: 50%;
                img {
                    width: 100%;
                }
            }
        }
    }
}
`

const Menu = () => {
  return (
    <MenuContainerStyles>
      <div id="menu" className="title">
        <h2>MENÜ</h2>
      </div>
      <div className="menu">

        <div className="box one">
          <div className="picture">
            <img src={pizza1Image} alt="sonka-kukorica" />
          </div>
          <div className="article">
            <h3>SONKA-KUKORICA</h3>
            <p>
              (paradicsomszósz, sonka, kukorica, mozzarella)
            </p>
            <h4>3500 Ft</h4>
          </div>
        </div>
        <div className="box two">
          <div className="picture">
            <img src={pizza2Image} alt="szalámis" />
          </div>
          <div className="article">
            <h3>SZALÁMIS</h3>
            <p>
              (paradicsomszósz, szalámi, mozzarella)
            </p>
            <h4>3500 Ft</h4>
          </div>
        </div>
        <div className="box three">
          <div className="picture">
            <img src={pizza3Image} alt="mediterrán" />
          </div>
          <div className="article">
            <h3>MEDITERRÁN</h3>
            <p>
              (paradicsomszósz, csirkemell, fetasajt, olivabogyó, oregano, mozzarella)
            </p>
            <h4>3500 Ft</h4>
          </div>
        </div>
        <div className="box four">
          <div className="picture">
            <img src={pizza4Image} alt="chili-con-carne" />
          </div>
          <div className="article">
            <h3>CHILI CON CARNE</h3>
            <p>
              (bolognai ragu, bab, kukorica, jalapeno, mozzarella)
            </p>
            <h4>3500 Ft</h4>
          </div>
        </div>
        <div className="box five">
          <div className="picture">
            <img src={pizza5Image} alt="bbq" />
          </div>
          <div className="article">
            <h3>BBQ</h3>
            <p>
              (barbecue-szósz, bacon, csirkemell, hagyma, kaliforniai paprika, mozzarella)
            </p>
            <h4>3500 Ft</h4>
          </div>
        </div>
        <div className="box six">
          <div className="picture">
            <img src={pizza6Image} alt="bivaly" />
          </div>
          <div className="article">
            <h3>BIVALY</h3>
            <p>
              (paradicsomszósz, chiliszósz, kolbász, zöldpaprika, jalapeno, mozzarella)
            </p>
            <h4>3500 Ft</h4>
          </div>
        </div>
        <div className="box seven">
          <div className="picture">
            <img src={pizza7Image} alt="bolognese" />
          </div>
          <div className="article">
            <h3>BOLOGNESE</h3>
            <p>
              (bolognai ragu, mozzarella)
            </p>
            <h4>3500 Ft</h4>
          </div>
        </div>
        <div className="box eight">
          <div className="picture">
            <img src={pizza8Image} alt="gyros" />
          </div>
          <div className="article">
            <h3>GYROS</h3>
            <p>
              (gyros-szósz, csirkemell, paradicsomkarika, uborka, lilahagyma, mozzarella)
            </p>
            <h4>3500 Ft</h4>
          </div>
        </div>
        <div className="box nine">
          <div className="picture">
            <img src={pizza9Image} alt="hawaii" />
          </div>
          <div className="article">
            <h3>HAWAII</h3>
            <p>
              (paradicsomszósz, sonka, ananász, kukorica, mozzarella)
            </p>
            <h4>3500 Ft</h4>
          </div>
        </div>
        <div className="box ten">
          <div className="picture">
            <img src={pizza0Image} alt="cowboy-menu" />
          </div>
          <div className="article">
            <h3>COWBOY MENÜ</h3>
            <p>
              (paradicsomszósz, marha, bacon, vöröshagyma, paradicsomkarika, cheddar, mozzarella)
            </p>
            <h4>3500 Ft</h4>
          </div>
        </div>
      </div>
    </MenuContainerStyles>
  )
}

export default Menu