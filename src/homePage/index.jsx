import React from 'react'
import logos1 from '../assets/img/Rectangle-6.png';
import logos2 from '../assets/img/Rectangle-5.png';
import logos3 from '../assets/img/Rectangle-4.png';
import logos4 from '../assets/img/Rectangle-3.png';
import frame from '../assets/img/Frame.png';
import rectangle7 from '../assets/img/Rectangle-7.png';
import frame2 from '../assets/img/Frame-2.png';
import rectangle8 from '../assets/img/Rectangle-8.png';
import rectangle9 from '../assets/img/Rectangle-9.png';
import frame4 from '../assets/img/Frame-4.png';
import frame3 from '../assets/img/Frame-3.png';
import smile from '../assets/img/Keep in touch ☺.png';
import wheel from '../assets/img/Frame-5.png';
import { Link } from 'react-router-dom';
import {
    Container, FooterCon, FooterLast, FooterLeft, FooterLeftImg, FooterMain, FooterRight, Frame2, Frame3, Frame4, LeftSide, Logo, Logos, Main, MenuCon,

    MIddleSide,

    OtherTypes,

    PanDesign,

    RightSide,

    Title, Welcome, Wheel, Wheelchair, Wrapper
} from './style'

const HomePage = () => {
    return (
        <Container>
            <Wrapper>
                <Title>SHIPPING AND RETURNS ARE ALWAYS FREE FROM OUR PLACE TO YOURS 🙂</Title>
            </Wrapper>
            <Wrapper.Middle>
                <MenuCon>
                    <Link to='/Shop' style={{textDecoration:'none'}} >

                    <p>SHOP</p>
                    </Link>
                    <Link to='/AlwaysPan' style={{textDecoration:'none'}} >


                    <p>ALWAYS PAN </p>
                    </Link>

                </MenuCon>
                <Logo>
                <Link to='/OurPlace' style={{textDecoration:'none'}} >
                    <p>Our Place</p>
                </Link>

                </Logo>
                <MenuCon>
                <Link to='/Mission' style={{textDecoration:'none'}} >
                    <p>MISSION</p>
                </Link>
                <Link to='/Faqs' style={{textDecoration:'none'}} >
                    <p>FAQS</p>
                </Link>
                <Link to='/Profil' style={{textDecoration:'none'}} >
                    <p id='profil'>O</p>
                </Link>
                    {/* <Profil>O</Profil> */}

                </MenuCon>
            </Wrapper.Middle>
            <Main>
                {/* <Rectangle src={rectangle} /> */}
                <Main.Inner>
                    <p>MEET THE ALWAYS PAN</p>
                    <h1>Your new <br /> skillet</h1>
                    <Link to='/ShopPan' style={{textDecoration:'none'}} >
                    <button>SHOP THE ALWAYS PAN</button>
                </Link>

                </Main.Inner>
            </Main>
            <Logos>
                <Logos.Title>
                    <h3>
                        "Doing the job of eight traditional cookware <br /> pieces"
                    </h3>
                </Logos.Title>
                <Logos.MainLog>


                    <Logos.Log src={logos1} />
                    <Logos.Log src={logos2} />
                    <Logos.Log src={logos3} />
                    <Logos.Log src={logos4} />

                </Logos.MainLog>

            </Logos>
            <Welcome>
                <h1>Welcome to Our <br /> Place</h1>
                <p>At Our Place, we believe in the power of home-cooking to bring people together. Our <br /> collections are new heirlooms from the cultures and places that make up the fabric of the <br /> modern multi-ethnic kitchen. We design thoughtfully, source ethically, and produce <br /> sustainably because what we make is connected to one another and the earth we share.</p>

            </Welcome>
            <PanDesign>
                <PanDesign.Inner>

                    <h3>Designed for Everything and Always</h3>
                    <PanDesign.Img1>

                        <PanDesign.Img src={frame} />
                    </PanDesign.Img1>
                    <PanDesign.Img2>

                        <PanDesign.Img src={rectangle7} />
                    </PanDesign.Img2>
                </PanDesign.Inner>
                <PanDesign.InnerP1>
                    <p id='1'>Modular lid to <br /> release &  trap steam</p>

                </PanDesign.InnerP1>
                <PanDesign.InnerP2>

                    <p id='2'>Beechwood spatula <br /> & built-in spoon rest</p>
                </PanDesign.InnerP2>
                <PanDesign.InnerP3>
                    <p id='3'>2 easy-pour <br /> spouts</p>

                </PanDesign.InnerP3>
                <PanDesign.InnerP4>

                    <p id='4'>NESTING STEAMER BASKET & <br /> COLANDER</p>
                </PanDesign.InnerP4>
                <PanDesign.InnerP5>

                    <p id='5'>Exclusive, ceramic <br /> nonstick made without <br /> PFOAs & PTFEs</p>
                </PanDesign.InnerP5>
                <PanDesign.InnerP6>

                    <p id='6'>STAT COOL HANDLE</p>
                </PanDesign.InnerP6>
            </PanDesign>
            <OtherTypes>
                <h3>From curated essentials to limited-run editions.</h3>
                <p>We make products inspired by traditions – and we're <br /> starting with one you might be familiar with: Dinner.</p>
                <Frame2 src={frame2} />
            </OtherTypes>
            <FooterCon>
                <LeftSide src={rectangle8} />
                <MIddleSide>
                    <p>#DIRTYDISHES</p>
                    <h6>A full sink is a sign of a great night.</h6>
                    <h6>You wash, we'll dry.</h6>
                    <Link to='/FollowAlong' style={{textDecoration:'none'}} >
                    <button>FOLLOW ALONG</button>
                </Link>

                </MIddleSide>
                <RightSide src={rectangle9} />

            </FooterCon>
            <FooterMain>
                <FooterLeft>
                    {/* <FooterLeft.Smile> */}
                    {/* <h6>Keep in touch ☺</h6> */}
                    <FooterLeftImg src={smile} />

                    {/* </FooterLeft.Smile> */}
                    <p>Be the first to know about new collections, special events, and what’s going on at Our Place.</p>
                    <FooterLeft.Mail>
                        <input type="email" placeholder='Your email' />
                        <button>SUBMIT</button>

                    </FooterLeft.Mail>

                </FooterLeft>
                <FooterRight>
                    <FooterRight.Buttons>

                        <FooterRight.Shop>
                            <h6>SHOP</h6>
                            <Link to='/MainPlates' style={{textDecoration:'none'}} >
                            <p>Main Plates</p>
                </Link>
                <Link to='/SideBowls' style={{textDecoration:'none'}} >
                            <p>Side Bowls</p>
                </Link>
                <Link to='/DrinkingGlasses' style={{textDecoration:'none'}} >
                            <p>Drinking Glasses</p>
                </Link>
                <Link to='/FamilyDinner' style={{textDecoration:'none'}} >
                            <p>Family Dinner <br /> Bundle</p>
                </Link>

                        </FooterRight.Shop>
                        <FooterRight.Company>
                            <h6>COMPANY</h6>
                            <Link to='/Mission' style={{textDecoration:'none'}} >
                            <p>Mission</p>
                </Link>
                <Link to='/Faqs' style={{textDecoration:'none'}} >
                            <p>FAQS</p>
                </Link>
                <Link to='/ContactUs' style={{textDecoration:'none'}} >
                            <p>Contact Us</p>
                </Link>
                <Link to='/Returns' style={{textDecoration:'none'}} >
                            <p>Returns</p>
                </Link>
                <Link to='/BulkOrders' style={{textDecoration:'none'}} >
                            <p>Bulk Orders</p>
                </Link>
                <Link to='/Careers' style={{textDecoration:'none'}} >
                            <p>Careers</p>
                </Link>

                        </FooterRight.Company>
                        <FooterRight.Social>
                            <h6>SOCIAL</h6>
                            <a href="https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwj8oZeIsPX3AhVG2kwCHaq-DhMYABAAGgJ0bQ&ae=2&ohost=www.google.com&cid=CAESbeD2QY1h5Pm9kDAvfpF4pvY4iNjUdvE3OQitwmR2ekug8xFIlbRJkb5d7GxfXQ5xAuVKDdWddZ1DIsCYuj1dgsLKdur49prQv_TeugFzmP_f4sFhBIUHf5AtDtMF_SvGQ8QxrfJjPeX2-pwqXHw&sig=AOD64_34WxYWRIvsIMPMdDbmTBhng7Pzrw&q&adurl&ved=2ahUKEwiN45GIsPX3AhVeSfUHHVfiCU4Q0Qx6BAgDEAE&dct=1"
                            style={{textDecoration:"none",color:'#FCFAF6;'}}>Instagram</a>
                            {/* <p>Instagram</p> */}
                            <a href="https://twitter.com">Twitter</a>
                            {/* <p>Twitter</p> */}

                        </FooterRight.Social>
                    </FooterRight.Buttons>
                    <FooterRight.Flags>
                        <p>YOU'RE IN</p>
                        <FooterRight.Flags.Inner>
                            <Frame4 src={frame4} />
                            <Frame3 src={frame3} />
                        </FooterRight.Flags.Inner>
                    </FooterRight.Flags>


                </FooterRight>
            </FooterMain>
            <FooterLast>
                <FooterLast.Left>
                <Link to='/OurPlace' style={{textDecoration:'none'}} >
                    <p>© Our Place 2021</p>
                </Link>

                </FooterLast.Left>
                <FooterLast.Right>
                <Link to='/Copyright' style={{textDecoration:'none'}} >
                    <p>Copyright 2021</p>
                </Link>
                <Link to='/Privacy' style={{textDecoration:'none'}} >
                    <p>Privacy</p>
                </Link>
                <Link to='/Terms' style={{textDecoration:'none'}} >
                    <p>Terms</p>
                </Link>
                <Link to='/Returns' style={{textDecoration:'none'}} >
                    <p>Returns</p>
                </Link>
                    <Wheelchair>
                   
                    <Link to='/WheelChair' style={{textDecoration:'none'}} >
                        <Wheel src={wheel}/>
                </Link>
                        
                    </Wheelchair>


                </FooterLast.Right>

            </FooterLast>
            





        </Container>
    )
}

export default HomePage