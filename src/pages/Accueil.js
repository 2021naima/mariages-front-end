import React, { useState, useEffect } from 'react';
import axios from "axios";
import UserService from "../services/userService"
import prestataireServices from "../services/prestataireService"


// context API react js
const API_URL = "http://localhost:5000/prestataire/";


const Accueil= () => {

    const [user, setUser]=useState();
    const [mariage, setMariage]=useState();
    const [date, setDate]=useState();
    // const [prestataires, setPrestataires]=useState([]);
  

    const prestataires = [{
      "categorie":"vidéo",
      "nom":"Alister",
      "prix":"",
      "tel":"06778884",
      "ville":"Rabat"
    },
    {
      "categorie":"negafa",
      "nom":"Safir",
      "prix":"3000",
      "tel":"0678994411",
      "ville":"Agadir"
    },
    {
      "categorie":"Réception",
      "nom":"villa Alpha",
      "prix":"3000",
      "tel":"067454876",
      "ville":"agadir"
    }
  ]



  const invites = [
 
    {
    "id":"5",
    "nom":"Naima",
    "prenom":"bourhym",
    "tel":"06778884",
    "groupe":"famille",
    "age":"adulte",
  },
  {
    "id":"2",
    "nom":"Asmae",
    "prenom":"idrissi",
    "tel":"06778544",
    "groupe":"famille",
    "age":"adulte",
  },
  {
    "id":"3",
    "nom":"fatima",
    "prenom":"bennani",
    "tel":"057867898",
    "groupe":"amies",
    "age":"adulte",
  },
  {
    "id":"4",
    "nom":"imane",
    "prenom":"bennani",
    "tel":"05786787",
    "groupe":"famille",
    "age":"adulte",
    "présence":"annulé"
  },
]
    useEffect(() => {
        const id="62e94c576c9da74e55a77dcf"
        // UserService.getUser(id);
        // const prests=prestataireServices.getPrestataires(id);
        axios.get(API_URL+id)
        .then((response) => {
        localStorage.setItem("userPrestataires", JSON.stringify(response.data));
      console.log( JSON.stringify(response.data)) ;
        prestataires=response.data

      })
       
      });


    
    
    

    return (
                <div>
                
                  <a className="layoutSkipMain" href="#layoutMain">Aller au contenu principal</a>
                  
          
                  <main id="layoutMain">
                    
                      
                             
                    <div id="toolsHeading" className="app-tools-heading dash-hero" style={{backgroundColor: ''}}>
                      <div id="photoLoading" className="dash-hero-wrapper wrapper">
                        <div id="uploadContainer" className="pure-g-r dash-heroContainer">
                          <div id="pickfiles" className="pure-u-1-3 dash-cover app-spinner-container app-pencil-profile" style={{cursor: 'default'}}>
                            <img className="block app-tools-main-front-img dash-img" src="https://cdn1.mariages.net/assets/tools/bg_dash-cover.jpg" srcSet="https://cdn1.mariages.net/assets/tools/bg_dash-cover.jpg 1x, https://cdn1.mariages.net/assets/tools/bg_dash-cover@2x.jpg 2x" alt="" />
                            <div className="dash-coverTopSection">
                              <button className="dash-coverTopSectionButton app-croppie-browse-button-front app-ua-track-event-multiple" data-track-c="NavigationAuth" data-track-a="a-click" data-track-l="d-desktop+o-home_tools+s-dashboard+i-changephoto" data-track-v={0} data-track-ni={0}>
                                <i className="svgIcon svgIcon__cameraOutline dash-coverTopSectionButton__icon dash-coverTopSectionButton__icon--camera"><svg viewBox="0 0 44 32"><path d="M21 26a8 8 0 110-16 8 8 0 010 16zm0-14a6 6 0 100 12 6 6 0 000-12zM10.58 6L15.865.6a2 2 0 011.43-.6h7.41a2 2 0 011.43.6L31.42 6H39c2.202 0 4 1.798 4 4v18c0 2.202-1.798 4-4 4H5c-2.202 0-4-1.798-4-4V10c0-2.202 1.798-4 4-4h5.58zm1.429 1.4a2 2 0 01-1.43.6H5c-1.098 0-2 .902-2 2v18c0 1.098.902 2 2 2h34c1.098 0 2-.902 2-2V10c0-1.098-.902-2-2-2h-7.58a2 2 0 01-1.429-.6L24.706 2h-7.412L12.01 7.4zM36 12a1 1 0 110 2 1 1 0 010-2z" fillRule="nonzero" /></svg></i>                        Changer photo                  </button>
                              <button className="dash-coverTopSectionButton app-countdown-share app-ua-track-event-multiple" data-track-c="NavigationAuth" data-track-a="a-click" data-track-l="d-desktop+o-home_tools+s-dashboard+i-wws_share" data-track-v={0} data-track-ni={0}>
                                <i className="svgIcon svgIcon__share dash-coverTopSectionButton__icon"><svg viewBox="0 0 34 36"><path d="M24.3 7c.4.3.4 1 0 1.3-.2.2-.5.3-.7.3-.2 0-.5-.1-.7-.3L18 3.4v20.2c0 .5-.4 1-1 1s-1-.4-1-1V3.4l-4.9 4.9c-.4.4-1 .4-1.4 0-.4-.4-.4-1 0-1.4L16.3.3c.1-.1.2-.2.3-.2.1-.1.2-.1.3-.1h.1c.1 0 .2 0 .3.1.1 0 .2.1.3.2L24.3 7zm5.4 29H4.3c-2.2 0-4-1.8-4-4V16.2c0-2.2 1.8-4 4-4h5.2c.6 0 1 .4 1 1s-.4 1-1 1H4.3c-1.1 0-2 .9-2 2V32c0 1.1.9 2 2 2h25.5c1.1 0 2-.9 2-2V16.2c0-1.1-.9-2-2-2h-5.2c-.6 0-1-.4-1-1s.4-1 1-1h5.2c2.2 0 4 1.8 4 4V32c-.1 2.2-1.9 4-4.1 4z" fillRule="nonzero" /></svg></i>                            Partager                      </button>
                            </div>
                            <div className="dash-cover-info">
                              <div className="justMarriedWidget justMarriedWidget--toolsMain">
                                <div className="justMarriedWidget__body">
                                  <p className="justMarriedWidget__notice mb10 dnone app-countdown-message">Heureux en mariage 🎉</p>
                                  <div id="defaultCountdown" className="justMarriedWidget__timer" data-fecha="2023-07-01" data-time data-days={322} data-hours={12} data-minutes={48} data-seconds={12}><span className="justMarriedWidget__number">322<small>jours</small></span><span className="justMarriedWidget__number">12<small>heures</small></span><span className="justMarriedWidget__dots">:</span><span className="justMarriedWidget__number">45<small>min</small></span><span className="justMarriedWidget__dots">:</span><span className="justMarriedWidget__number">55<small>s</small></span></div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="pure-u-2-3">
                            <div className="dash-summary">
                              <span className="dash-summary-edit btnOutline btnOutline--primary app-marriage-layer-open app-ua-track-event-multiple" data-track-c="NavigationAuth" data-track-a="a-click" data-track-l="d-desktop+o-home_tools+s-dashboard+i-edit" data-track-v={0} data-track-ni={0} role="button">Modifier</span>
                              <div className="dash-summary-info">
                                <ul className="avatar-group reverse avatar-group-medium">
                                  <li className="avatar-group-item app-marriage-layer-open">
                                    <div className="modal-myWedding-dash-sectionAvatar modal-myWedding-dash-sectionAvatar-small">
                                      <label htmlFor="photo_1" className="pointer frame-inputFile">
                                        <div className="modal-myWedding-dash-sectionAvatar-hover modal-myWedding-dash-sectionAvatar-hover-small">
                                          <i className="icon-tools icon-tools-avatar-camera-white" />
                                        </div>
                                        <div className="avatar-alias size-avatar-xmedium avatar-center">
                                          <svg className="avatar-generic" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" preserveAspectRatio="xMidYMin slice">
                                            <circle fill="#C7C9C0" cx={50} cy={50} r={50} />
                                            <text transform="translate(100,130)" y={0}>
                                              <tspan fontSize={50} className fill="rgba(0,0,0,0.3)" textAnchor="middle">N</tspan>
                                            </text>
                                          </svg>
                                        </div>
                                      </label>
                                    </div>
                                  </li>
                                  <li className="avatar-group-item app-marriage-layer-open">
                                    <div className="modal-myWedding-dash-sectionAvatar modal-myWedding-dash-sectionAvatar-small">
                                      <label htmlFor="photo_2" className="pointer frame-inputFile">
                                        <div className="modal-myWedding-dash-sectionAvatar-hover modal-myWedding-dash-sectionAvatar-hover-small" />
                                        <span className="modal-myWedding-dash-sectionAvatar-empty modal-myWedding-dash-sectionAvatar-empty-small">
                                          <i className="icon-tools icon-tools-avatar-camera-white" />
                                        </span>
                                      </label>
                                    </div>
                                  </li>
                                </ul>
                                <p className="dash-couple-names">
                                  <span className="app-owner-name"> </span>
                                </p>
                                <div className="dash-couple-personal">
                                  <div className="dash-couple-personal-date">
                                    <p className="dash-couple-subtitle"><span></span></p>
                                    
                                    <p className="dash-couple-subtitle"><span></span></p>
                                  </div>
                                </div>
                              </div>
                              <div className="dash-couple-progress">
                                <p className="dash-couple-progress-label clearfix">
                                  <span>Etat :</span>
                                  <span className="fright">Vous avez dit oui&nbsp;! On commence&nbsp;?</span>
                                </p>
                                <div className="tools-boxProgress-progress tools-boxProgress-progressBig">
                                  <div className="app-checklist-progress" style={{width: '10%'}} />
                                </div>
                              </div>
                              <ul className="pure-g dash-couple-info">
                                <li className="pure-u-1-4 app-link app-ua-track-event" data-href="/tools/Vendors" data-track-c="NavigationAuth" data-track-a="a-click" data-track-l="d-desktop+o-home_tools+s-dashboard+dt-vendor_manager" data-track-v={0} data-track-ni={0}>
                                  <p className="dash-couple-info-item">
                                    <span><strong>0</strong> sur 20</span>
                                    services souscrits                      </p>
                                </li>
                                <li className="pure-u-1-4 app-link app-ua-track-event" data-href="/tools/Checklist" data-track-c="NavigationAuth" data-track-a="a-click" data-track-l="d-desktop+o-home_tools+s-dashboard+dt-checklist" data-track-v={0} data-track-ni={0}>
                                  <p className="dash-couple-info-item">
                                    <span><strong>0</strong> sur 101</span>
                                    tâches réalisées                      </p>
                                </li>
                                <li className="pure-u-1-4 app-link app-ua-track-event" data-href="/tools/Guests" data-track-c="NavigationAuth" data-track-a="a-click" data-track-l="d-desktop+o-home_tools+s-dashboard+dt-guestlist_att" data-track-v={0} data-track-ni={0}>
                                  <p className="dash-couple-info-item">
                                    <span><strong>2</strong> sur 4</span>
                                    invités confirmés                      </p>
                                </li>
                                <li className="pure-u-1-4 app-link app-ua-track-event" data-href="https://www.mariages.net/tools/Tables" data-track-c="NavigationAuth" data-track-a="a-click" data-track-l="d-desktop+o-home_tools+s-dashboard+dt-seatingchart" data-track-v={0} data-track-ni={0}>
                                  <p className="dash-couple-info-item">
                                    <span><strong>3</strong> sur 3</span>
                                    invités placés                      </p>
                                </li>
                              </ul>
                            </div>
                            <div className="dash-summary-wedsite">
                              <div className="icon-tools icon-tools-wedsite-small"><span className="ml5">
                                  <strong>Votre site de mariage:</strong> <span id="app-website-guest-url">www.mariages.net/web/W6159171 </span><a href="https://www.mariages.net/website/index.php?actionReferrer=206" data-track-c="Community" data-track-a="dashboard_website" data-track-l="d-desktop+s-personalize" data-track-v={0} data-track-ni={0} className="link--primary app-ua-track-event">Donnez-lui un nom original&nbsp;!</a></span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="wrapper app-website-send-tracking-show app-ua-track-event" data-track-c="Wedding Website" data-track-a="a-show" data-track-l="d-desktop+s-experiment_card+o-tools+Auth" data-track-v={0} data-track-ni={0}>
                      <div className="dashTemplates dashTemplates--step2 wizardSlider wizardSlider-websiteCTA wizardSlider-firstStep">
                        <a href="https://www.mariages.net/tools/website-wizard?actionReferrer=203">
                          <div className=" wizardSlider__card wizardSlider__card-smallCard " data-id={129} data-page data-option="setTemplate" data-id-layout={1} data-custom-layout data-css-class data-family data-premium>
                            <div className="wizardSlider__upperWrapper">
                              <div className="wizardSlider__imagesWrapper app-wizard-images-wrapper">
                                <img className="wizardSlider__gridThumb wizardSlider__gridThumb-detailed wizardSlider__gridThumb-smallImage    wizardSlider__gridThumb-vertical" width={560} height={704} src="https://cdn1.mariages.net/assets/img/wedsites/thumb/fr/glam_deco_lg.jpg" srcSet="https://cdn1.mariages.net/assets/img/wedsites/thumb/fr/glam_deco_lg.jpg 1x, https://cdn1.mariages.net/assets/img/wedsites/thumb/fr/glam_deco_lg@2x.jpg 2x" />
                                <img className="wizardSlider__gridThumbMobile wizardSlider__gridThumbMobile-detailed wizardSlider__gridThumbMobile-smallImage wizardSlider__gridThumbMobile-vertical" width={150} height={325} src="https://cdn1.mariages.net/assets/img/wedsites/thumb_mobile/fr/glam_deco@2x.jpg" srcSet="https://cdn1.mariages.net/assets/img/wedsites/thumb_mobile/fr/glam_deco@2x.jpg 1x, https://cdn1.mariages.net/assets/img/wedsites/thumb_mobile/fr/glam_deco@2x.jpg 2x" />
                              </div>
                            </div>
                          </div>
                        </a>
                        </div>
                        <div className="dashTemplates__body">
                          <p className="dashTemplates__title">Vos invités sont impatients de découvrir votre site de mariage.</p>
                          <p className="dashTemplates__description">Ajoutez tous les détails du grand jour, partagez votre lieu de réception et indiquez le lien de votre liste de mariage !</p>
                          <a href="https://www.mariages.net/tools/website-wizard?actionReferrer=203" className="dashTemplates__action btnFlat btnFlat--primary">Personnaliser</a>
                        </div>
                      
                      <div className="fleft">
                        <h2 className="dash-title dash-title--m0">
                          Mes prestataires  </h2>
                        <p className="vendors-headerCount-total vendors-headerCount-total--small block">
                          0 sur 20 engagés  </p>
                      </div>
                      <div className="app-search-right text-right mb30">
                        <form id="app-frm-search" className="heroVendorForm__tools app-vendors-search-form" name="frmSearch" method="get" action="https://www.mariages.net/busc.php">
                          <input type="hidden" name="id_grupo" autoComplete="off" defaultValue />
                          <input type="hidden" name="id_sector" autoComplete="off" defaultValue />
                          <input type="hidden" name="id_region" autoComplete="off" defaultValue />
                          <input type="hidden" name="id_provincia" autoComplete="off" defaultValue />
                          <input type="hidden" name="id_poblacion" autoComplete="off" defaultValue />
                          <input type="hidden" name="id_geozona" autoComplete="off" defaultValue />
                          <input type="hidden" name="id_empresa" autoComplete="off" defaultValue />
                          <input type="hidden" name="distance" autoComplete="off" defaultValue />
                          <input type="hidden" name="lat" autoComplete="off" defaultValue />
                          <input type="hidden" name="long" autoComplete="off" defaultValue />
                          <input type="hidden" name="showmode" autoComplete="off" defaultValue />
                          <input type="hidden" name="NumPage" autoComplete="off" defaultValue={1} />
                          <input type="hidden" name="userSearch" autoComplete="off" defaultValue={1} />
                          <input type="hidden" name="isSearch" autoComplete="off" defaultValue={1} />
                          <input type="hidden" name="isHome" autoComplete="off" defaultValue={1} />
                          <input id="txtStrSearch" name="txtStrSearch" autoComplete="off" type="text" defaultValue className="heroVendorForm__input heroVendorForm__input--first heroVendorForm__input--small" size={25} placeholder="Que cherchez-vous ?" />
                          <input id="txtLocSearch" name="txtLocSearch" autoComplete="off" type="text" defaultValue className="heroVendorForm__input heroVendorForm__input--small" size={25} placeholder="Où ?" />
                          <input className="heroVendorForm__input heroVendorForm__input--small heroVendorForm__button app-ua-track-event" id="mainSearchBtn" defaultValue="Rechercher" data-track-c="NavigationAuth" data-track-a="a-click" data-track-l="d-desktop+o-home_tools+s-searcher+dt-weddingvenues" data-track-v={0} data-track-ni={0} title="Rechercher" type="submit" />
                        </form>
                      </div>
                      <div className="app-slider-container dashVendors pure-g row dashVendors--searcher">
                       
                      
                      { prestataires && prestataires.map(pres => 
                      
                        <div className="pure-u-1-5">
                          <div className="app-ua-track-event app-link" data-href="/tools/VendorsCateg?id_categ=163" data-track-c="NavigationAuth" data-track-a="a-click" data-track-l="d-desktop+o-home_tools+s-vendor+dt-videography" data-track-v={0} data-track-ni={0}>
                            <div className="dashVendors__item">
                              <figure className="dashVendors__item-figure dashVendors__item-figure-empty">
                                <i className="svgIcon svgIcon__categVideo dashVendors__itemIcon"><svg viewBox="0 0 54 47"><path d="M37.727 44.2V24.4a.873.873 0 00-.865-.871H4.586a.873.873 0 00-.864.871v19.8c0 .478.392.871.864.871h32.276a.873.873 0 00.865-.871zm1.857 0a2.73 2.73 0 01-2.722 2.729H4.586A2.73 2.73 0 011.865 44.2V24.4a2.73 2.73 0 012.721-2.729h32.276a2.73 2.73 0 012.722 2.729v19.8zm-29.54-13.471a.929.929 0 010-1.858h22.609a.929.929 0 010 1.858h-22.61zM19.86 10c0 5.482-4.43 9.929-9.894 9.929C4.5 19.929.07 15.482.07 10S4.501.071 9.966.071C15.43.071 19.86 4.518 19.86 10zm-1.858 0c0-4.458-3.6-8.071-8.036-8.071-4.438 0-8.037 3.613-8.037 8.071s3.6 8.071 8.037 8.071c4.437 0 8.036-3.613 8.036-8.071zm17.996 3.6c0 3.495-2.824 6.329-6.308 6.329-3.485 0-6.308-2.834-6.308-6.329 0-3.495 2.823-6.329 6.308-6.329 3.484 0 6.308 2.834 6.308 6.329zm-1.858 0c0-2.47-1.993-4.471-4.45-4.471-2.458 0-4.451 2-4.451 4.471 0 2.47 1.993 4.471 4.45 4.471 2.458 0 4.451-2 4.451-4.471zm4.157 24.986a.929.929 0 11.717-1.713l12.689 5.308c.297.124.368.077.368-.25V27.374c0-.328-.071-.376-.368-.252l-12.69 5.304a.929.929 0 11-.716-1.713l12.69-5.305c1.522-.636 2.942.315 2.942 1.966v14.557c0 1.651-1.42 2.6-2.942 1.963l-12.69-5.308z" fillRule="nonzero" /></svg></i>                        
                                <span className="vendors-categBox-button app-icon-hover app-add-vendor-modal app-ua-track-event-multiple app-link" data-icon-old="icon-tools-plus" data-icon-new="icon-tools-plus-white" data-toolredirect="true" data-id-categ={163} data-track-c="NavigationAuth" data-track-a="a-click" data-track-l="d-desktop+o-home_tools+s-vendor+dt-videography" data-track-v={0} data-track-ni={0}>
                                  <i className="svgIcon svgIcon__plus mr5"><svg viewBox="0 0 16 16"><path d="M9 7h6a1 1 0 110 2H9v6a1 1 0 11-2 0V9H1a1 1 0 010-2h6V1a1 1 0 012 0v6z" fillRule="nonzero" /></svg></i>                            Ajouter                      </span>
                              </figure>
                            </div>
                            <p className="dashVendors__itemCateg text-center" data-href="/tools/VendorsCateg?id_categ=163">{pres.categorie}</p>
                          </div>
                        </div>
                        
                    
                         )} 
                      
                      </div>



                     
                      <div className="text-right mb20">
                        <a className="link--primary" data-icon-old="icon-arrow-right-red" href="/PrestatairesDash">
                          Voir tous mes prestataires<i className="icon icon-arrow-right-red icon-right" />
                        </a>
                      </div>
                      <div className="pure-g">
                        <div className="pure-u-7-10">
                          <div className="mr40">
                            <section className="toolsPaper">
                              <h2 className="toolsPaper__title">Faire-part et papeterie de mariage</h2>
                              <div className="toolsPaper__tileContainer">
                                <div className="toolsPaperTile app-link app-ua-track-event" data-track-c="PlanningToolsAuthed" data-track-a="a-click" data-track-l="d-desktop+s-paper+o-home_tools+dt-save_the_dates" data-track-v={1} data-track-ni={0} data-href="https://faire-part.mariages.net/save-the-date-carte">
                                  <img src="https://cdn1.mariages.net/assets/img/paper/promotion/WSD-Painted-Eucalyptus.jpeg" className="toolsPaperTile__image" alt="Save the date" />
                                  <h3 className="toolsPaperTile__title">Save the date</h3>
                                  <a className="toolsPaperTile__action app-paper-tile-link" href="https://faire-part.mariages.net/save-the-date-carte">
                                    Acheter              </a>
                                </div>
                                <div className="toolsPaperTile app-link app-ua-track-event" data-track-c="PlanningToolsAuthed" data-track-a="a-click" data-track-l="d-desktop+s-paper+o-home_tools+dt-invitations" data-track-v={1} data-track-ni={0} data-href="https://faire-part.mariages.net/faire-part">
                                  <img src="https://cdn1.mariages.net/assets/img/paper/promotion/WIN-Painted-Eucalyptus.jpeg" className="toolsPaperTile__image" alt="Faire-part" />
                                  <h3 className="toolsPaperTile__title">Faire-part</h3>
                                  <a className="toolsPaperTile__action app-paper-tile-link" href="https://faire-part.mariages.net/faire-part">
                                    Acheter              </a>
                                </div>
                                <div className="toolsPaperTile app-link app-ua-track-event" data-track-c="PlanningToolsAuthed" data-track-a="a-click" data-track-l="d-desktop+s-paper+o-home_tools+dt-menu" data-track-v={1} data-track-ni={0} data-href="https://faire-part.mariages.net/menu">
                                  <img src="https://cdn1.mariages.net/assets/img/paper/promotion/WPR-Painted-Eucalyptus.jpeg" className="toolsPaperTile__image" alt="Menus" />
                                  <h3 className="toolsPaperTile__title">Menus</h3>
                                  <a className="toolsPaperTile__action app-paper-tile-link" href="https://faire-part.mariages.net/menu">
                                    Acheter              </a>
                                </div>
                                <div className="toolsPaperTile app-link app-ua-track-event" data-track-c="PlanningToolsAuthed" data-track-a="a-click" data-track-l="d-desktop+s-paper+o-home_tools+dt-guest_book" data-track-v={1} data-track-ni={0} data-href="https://faire-part.mariages.net/livres-d-or">
                                  <img src="https://cdn1.mariages.net/assets/img/paper/promotion/WTY-Painted-Eucalyptus.jpeg" className="toolsPaperTile__image" alt="Livre d'or" />
                                  <h3 className="toolsPaperTile__title">Livre d'or</h3>
                                  <a className="toolsPaperTile__action app-paper-tile-link" href="https://faire-part.mariages.net/livres-d-or">
                                    Acheter              </a>
                                </div>
                              </div>
                            </section>                <div className="clearfix">
                              <p className="dash-title fleft">
                                <a href="/tools/Checklist" className="dash-checklist-title dash-title">Tâches à venir</a>
                              </p>
                              <span className="dash-checklist-complete dash-subtitle fright">0 sur 101 tâches réalisées</span>
                            </div>
                            <div className="dash-checklist checklist-tasks">
                              <ul>
                                <li className="checklist-tasks-item app-link app-ua-track-event" data-track-c="NavigationAuth" data-track-a="a-click" data-track-l="d-desktop+o-home_tools+s-dashboard+dt-checklist_1" data-track-v={0} data-track-ni={0} data-href="/tools/Checklist?action=editMode&taskId=701">
                                  <div className="checklist-tasks-item-checkBox">
                                    <a><i className="icon-tools icon-tools-checkbox-grey" /></a>
                                  </div>
                                  <div className="checklist-tasks-item-description">
                                    <p className="checklist-tasks-item-title"><a href="/tools/Checklist?action=editMode&taskId=701">C'est décidé on se marie ! Mais par où commencer ? 💍</a></p>
                                    <span className="checklist-tasks-item-tag checklist-tasks-item-tag--block">Organisation</span>
                                  </div>
                                </li>
                                <li className="checklist-tasks-item app-link app-ua-track-event" data-track-c="NavigationAuth" data-track-a="a-click" data-track-l="d-desktop+o-home_tools+s-dashboard+dt-checklist_2" data-track-v={0} data-track-ni={0} data-href="/tools/Checklist?action=editMode&taskId=700">
                                  <div className="checklist-tasks-item-checkBox">
                                    <a><i className="icon-tools icon-tools-checkbox-grey" /></a>
                                  </div>
                                  <div className="checklist-tasks-item-description">
                                    <p className="checklist-tasks-item-title"><a href="/tools/Checklist?action=editMode&taskId=700">Première étape : télécharger l'appli ! 📱</a></p>
                                    <span className="checklist-tasks-item-tag checklist-tasks-item-tag--block">Organisation</span>
                                  </div>
                                </li>
                                <li className="checklist-tasks-item app-link app-ua-track-event" data-track-c="NavigationAuth" data-track-a="a-click" data-track-l="d-desktop+o-home_tools+s-dashboard+dt-checklist_3" data-track-v={0} data-track-ni={0} data-href="/tools/Checklist?action=editMode&taskId=699">
                                  <div className="checklist-tasks-item-checkBox">
                                    <a><i className="icon-tools icon-tools-checkbox-grey" /></a>
                                  </div>
                                  <div className="checklist-tasks-item-description">
                                    <p className="checklist-tasks-item-title"><a href="/tools/Checklist?action=editMode&taskId=699">Choisir la date 🗓️</a></p>
                                    <span className="checklist-tasks-item-tag checklist-tasks-item-tag--block">Organisation</span>
                                  </div>
                                </li>
                              </ul>
                            </div>
                            <div className="dash-checklist-footer">
                              <a href="/tools/Checklist" className="link--primary app-ua-track-event" data-track-c="NavigationAuth" data-track-a="a-click" data-track-l="d-desktop+o-home_tools+s-dashboard+dt-checklist_all" data-track-v={0} data-track-ni={0}>
                                101 tâches en attente            <i className="icon icon-arrow-right-red icon-right" />
                              </a>
                            </div>
                            <div className="pure-g row">
                              <div className="pure-u-1-2">
                                <div className="unit">
                                  <p className="dash-title">Mes invités</p>
                                  <div className="dash-box app-link" data-href="/tools/Guests">
                                    <p className="dash-subtitle pt10 pb15 text-center border-bottom">{invites.length} invité </p>
                                    <ul className="dashGuests">
                                    { invites && invites.map(invite => 
                                      <li className="dashGuests__item app-link pure-g" data-href="/tools/Guests?view=2&idContact=55637073">
                                        <div className="pure-u-1-7">
                                          <div className="dashGuests__avatar"><span className="icon-tools icon-tools-adult" /></div>
                                        </div>
                                        <div className="pure-u-6-7 pl10">
                                        
               
                                          <p className="dashGuests__name">{invite.nom} {invite.prenom} </p>
                                          <p className="dashGuests__group" />
                                        </div>
                                      </li>
                                      )} 
                                    </ul>
                                  </div>
                                  <div className="text-right mt20 mr10">
                                    <a href="/Invites" className="link--primary app-ua-track-event" data-track-c="NavigationAuth" data-track-a="a-click" data-track-l="d-desktop+o-home_tools+s-dashboard+dt-guestlist" data-track-v={0} data-track-ni={0}>
                                      Voir liste des invités <i className="icon-right icon icon-arrow-right-red" />
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <div className="pure-u-1-2">
                                <div className="unit">
                                  <p className="dash-title">Mon budget</p>
                                  <div className="dash-box app-link" data-href="/Budget">
                                    <div className="dashBudget">
                                      <div className="pure-g mb10">
                                        <div className="pure-u-1-2">
                                          <i className="icon-tools icon-tools-pig block mb20" />
                                          <p className="dashBudget__title">Montant estimé </p>
                                          <p className="dashBudget__price">
                                            16 003                                                €                                          </p>
                                        </div>
                                        <div className="pure-u-1-2">
                                          <i className="icon-tools icon-tools-price block mb20" />
                                          <p className="dashBudget__title">Montant final </p>
                                          <p className="dashBudget__price green">
                                            0                                                €                                          </p>
                                        </div>
                                      </div>
                                      <p className="mb0">
                                        <a className="btnOutline btnOutline--red app-ua-track-event" href="/tools/Budget" data-track-c="NavigationAuth" data-track-a="a-click" data-track-l="d-desktop+o-home_tools+s-dashboard+dt-budget_expenses" data-track-v={0} data-track-ni={0}>
                                          Ajouter dépense                                      </a>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <div className="text-right mt20 mr10">
                                  <a href="/Budget" className="link--primary app-ua-track-event" data-track-c="NavigationAuth" data-track-a="a-click" data-track-l="d-desktop+o-home_tools+s-dashboard+dt-budget_all" data-track-v={0} data-track-ni={0}>
                                    Voir mon budget <i className="icon-right icon icon-arrow-right-red" />
                                  </a>
                                </div>
                              </div>
                            </div>
                            <p className="dash-title mb20 mt30">A propos de mon mariage</p>
                            <div className="dash-wedding mb40">
                              <div id="misTags" data-url-base-buscador="https://communaute.mariages.net/membres">
                                <ul className="profile-aboutwedding pure-g row profile-aboutwedding-editprofile">
                                  <li className="pure-u-1-5">
                                    <div className="box app-container">
                                      <div className="profile-aboutwedding-icon app-aboutwedding-show">
                                        <div className="pt10">
                                          <i data-grupo={1} className="app-perfil-show icon-wedding-color icon-wedding-color-red" />
                                        </div>
                                        <i className="profile-aboutwedding-edit app-perfil-show icon icon-edit-red" />
                                        <div className="droplayer profile-aboutwedding-droplayer app-about-wedding-layer dnone text-center">
                                          <ul className="profile-aboutwedding-droplayer--content pure-g" data-grupo={1}>
                                            <li className="pure-u-1-5 app-tools-perfil-boda-layer" data-id={139}>
                                              <span className="app-perfil-show icon-wedding-color icon-wedding-color-silver" />
                                              <small className="block mt5">Argenté</small>
                                            </li>
                                            <li className="pure-u-1-5 app-tools-perfil-boda-layer" data-id={70}>
                                              <span className="app-perfil-show icon-wedding-color icon-wedding-color-beige" />
                                              <small className="block mt5">Beige</small>
                                            </li>
                                            <li className="pure-u-1-5 app-tools-perfil-boda-layer" data-id={12}>
                                              <span className="app-perfil-show icon-wedding-color icon-wedding-color-white" />
                                              <small className="block mt5">Blanc</small>
                                            </li>
                                            <li className="pure-u-1-5 app-tools-perfil-boda-layer" data-id={30}>
                                              <span className="app-perfil-show icon-wedding-color icon-wedding-color-blue" />
                                              <small className="block mt5">Bleu</small>
                                            </li>
                                            <li className="pure-u-1-5 app-tools-perfil-boda-layer" data-id={66}>
                                              <span className="app-perfil-show icon-wedding-color icon-wedding-color-garnet" />
                                              <small className="block mt5">Bordeaux</small>
                                            </li>
                                            <li className="pure-u-1-5 app-tools-perfil-boda-layer" data-id={90}>
                                              <span className="app-perfil-show icon-wedding-color icon-wedding-color-golden" />
                                              <small className="block mt5">Doré</small>
                                            </li>
                                            <li className="pure-u-1-5 app-tools-perfil-boda-layer" data-id={118}>
                                              <span className="app-perfil-show icon-wedding-color icon-wedding-color-fuchsia" />
                                              <small className="block mt5">Fuschia</small>
                                            </li>
                                            <li className="pure-u-1-5 app-tools-perfil-boda-layer" data-id={97}>
                                              <span className="app-perfil-show icon-wedding-color icon-wedding-color-grey" />
                                              <small className="block mt5">Gris</small>
                                            </li>
                                            <li className="pure-u-1-5 app-tools-perfil-boda-layer" data-id={69}>
                                              <span className="app-perfil-show icon-wedding-color icon-wedding-color-yellow" />
                                              <small className="block mt5">Jaune</small>
                                            </li>
                                            <li className="pure-u-1-5 app-tools-perfil-boda-layer" data-id={71}>
                                              <span className="app-perfil-show icon-wedding-color icon-wedding-color-brown" />
                                              <small className="block mt5">Marron</small>
                                            </li>
                                            <li className="pure-u-1-5 app-tools-perfil-boda-layer" data-id={55}>
                                              <span className="app-perfil-show icon-wedding-color icon-wedding-color-black" />
                                              <small className="block mt5">Noir</small>
                                            </li>
                                            <li className="pure-u-1-5 app-tools-perfil-boda-layer" data-id={142}>
                                              <span className="app-perfil-show icon-wedding-color icon-wedding-color-blackwhite" />
                                              <small className="block mt5">Noir et blanc</small>
                                            </li>
                                            <li className="pure-u-1-5 app-tools-perfil-boda-layer" data-id={65}>
                                              <span className="app-perfil-show icon-wedding-color icon-wedding-color-orange" />
                                              <small className="block mt5">Orange</small>
                                            </li>
                                            <li className="pure-u-1-5 app-tools-perfil-boda-layer" data-id={68}>
                                              <span className="app-perfil-show icon-wedding-color icon-wedding-color-purple" />
                                              <small className="block mt5">Parme</small>
                                            </li>
                                            <li className="pure-u-1-5 app-tools-perfil-boda-layer" data-id={60}>
                                              <span className="app-perfil-show icon-wedding-color icon-wedding-color-pink" />
                                              <small className="block mt5">Rose</small>
                                            </li>
                                            <li className="pure-u-1-5 app-tools-perfil-boda-layer" data-id={42}>
                                              <span className="app-perfil-show icon-wedding-color icon-wedding-color-red" />
                                              <small className="block mt5">Rouge</small>
                                            </li>
                                            <li className="pure-u-1-5 app-tools-perfil-boda-layer" data-id={36}>
                                              <span className="app-perfil-show icon-wedding-color icon-wedding-color-green" />
                                              <small className="block mt5">Vert</small>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                      <div className="profile-aboutwedding-content">
                                        <span className="profile-aboutwedding-title">
                                          Couleur                          </span>
                                        <span className="profile-aboutwedding-label" data-grupo={1}>
                                          Rouge                          </span>
                                        <a className="link--primary" href="https://communaute.mariages.net/membres?color=42" rel="nofollow">1.663 mariés</a>
                                      </div>
                                    </div>
                                  </li>
                                  <li className="pure-u-1-5">
                                    <div className="box app-container">
                                      <div className="profile-aboutwedding-icon app-aboutwedding-show">
                                        <i data-grupo={3} className="app-perfil-show icon-season icon-season-spring" />
                                        <i className="profile-aboutwedding-edit app-perfil-show icon icon-edit-red" />
                                        <div className="droplayer profile-aboutwedding-droplayer app-about-wedding-layer dnone text-center">
                                          <ul className="profile-aboutwedding-droplayer--content pure-g" data-grupo={3}>
                                            <li className="pure-u-1-4 app-tools-perfil-boda-layer" data-id={200}>
                                              <span className="app-perfil-show icon-season icon-season-winter" />
                                              <small className=" block mt5">Hiver</small>
                                            </li>
                                            <li className="pure-u-1-4 app-tools-perfil-boda-layer" data-id={197}>
                                              <span className="app-perfil-show icon-season icon-season-spring" />
                                              <small className=" block mt5">Printemps</small>
                                            </li>
                                            <li className="pure-u-1-4 app-tools-perfil-boda-layer" data-id={198}>
                                              <span className="app-perfil-show icon-season icon-season-summer" />
                                              <small className=" block mt5">Été</small>
                                            </li>
                                            <li className="pure-u-1-4 app-tools-perfil-boda-layer" data-id={199}>
                                              <span className="app-perfil-show icon-season icon-season-autumn" />
                                              <small className=" block mt5">Automne</small>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                      <div className="profile-aboutwedding-content">
                                        <span className="profile-aboutwedding-title">
                                          Saison                          </span>
                                        <span className="profile-aboutwedding-label" data-grupo={3}>
                                          Printemps                          </span>
                                        <a className="link--primary" href="https://communaute.mariages.net/membres?temporada=197" rel="nofollow">8.261 mariés</a>
                                      </div>
                                    </div>
                                  </li>
                                  <li className="pure-u-1-5">
                                    <div className="box app-container">
                                      <div className="profile-aboutwedding-icon app-aboutwedding-show">
                                        <i data-grupo={2} className="app-perfil-show icon-style icon-style-beach" />
                                        <i className="profile-aboutwedding-edit app-perfil-show icon icon-edit-red" />
                                        <div className="droplayer profile-aboutwedding-droplayer profile-aboutwedding-droplayer--bigContainer app-about-wedding-layer dnone text-center">
                                          <ul className="profile-aboutwedding-droplayer--content pure-g-r" data-grupo={2}>
                                            <li className="pure-u-1-4 app-tools-perfil-boda-layer" data-id={77}>
                                              <span className="icon-style icon-style-beach" />
                                              <small className="block mt5">À la plage</small>
                                            </li>
                                            <li className="pure-u-1-4 app-tools-perfil-boda-layer" data-id={32}>
                                              <span className="icon-style icon-style-country" />
                                              <small className="block mt5">Champêtre</small>
                                            </li>
                                            <li className="pure-u-1-4 app-tools-perfil-boda-layer" data-id={63}>
                                              <span className="icon-style icon-style-night" />
                                              <small className="block mt5">De nuit</small>
                                            </li>
                                            <li className="pure-u-1-4 app-tools-perfil-boda-layer" data-id={204}>
                                              <span className="icon-style icon-style-elegant" />
                                              <small className="block mt5">Élégant</small>
                                            </li>
                                            <li className="pure-u-1-4 app-tools-perfil-boda-layer" data-id={5}>
                                              <span className="icon-style icon-style-park" />
                                              <small className="block mt5">En extérieur</small>
                                            </li>
                                            <li className="pure-u-1-4 app-tools-perfil-boda-layer" data-id={107}>
                                              <span className="icon-style icon-style-modern" />
                                              <small className="block mt5">Moderne</small>
                                            </li>
                                            <li className="pure-u-1-4 app-tools-perfil-boda-layer" data-id={19}>
                                              <span className="icon-style icon-style-wood" />
                                              <small className="block mt5">Rustique</small>
                                            </li>
                                            <li className="pure-u-1-4 app-tools-perfil-boda-layer" data-id={24}>
                                              <span className="icon-style icon-style-vintage" />
                                              <small className="block mt5">Vintage</small>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                      <div className="profile-aboutwedding-content">
                                        <span className="profile-aboutwedding-title">
                                          Style                          </span>
                                        <span className="profile-aboutwedding-label" data-grupo={2}>
                                          À la plage                          </span>
                                        <a className="link--primary" href="https://communaute.mariages.net/membres?estilo=77" rel="nofollow">1.058 mariés</a>
                                      </div>
                                    </div>
                                  </li>
                                  <li className="pure-u-1-5">
                                    <div className="box app-container">
                                      <div className="profile-aboutwedding-icon app-aboutwedding-show">
                                        <div className="app-com-icon-about profile-aboutwedding-icon-miss profile-aboutwedding-icon-miss-old" data-group="designer">
                                          <i className="icon icon-miss" />
                                        </div>
                                        <i className="profile-aboutwedding-edit app-perfil-show icon icon-edit-red" />
                                        <div className="droplayer profile-aboutwedding-droplayer app-about-wedding-layer dnone">
                                          <div className="profile-aboutwedding-droplayer--content">
                                            <p className="strong text-left">Nom du Créateur de Mode</p>
                                            <div className="input-group contest-box-add-designer-option-search">
                                              <input type="hidden" className="app-suggest-designer" id="suDesigner_id-default" name="app-suggest-designer-input-id-default" defaultValue="default" />
                                              <input id="default" type="text" autoComplete="off" className="app-suggest-designer-input fs12" placeholder="Entrez un créateur de mode" onkeyup defaultValue />
                                            </div>
                                            <div className="app-suggest-designer-div droplayer-scroll dnone" />
                                          </div>
                                        </div>
                                      </div>
                                      <div className="profile-aboutwedding-content">
                                        <span className="profile-aboutwedding-title">
                                          Robes                          </span>
                                        <span className="profile-aboutwedding-label app-name-designer" data-grupo="designer">
                                          ...                          </span>
                                      </div>
                                    </div>
                                  </li>
                                  <li className="pure-u-1-5">
                                    <div className="box app-container">
                                      <div className="profile-aboutwedding-icon app-aboutwedding-show">
                                        <div className="app-com-icon-about profile-aboutwedding-icon-miss profile-aboutwedding-icon-miss-old" data-group="honeymoon">
                                          <i className="icon icon-miss" />
                                        </div>
                                        <i className="profile-aboutwedding-edit app-perfil-show icon icon-edit-red" />
                                        <div className="droplayer profile-aboutwedding-droplayer app-about-wedding-layer dnone">
                                          <div className="profile-aboutwedding-droplayer--content">
                                            <p className="strong text-left">Destination Lune de Miel</p>
                                            <div className="input-group contest-box-add-honeymoon-option-search">
                                              <input type="hidden" className="app-suggest-honeymoon" id="suHoneymoon_id-default" name="app-suggest-designer-input-id-default" defaultValue="default" />
                                              <input id="default" type="text" autoComplete="off" className="app-suggest-honeymoon-input fs12" placeholder="Entrez une destination de Lune de Miel" onkeyup defaultValue />
                                            </div>
                                            <div className="app-suggest-honeymoon-div droplayer-scroll dnone" />
                                          </div>
                                        </div>
                                      </div>
                                      <div className="profile-aboutwedding-content">
                                        <span className="profile-aboutwedding-title">
                                          Lune de miel                          </span>
                                        <span className="profile-aboutwedding-label app-name-honeymoon" data-grupo="honeymoon">
                                          ...                          </span>
                                      </div>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <p className="dash-title mb20 mt30">Aujourd'hui, dans les forums, nous parlons de...</p>
                            <div className="dash-community-new">
                              <form action="https://communaute.mariages.net/community-discussions-create.php" method="post">
                                <div className="dash-community-new-avatar">
                                  <div className="avatar  " data-testid="partials-complete-avatar">    <div className="avatar-alias size-avatar-large ">
                                      <svg className="avatar-generic" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" preserveAspectRatio="xMidYMin slice">
                                        <circle fill="#C7C9C0" cx={100} cy={100} r={100} />
                                        <text transform="translate(100,130)" y={0}>
                                          <tspan fontSize={90} className fill="rgba(0,0,0,0.3)" textAnchor="middle">N</tspan>
                                        </text>
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                                <div className="dash-community-new-comment">
                                  <input type="text" className="dash-community-new-input" name="message" placeholder="Vous avez des questions ? Créez un post !" />
                                </div>
                                <input className="dash-community-new-button btn-flat red" type="submit" defaultValue="Envoyer" />
                              </form>
                            </div>
                            <div className="pure-g">
                              <div className="pure-u-1-3 dash-community-item-box">
                                <div className="dash-community-item">
                                  <div className="dash-community-item-content">
                                    <div className="dash-community-item-avatar">
                                      <div className="avatar  " data-testid="partials-complete-avatar">    <figure>
                                          <img className="avatar-thumb" src="https://cdn0.mariages.net/usr/8/7/5/8/utmr_4438758.jpg?r=15199" width loading="lazy" alt="Maéva" />
                                        </figure>
                                      </div>
                                    </div>
                                    <a className="dash-community-item-title" href="https://communaute.mariages.net/forum/que-repondre-a-une-amie-qui-15-jours-avant-le-mariage-annule-son-invitation--t635105">
                                      Que répondre à une amie qui 15 jours avant le mariage annule son invitation ?                  </a>
                                    <p className="dash-community-item-description">(La date buttoir pour le traiteur est passé et j’avais fait un point 1 mois avant pour être sûre du nombre de présent.<span className="app-common-ellipsis">...</span></p>
                                  </div>
                                  <footer className="dash-community-item-footer">
                                    <a className="subtitle" href="https://communaute.mariages.net/forum/que-repondre-a-une-amie-qui-15-jours-avant-le-mariage-annule-son-invitation--t635105">
                                      Voir sondage                                          </a>
                                  </footer>
                                </div>
                              </div>
                              <div className="pure-u-1-3 dash-community-item-box">
                                <div className="dash-community-item">
                                  <div className="dash-community-item-content">
                                    <div className="dash-community-item-avatar">
                                      <div className="avatar  " data-testid="partials-complete-avatar">    <figure>
                                          <img className="avatar-thumb" src="https://cdn0.mariages.net/usr/3/3/4/5/utmr_4803345.jpg?r=45483" width loading="lazy" alt="Jojo" />
                                        </figure>
                                      </div>
                                    </div>
                                    <a className="dash-community-item-title" href="https://communaute.mariages.net/forum/nos-menus--t635155">
                                      Nos menus !!!!!!!                  </a>
                                    <p className="dash-community-item-description">Coucou les FM !! Je partage avec vous ma joie, nous avons reçu nos menu gravé dans le bois !!!! Le Design a été fait par<span className="app-common-ellipsis">...</span></p>
                                  </div>
                                  <footer className="dash-community-item-footer">
                                    <a className="subtitle" href="https://communaute.mariages.net/forum/nos-menus--t635155">
                                      Voir post                                          </a>
                                  </footer>
                                </div>
                              </div>
                              <div className="pure-u-1-3 dash-community-item-box">
                                <div className="dash-community-item">
                                  <div className="dash-community-item-content">
                                    <div className="dash-community-item-avatar">
                                      <div className="avatar  " data-testid="partials-complete-avatar">    <figure>
                                          <img className="avatar-thumb" src="https://cdn0.mariages.net/usr/6/0/8/0/utmr_4336080.jpg?r=47487" width loading="lazy" alt="Lou" />
                                        </figure>
                                      </div>
                                    </div>
                                    <a className="dash-community-item-title" href="https://communaute.mariages.net/forum/place-a-la-detente-les-cauchemars-commencent--t635177">
                                      Place à la détente les cauchemars commencent 😂                  </a>
                                    <p className="dash-community-item-description">Hello ! Je pense qu’à J-15 le stress se fait ressentir, après une crise hémorroïdaire (et oui aucun tabou avec moi 😇),<span className="app-common-ellipsis">...</span></p>
                                  </div>
                                  <footer className="dash-community-item-footer">
                                    <a className="subtitle" href="https://communaute.mariages.net/forum/place-a-la-detente-les-cauchemars-commencent--t635177">
                                      Voir post                                          </a>
                                  </footer>
                                </div>
                              </div>
                            </div>
                            <div className="text-right mt20">
                              <a href="https://communaute.mariages.net/" className="link--primary">
                                Aller à la communauté        <i className="icon icon-arrow-right-red icon-right" />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="pure-u-3-10 mt10">
                          <div className="cardPromo cardPromo--wedsites cardPromo--websitesStep2 app-link app-ua-track-event" data-track-c="PlanningToolsAuthed" data-track-a="a-click" data-track-l="d-desktop+s-home_cards_customize_website" data-track-s data-track-v={0} data-track-ni={0} data-href="https://www.mariages.net/tools/website-wizard?actionReferrer=205">
                            <p className="cardPromo__title">Nous adorons le thème que vous avez choisi</p>
                            <p className="cardPromo__description">Vous y êtes presque ! Ajoutez-y votre touche personnelle</p>
                            <span className="link--primary small upper strong">Personnaliser</span>
                            <div className="mt20 wizardSlider wizardSlider-websiteCTA wizardSlider-customizeBox personalizarWizardBanner">
                              <div className="wrapperPersonalizarWizardBanner">
                                <div className=" wizardSlider__card wizardSlider__card-smallCard " data-id={129} data-page data-option="setTemplate" data-id-layout={1} data-custom-layout data-css-class data-family data-premium>
                                  <div className="wizardSlider__upperWrapper">
                                    <div className="wizardSlider__imagesWrapper app-wizard-images-wrapper">
                                      <img className="wizardSlider__gridThumb wizardSlider__gridThumb-detailed wizardSlider__gridThumb-smallImage    wizardSlider__gridThumb-vertical" width={560} height={704} src="https://cdn1.mariages.net/assets/img/wedsites/thumb/fr/glam_deco_lg.jpg" srcSet="https://cdn1.mariages.net/assets/img/wedsites/thumb/fr/glam_deco_lg.jpg 1x, https://cdn1.mariages.net/assets/img/wedsites/thumb/fr/glam_deco_lg@2x.jpg 2x" />
                                      <img className="wizardSlider__gridThumbMobile wizardSlider__gridThumbMobile-detailed wizardSlider__gridThumbMobile-smallImage        wizardSlider__gridThumbMobile-vertical" width={150} height={325} src="https://cdn1.mariages.net/assets/img/wedsites/thumb_mobile/fr/glam_deco@2x.jpg" srcSet="https://cdn1.mariages.net/assets/img/wedsites/thumb_mobile/fr/glam_deco@2x.jpg 1x, https://cdn1.mariages.net/assets/img/wedsites/thumb_mobile/fr/glam_deco@2x.jpg 2x" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="cardPromo cardPromo--registryAmazon pointer app-link" data-href="https://www.amazon.fr/wedding?tag=registryeur04-21">
                            <p className="cardPromo__title">Votre liste de mariage sur Amazon</p>
                            <a className="link--primary small upper strong pr20" href="https://www.amazon.fr/wedding?tag=registryeur04-21" target="_blank">Créez votre liste de mariage</a>
                          </div>                
                          <div className="dash-boxAside dash-boxAside-match">
                            <div className="dash-boxAside-hero">
                              <p className="dash-boxAside-content-title">Il est temps de faire des rencontres !</p>
                              <ul className="avatar-group pt20">
                                <li className="avatar-group-item">
                                  <div className="avatar  " data-testid="partials-complete-avatar">    <figure>
                                      <img className="avatar-thumb" src="https://cdn0.mariages.net/usr/6/3/9/9/utmp_5136399.jpg?r=93340" width loading="lazy" alt="Virginie" />
                                    </figure>
                                  </div>
                                </li>
                                <li className="avatar-group-item">
                                  <div className="avatar  " data-testid="partials-complete-avatar">    <figure>
                                      <img className="avatar-thumb" src="https://cdn0.mariages.net/usr/3/7/7/5/utmp_5563775.jpg?r=94068" width loading="lazy" alt="Lisa" />
                                    </figure>
                                  </div>
                                </li>
                                <li className="avatar-group-item">
                                  <div className="avatar  " data-testid="partials-complete-avatar">    <figure>
                                      <img className="avatar-thumb" src="https://cdn0.mariages.net/usr/8/4/7/5/utmp_5538475.jpg?r=11831" width loading="lazy" alt="Willyce" />
                                    </figure>
                                  </div>
                                </li>
                                <li className="avatar-group-item">
                                  <div className="avatar  " data-testid="partials-complete-avatar">    <figure>
                                      <img className="avatar-thumb" src="https://cdn0.mariages.net/usr/2/9/9/6/utmp_1552996.jpg?r=57695" width loading="lazy" alt="Bouricha" />
                                    </figure>
                                  </div>
                                </li>
                                <li className="avatar-group-item size-avatar-medium app-link app-ua-track-event" data-track-c="NavigationAuth" data-track-a="a-click" data-track-l="d-desktop+o-home_tools+s-dashboard+dt-comm_meet" data-track-v={0} data-track-ni={0} data-href="https://communaute.mariages.net/community-discussions-same-day.php">
                                  <i className="btn-more btn-more-large size-avatar-medium" />
                                </li>
                              </ul>
                            </div>
                            <div className="dash-boxAside-content">
                              <p>
                                <span className="strong">
                                  145 marié(e)s</span> se marient en Juillet 2023                
                              </p>
                              <a href="https://communaute.mariages.net/community-discussions-same-day.php" className="btn-outline outline-red app-ua-track-event" data-track-c="NavigationAuth" data-track-a="a-click" data-track-l="d-desktop+o-home_tools+s-dashboard+dt-comm_everyone" data-track-v={0} data-track-ni={0}>
                                Faites leur connaissance !          </a>
                            </div>
                          </div>
                          <div className="cardPromo cardPromo--wedshoots cardPromo--wedshootsLogo app-link app-ua-track-event" data-track-c="PlanningToolsAuthed" data-track-a="a-click" data-track-l="d-desktop+s-home_cards_wedshoots_download" data-track-s data-track-v={0} data-track-ni={0} data-href="/tools/Wedshoots">
                            <p className="cardPromo__title">Téléchargez WedShoots</p>
                            <p className="cardPromo__description">Votre album privé pour que tous les invités partagent leurs photos</p>
                            <a className="link--primary small upper strong">Télécharger l'application</a>
                          </div>
                          <div className="cardPromo cardPromo--app">
                            <img className="mb10" width={65} src="https://cdn1.mariages.net/assets/img/dropdown/app.png" srcSet="https://cdn1.mariages.net/assets/img/dropdown/app.png 1x, https://cdn1.mariages.net/assets/img/dropdown/app@2x.png 2x" />
                            <p className="cardPromo__title">Téléchargez l'application</p>
                            <p className="cardPromo__description">Emportez le meilleur planificateur de mariage pour iPhone et Android partout avec vous</p>
                            <a className="mr10 app-ua-track-event" data-track-c="NavigationAuth" data-track-a="a-click" data-track-l="d-desktop+o-home_tools+s-dashboard+dt-down_ios" data-track-v={0} data-track-ni={0} href="https://app.appsflyer.com/id606938005?pid=WP-iOS-FR&c=WP-FR-LANDINGS&s=fr">
                              <img height={45} src="https://cdn1.mariages.net/assets/img/store/btn-appstore_fr.svg" />
                            </a>
                            <a className="app-ua-track-event" data-track-c="NavigationAuth" data-track-a="a-click" data-track-l="d-desktop+o-home_tools+s-dashboard+dt-down_and" data-track-v={0} data-track-ni={0} href="https://app.appsflyer.com/net.mariages.launcher?pid=WP-Android-FR&c=WP-FR-LANDINGS">
                              <img height={45} src="https://cdn1.mariages.net/assets/img/store/btn-gplay_fr.svg" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                  </main>
                  
                  <div className="white pt5 mt25">
                    <div className="footer-info">
                      <div className="wrapper">
                        <div className="pure-g">
                          <div className="pure-u-1-4">
                            <div className="pure-s">
                              <p className="footer-info-title">Informations</p>
                              <hr />
                              <ul>
                                <li>
                                  <a rel="nofollow" href="https://www.mariages.net/contactar.php">Contact</a>
                                </li>
                                <li>
                                  <a rel="nofollow" href="https://www.mariages.net/mentions-legales.php">Mentions légales</a>
                                </li>
                                <li>
                                  <a rel="nofollow" href="https://www.mariages.net/legal/privacy.php">Politique de confidentialité</a>
                                </li>
                                <li>
                                  <a rel="nofollow" href="https://www.mariages.net/legal/cookies.php">Politique de cookies</a>
                                </li>
                                <li>
                                  <a className="ot-sdk-show-settings">Ne pas vendre mes données personnelles</a>
                                </li>
                                <li>
                                  <a rel="nofollow" href="https://www.mariages.net/emp-Acceso.php">Inscription entreprises</a>
                                </li>
                                <li>
                                  <a href="https://www.mariages.net/aboutus/aboutus.php">Qui sommes-nous ?</a>
                                </li>
                                <li>
                                  <a rel="nofollow" href="https://www.theknotww.com/careers/" target="_blank">Careers</a>
                                </li>
                                <li>
                                  <a href="https://www.mariages.net/site-web-mariage">Site de mariage</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="pure-u-1-4">
                            <div className="pure-s">
                              <p className="footer-info-title">Téléchargez l'application</p>
                              <hr />
                              <ul>
                                <li>
                                  <a rel="nofollow noopener noreferrer" target="_blank" href="https://app.appsflyer.com/id606938005?pid=WP-iOS-FR&c=WP-FR-LANDINGS&s=fr">
                                    <img src="https://cdn1.mariages.net/assets/img/footer/appstore.png" srcSet="https://cdn1.mariages.net/assets/img/footer/appstore@2x.png 2x" width={140} height={42} loading="lazy" alt="Appstore" />
                                  </a>
                                </li>
                                <li className="mt10">
                                  <a rel="nofollow noopener noreferrer" target="_blank" href="https://app.appsflyer.com/net.mariages.launcher?pid=WP-Android-FR&c=WP-FR-LANDINGS">
                                    <img src="https://cdn1.mariages.net/assets/img/footer/googleplay.png" srcSet="https://cdn1.mariages.net/assets/img/footer/googleplay@2x.png 2x" width={140} height={42} loading="lazy" alt="Google Play" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="pure-u-1-4">
                            <div className="pure-s">
                              <p className="footer-info-title">Suivez-nous sur</p>
                              <hr />
                              <ul className="footer-social">
                                <li><a rel="nofollow noopener noreferrer" href="https://www.facebook.com/mariagesnet" target="_blank"><i className="svgIcon svgIcon__facebook "><svg viewBox="0 0 1792 1792"><path d="M1343 12v264h-157q-86 0-116 36t-30 108v189h293l-39 296h-254v759H734V905H479V609h255V391q0-186 104-288.5T1115 0q147 0 228 12z" /></svg></i>Facebook</a></li>
                                <li><a rel="nofollow noopener noreferrer" href="https://twitter.com/mariagesnet" target="_blank"><i className="svgIcon svgIcon__twitter "><svg viewBox="0 0 502 408"><path d="M501.625 48.375c-18.477 8.203-38.281 13.71-59.102 16.21 21.25-12.733 37.579-32.89 45.235-56.874a206.477 206.477 0 01-65.313 24.922c-18.75-20-45.468-32.461-75.039-32.461-56.797 0-102.851 46.016-102.851 102.812 0 8.047.937 15.899 2.695 23.438C161.781 122.125 86.04 81.188 35.297 18.96 26.43 34.195 21.39 51.85 21.39 70.68c0 35.664 18.125 67.148 45.742 85.625-16.875-.547-32.735-5.196-46.602-12.89v1.288c0 49.844 35.469 91.367 82.461 100.86-8.594 2.343-17.695 3.593-27.07 3.593-6.64 0-13.086-.625-19.375-1.875 13.125 40.82 51.094 70.625 96.055 71.446-35.157 27.578-79.493 43.984-127.696 43.984-8.32 0-16.484-.469-24.492-1.445 45.469 29.218 99.531 46.21 157.617 46.21 189.14 0 292.578-156.68 292.578-292.538 0-4.454-.117-8.946-.273-13.32 20.078-14.493 37.5-32.618 51.289-53.243z" fillRule="nonzero" /></svg></i>Twitter</a></li>
                                <li><a rel="nofollow noopener noreferrer" href="https://pinterest.com/mariagesnet" target="_blank"><i className="svgIcon svgIcon__pinterest "><svg viewBox="0 0 1792 1792"><path d="M1664 896q0 209-103 385.5T1281.5 1561 896 1664q-111 0-218-32 59-93 78-164 9-34 54-211 20 39 73 67.5t114 28.5q121 0 216-68.5t147-188.5 52-270q0-114-59.5-214T1180 449t-255-63q-105 0-196 29t-154.5 77-109 110.5-67 129.5T377 866q0 104 40 183t117 111q30 12 38-20 2-7 8-31t8-30q6-23-11-43-51-61-51-151 0-151 104.5-259.5T904 517q151 0 235.5 82t84.5 213q0 170-68.5 289T980 1220q-61 0-98-43.5T859 1072q8-35 26.5-93.5t30-103T927 800q0-50-27-83t-77-33q-62 0-105 57t-43 142q0 73 25 122l-99 418q-17 70-13 177-206-91-333-281T128 896q0-209 103-385.5T510.5 231 896 128t385.5 103T1561 510.5 1664 896z" /></svg></i>Pinterest</a></li>
                                <li><a rel="nofollow noopener noreferrer" href="https://instagram.com/mariagesnet" target="_blank"><i className="svgIcon svgIcon__instagram "><svg viewBox="0 0 1792 1792"><path d="M1152 896q0-106-75-181t-181-75-181 75-75 181 75 181 181 75 181-75 75-181zm138 0q0 164-115 279t-279 115-279-115-115-279 115-279 279-115 279 115 115 279zm108-410q0 38-27 65t-65 27-65-27-27-65 27-65 65-27 65 27 27 65zM896 266q-7 0-76.5-.5t-105.5 0-96.5 3-103 10T443 297q-50 20-88 58t-58 88q-11 29-18.5 71.5t-10 103-3 96.5 0 105.5.5 76.5-.5 76.5 0 105.5 3 96.5 10 103T297 1349q20 50 58 88t88 58q29 11 71.5 18.5t103 10 96.5 3 105.5 0 76.5-.5 76.5.5 105.5 0 96.5-3 103-10 71.5-18.5q50-20 88-58t58-88q11-29 18.5-71.5t10-103 3-96.5 0-105.5-.5-76.5.5-76.5 0-105.5-3-96.5-10-103T1495 443q-20-50-58-88t-88-58q-29-11-71.5-18.5t-103-10-96.5-3-105.5 0-76.5.5zm768 630q0 229-5 317-10 208-124 322t-322 124q-88 5-317 5t-317-5q-208-10-322-124t-124-322q-5-88-5-317t5-317q10-208 124-322t322-124q88-5 317-5t317 5q208 10 322 124t124 322q5 88 5 317z" /></svg></i>Instagram</a></li>
                                <li><a rel="nofollow noopener noreferrer" href="https://www.youtube.com/user/mariagesdotnet/featured" target="_blank"><i className="svgIcon svgIcon__youtube-filled "><svg viewBox="0 0 17 12"><path d="M16.293 2.731v6.324a2.384 2.384 0 01-2.383 2.385H2.73A2.384 2.384 0 01.347 9.055V2.73A2.384 2.384 0 012.73.347h11.18a2.384 2.384 0 012.383 2.384zM6.587 8.624l4.693-3.001L6.587 2.62v6.004z" fillRule="evenodd" /></svg></i>Youtube</a></li>
                                <li><a rel="nofollow noopener noreferrer" href="https://www.tiktok.com/@mariages.net" target="_blank"><i className="svgIcon svgIcon__tiktok-logo "><svg viewBox="0 0 18 18"><path d="M17.806 4.507A4.546 4.546 0 0113.254 0h-2.94v8.03l-.003 4.4a2.66 2.66 0 01-2.814 2.655 2.65 2.65 0 01-1.217-.374 2.66 2.66 0 01-1.3-2.241 2.662 2.662 0 013.504-2.565V6.921a5.784 5.784 0 00-.848-.062 5.636 5.636 0 00-4.234 1.894 5.513 5.513 0 00-1.391 3.326 5.506 5.506 0 001.64 4.29A5.637 5.637 0 007.636 18c.287-.001.57-.022.848-.063a5.618 5.618 0 003.138-1.57 5.503 5.503 0 001.65-3.915l-.015-6.57a7.43 7.43 0 004.557 1.549V4.506h-.008z" /></svg></i>TikTok</a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="footer-nav">
                      <div className="wrapper">
                        <div className="fleft">
                          <div id="app-show-footer-flags" className="footer-flags">
                            <i className="icon-flag icon-flag-fr icon-left" /> France                <i className="svgIcon svgIcon__angleDown ">
                              <svg viewBox="0 0 32 32" width={16} height={16}>
                                <use xlinkHref="#svg-_common-angleDown" />
                              </svg>
                            </i>                <div id="app-footer-flags" style={{display: 'none'}} />
                          </div>
                          <img className="footer-wwgroup" src="https://cdn1.mariages.net/assets/img/footer/tkww_logo_KO.png" srcSet="https://cdn1.mariages.net/assets/img/footer/tkww_logo_KO_2x.png 2x" width={95} height={33} alt="ww logo" loading="lazy" />
                        </div>
                        <div className="overflow">
                          <ul className="footer-nav-menu">
                            <li><span className="app-footer-links" data-sec={0}>Mon&nbsp;mariage</span></li>
                            <li><span className="app-footer-links" data-sec={1}>Réception</span></li>
                            <li><span className="app-footer-links" data-sec={2}>Prestataires</span></li>
                            <li><span className="app-footer-links" data-sec={3}>Mariée</span></li>
                            <li><span className="app-footer-links" data-sec={4}>Marié</span></li>
                            <li><span className="app-footer-links" data-sec={5}>Idées</span></li>
                            <li><span className="app-footer-links" data-sec={6}>Communauté</span></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="app-common-layer" className="modal dnone" tabIndex={-1} role="dialog" aria-hidden="true" />
                  <div id="app-va-modal" className="modal fade dnone" tabIndex={-1} role="dialog" aria-hidden="true" />
                  <div tabIndex={-1} role="dialog" aria-hidden="true" className="modal" id="initPlannerShow" />
                  <div tabIndex={-1} role="dialog" aria-hidden="true" className="modal" id="initRequestLogin" />
                  <div tabIndex={-1} role="dialog" aria-hidden="true" className="modal fade" id="tool-modal" />
                  <div id="fb-root" />
                  <div className="dnone">
                  </div>
                  <img className="img-trace" src="https://www.mariages.net/traces-LastConnection.php?idUser=6159171&idDevice=2" alt="" />
                  <div id="app-pusher-vendors-users-notification-alert" className="pusher-notification dnone" />
                  <div id="app-chat-container" className="pusher-container"><div id="app-bot-bot" data-fromtype="bot" data-fromid="bot" data-idconversation="null" data-id-question={1} data-id-flow="null" data-id-categ="null" data-id-sector="null" className="app-chat-container-top">
                      <div className="chat-launcher app-chat-launcher ">
                        <div className="chat-launcher-button ">
                          <img className="app-chat-avatar" src="https://www.mariages.net/assets/img/chatbot/avatar.png" width={50} height={50} alt="" />
                          <span className="app-chat-num-messages chat-message-count dnone" style={{display: 'inline'}}>1</span>
                        </div>
                        <div className="chat-launcher-preview">
                          <div className="app-conversation-summary">Bonjour, je suis Sara, votre assistante virtuelle. Puis-je vous aider dans vos préparatifs de mariage ?</div>
                        </div>
                      </div>
                      <div className="chat-conversation app-chat-conversation" data-initconversation={0}>
                        <div className="chat-header">
                          <div className="app-controls-menu chat-controls chat-controls-left">
                            <div className>
                            </div>
                          </div>
                          <span className="app-chat-name chat-name">Sara</span>
                          <div className="chat-controls chat-controls-left">
                            <span className="chat-control-btn app-chat-refresh">
                              <i className="icon icon-refresh-chat" />
                            </span>
                          </div>
                          <div className="chat-controls chat-controls-right">
                            <span className="chat-control-btn app-chat-min">
                              <span className="chat-ui chat-min" />
                            </span>
                            <span className="chat-control-btn app-chat-close">
                              <span className="chat-ui chat-close" />
                            </span>
                          </div>
                        </div>
                        <div className="app-chat-history chat-history">
                          <div className="app-chat-conversations chat-messages" />
                        </div>
                        <div className="app-mobile-nel-scrollfix chat-messages chat-messages--chatbot app-scroll-calculate">
                          <div className="app-conversation-parts chat-messages__inner "><div className="chat-message-welcome">
                              <p className="title">Conseillère Mariages.net</p>
                              <p>Je tiens à vous aider à choisir le prestataire le mieux adapté au mariage de vos rêves. Un service gratuit pour que vous embauchiez toujours les meilleurs professionnels de votre région. Demandez-nous conseil !</p>
                              <div className="chat-legal">
                                <a className="app-pusher-link" href="https://www.mariages.net/mentions-legales.php#concierge">Conditions d'utilisation</a><a className="app-pusher-link ml10" href="https://www.mariages.net/legal/privacy.php">Politique de confidentialité</a>
                              </div>
                            </div><div className="chat__separator"><span>12/08/2022</span></div><div className="app-income-message message-income">
                              <div className="chat-message message-income">
                                <div className="chat-message-avatar">
                                  <img src="https://www.mariages.net/assets/img/chatbot/avatar.png" width={50} height={50} alt="Sara" />
                                </div>
                                <div className="chat-message-globe">
                                  Bonjour, je suis Sara, votre assistante virtuelle. Puis-je vous aider dans vos préparatifs de mariage ?
                                  <div className="chat__timestamp">11:11</div>
                                </div>
                              </div>
                              <div className="app-chat-reply-template"><div className="app-chat-qr-container chatQuickReply"><span className="chatQuickReply__input app-chat-qr" data-type="null" data-reply-text="Oui">Oui</span><span className="chatQuickReply__input app-chat-qr" data-type="null" data-reply-text="Non, merci">Non, merci</span></div></div>
                            </div>
                          </div>
                        </div>
                        <div className="composer-container chat-message-send app-chat-message-send">
                          <div className="app-chat-writing-alert">Sara est en train d'écrire...</div>
                          <form method="POST" className="app-chat-form-chatbot" data-type="user" data-id={6159171}>
                            <div className="composer-textarea-container flex-va-center flex-justify-space-between">
                              <input className="app-no-tiny app-chat-textarea chat-message-send__messageInput" name="comment" placeholder="Écrivez votre message..." autoComplete="off" readOnly="readonly" />
                              <div className="chat-submit"> <span className="app-chat-form-submit chat-message-send__messageSubmit chat-message-send__messageSubmit--disabled"><i className="icon icon-send" /></span></div>
                            </div>
                          </form>
                        </div>
                      </div></div></div>
                  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" style={{display: 'none'}}>
                    <symbol>
                      <svg id="svg-_common-heart" viewBox="0 0 34 30"><path d="M26.232.086C30.653.716 34 4.68 34 9.858c0 1.41-.371 2.884-1.073 4.412-1.35 2.937-3.878 6.013-7.247 9.134a68.921 68.921 0 01-5.582 4.625c-.665.496-1.284.941-1.84 1.328-.335.233-.577.396-.71.483a1 1 0 01-1.097 0c-.132-.087-.374-.25-.71-.483a67.429 67.429 0 01-1.84-1.328 68.921 68.921 0 01-5.58-4.625c-3.37-3.121-5.898-6.197-7.248-9.134C.371 12.742 0 11.268 0 9.858 0 4.681 3.347.716 7.768.086 11.6-.46 15.091 1.616 17 5.778 18.91 1.617 22.4-.46 26.232.086z" fillRule="nonzero" /></svg><svg id="svg-_common-angleDown" viewBox="0 0 18 18"><path d="M16.9 5.6c-.2-.2-.5-.2-.7 0L9 12.8 1.8 5.6c-.2-.2-.5-.2-.7 0s-.2.5 0 .7l7.5 7.5v.1c.1.1.3.1.4.1.1 0 .3 0 .4-.1v-.1l7.5-7.5c.2-.2.2-.5 0-.7z" /></svg>  </symbol>
                  </svg>
                  <div id="survicate-box"><div className="sv-box-child" /></div><div id="onetrust-consent-sdk"><div className="onetrust-pc-dark-filter ot-hide ot-fade-in" /><div id="onetrust-pc-sdk" className="otPcCenter ot-hide ot-fade-in" aria-modal="true" role="alertdialog" lang="fr-FR" aria-label="Ne pas vendre mes données personnelles">{/* Close Button */}<div className="ot-pc-header">{/* Logo Tag */}<div className="ot-pc-logo" role="img" aria-label="Logo de la société" style={{backgroundImage: 'url("https://cdn.cookielaw.org/logos/4708a190-b1e8-4c46-8bde-12838e4eaa32/006bd2e8-872d-4227-861d-cf26c0f64c1c/fc7601b1-1544-4023-8371-18b980ec8c87/logo_tkww.png")', backgroundPosition: 'left'}} /><button id="close-pc-btn-handler" className="ot-close-icon" aria-label="Fermer" /></div>{/* Close Button */}<div id="ot-pc-content" className="ot-pc-scrollbar"><h2 id="ot-pc-title">Ne pas vendre mes données personnelles</h2><div id="ot-pc-desc">Lorsque vous visitez notre site Web, nous stockons des cookies sur votre navigateur pour collecter des informations. Ces informations collectées peuvent être liées à vous, à vos préférences ou à votre appareil, et sont principalement utilisées pour faire fonctionner le site comme vous le souhaitez et pour fournir une expérience Web plus personnalisée. Toutefois, vous pouvez choisir de ne pas autoriser certains types de cookies, ce qui peut avoir un impact sur votre expérience du site et des services que nous offrons. Cliquez sur les différents titres de catégories pour en savoir plus et modifier nos paramètres par défaut selon vos préférences. Vous ne pouvez pas vous désinscrire de nos Cookies Strictement Nécessaires internes lorsqu'ils sont déployés afin d'assurer le bon fonctionnement de notre site Web (tels que pour afficher le bandeau des cookies, pour vous connecter à votre compte, pour rediriger votre session lorsque vous quittez votre compte, etc.) Pour plus d'Informations sur les cookies internes et de tiers utilisés, veuillez consulter le lien suivant.
                          <br /><a href="https://cookiepedia.co.uk/giving-consent-to-cookies" className="privacy-notice-link" rel="noopener" target="_blank" aria-label="Pour en savoir plus sur la protection de votre vie privée, s'ouvre dans un nouvel onglet">Plus d’informations</a></div><button id="accept-recommended-btn-handler">Tout autoriser</button><section className="ot-sdk-row ot-cat-grp"><h3 id="ot-category-title">Gérer les préférences de consentement</h3><div className="ot-accordion-layout ot-cat-item" data-optanongroupid="C0001"><button aria-expanded="false" ot-accordion="true" aria-controls="ot-desc-id-C0001" aria-labelledby="ot-header-id-C0001" />{/* Accordion header */}<div className="ot-acc-hdr ot-always-active-group"><div className="ot-plus-minus"><span /><span /></div><h4 className="ot-cat-header" id="ot-header-id-C0001">Cookies strictement nécessaires</h4><div className="ot-always-active">Toujours actif</div></div>{/* accordion detail */}<div className="ot-acc-grpcntr ot-acc-txt"><p className="ot-acc-grpdesc ot-category-desc" id="ot-desc-id-C0001">Ces cookies sont strictement nécessaires pour le fonctionnement du Site Web. Elles permettent à l'Utilisateur de naviguer sur le Site ainsi que d'utiliser les différentes options et services que le Site leur offre. Sans elles, certaines fonctionnalités du Site Web ne fonctionneraient pas correctement.</p></div></div><div className="ot-accordion-layout ot-cat-item" data-optanongroupid="SPD_BG"><button aria-expanded="false" ot-accordion="true" aria-controls="ot-desc-id-SPD_BG" aria-labelledby="ot-header-id-SPD_BG" />{/* Accordion header */}<div className="ot-acc-hdr"><div className="ot-plus-minus"><span /><span /></div><h4 className="ot-cat-header" id="ot-header-id-SPD_BG">Vente de données personnelles</h4><div className="ot-tgl"><input type="checkbox" name="ot-group-id-SPD_BG" id="ot-group-id-SPD_BG" aria-checked="true" role="switch" className="category-switch-handler" data-optanongroupid="SPD_BG" defaultChecked aria-labelledby="ot-header-id-SPD_BG" /> <label className="ot-switch" htmlFor="ot-group-id-SPD_BG"><span className="ot-switch-nob" /> <span className="ot-label-txt">Vente de données personnelles</span></label> </div></div>{/* accordion detail */}<div className="ot-acc-grpcntr ot-acc-txt"><p className="ot-acc-grpdesc ot-category-desc" id="ot-desc-id-SPD_BG">En vertu du CCPA de Californie, vous avez le droit de refuser que vos informations personnelles soient vendues à des tierces parties. Ces cookies permettent de recueillir des informations à des fins d’analyses et de statistiques et pour personnaliser les publicités ciblées que vous recevez. Utilisez ce bouton pour refuser la vente de vos informations personnelles. Si vous décidez de refuser la vente de vos données, vous ne recevrez pas de publicités personnalisées et nous ne vendrons pas vos informations personnelles à aucun tiers. Veuillez noter que, si vous le désirez, vous pouvez contacter notre service juridique pour obtenir plus de détails sur vos droits en tant que consommateur de Californie. Pour cela, cliquez sur le lien Exercer ses droits. <br /><br />Si vous avez activé les contrôles de sécurité dans votre navigateur (avec un plug-in par exemple), nous devons considérer que votre opposition à la vente de vos données est valide. Nous ne pourrons donc pas suivre votre activité en ligne. Cela est susceptible d’affecter notre capacité à vous proposer des publicités ciblées selon vos préférences.</p><div className="ot-subgrp-cntr"><ul className="ot-subgrps"><li className="ot-subgrp" data-optanongroupid="C0002"><h5>Cookies d'analyse</h5><div className="ot-tgl-cntr ot-subgrp-tgl"><div className="ot-tgl ot-hide-tgl"><input type="checkbox" name="switch" id="ot-sub-group-id-C0002" aria-checked="false" role="switch" data-optanongroupid="C0002" className="cookie-subgroup-handler" aria-label="Cookies d'analyse" aria-hidden="true" /> <label className="ot-switch" htmlFor="ot-sub-group-id-C0002"><span className="ot-switch-nob" /> <span className="ot-label-txt">Switch Label</span></label> <span className="ot-label-status">label</span></div></div><p className="ot-subgrp-desc">Ces cookies tiers stockent des informations sur la manière dont les Utilisateurs interagissent avec le contenu du Site Web, leur provenance, le navigateur qu'ils utilisent et la durée de leur visite sur chaque page, entre d’autres. Elles sont utilisées pour mesurer les audiences et produire des statistiques.</p></li></ul></div><div className="ot-subgrp-cntr"><ul className="ot-subgrps"><li className="ot-subgrp" data-optanongroupid="C0005"><h5>Cookies « réseaux sociaux »</h5><div className="ot-tgl-cntr ot-subgrp-tgl"><div className="ot-tgl ot-hide-tgl"><input type="checkbox" name="switch" id="ot-sub-group-id-C0005" aria-checked="false" role="switch" data-optanongroupid="C0005" className="cookie-subgroup-handler" aria-label="Cookies « réseaux sociaux »" aria-hidden="true" /> <label className="ot-switch" htmlFor="ot-sub-group-id-C0005"><span className="ot-switch-nob" /> <span className="ot-label-txt">Switch Label</span></label> <span className="ot-label-status">label</span></div></div><p className="ot-subgrp-desc">Ces cookies tiers permettent aux Utilisateurs de partager du contenu à travers les réseaux sociaux. Ces cookies peuvent suivre la trace du navigateur de l'Utilisateur sur d'autres sites web et créer un profil des intérêts de l'Utilisateur, ce qui peut avoir une incidence sur le contenu montré à l'Utilisateur sur les autres sites web visités.</p></li></ul></div><div className="ot-subgrp-cntr"><ul className="ot-subgrps"><li className="ot-subgrp" data-optanongroupid="C0004"><h5>Cookies pour une publicité personnalisée</h5><div className="ot-tgl-cntr ot-subgrp-tgl"><div className="ot-tgl ot-hide-tgl"><input type="checkbox" name="switch" id="ot-sub-group-id-C0004" aria-checked="false" role="switch" data-optanongroupid="C0004" className="cookie-subgroup-handler" aria-label="Cookies pour une publicité personnalisée" aria-hidden="true" /> <label className="ot-switch" htmlFor="ot-sub-group-id-C0004"><span className="ot-switch-nob" /> <span className="ot-label-txt">Switch Label</span></label> <span className="ot-label-status">label</span></div></div><p className="ot-subgrp-desc">Ces cookies tiers stockent les informations comportementales de l'Utilisateur, obtenues à partir de l'analyse de ses habitudes de navigation, et nous permettent ou permettent à des tiers de lui montrer de la publicité en fonction du comportement et des intérêts de l'Utilisateur, ou de suivre le comportement et l'efficacité des campagnes publicitaires.</p></li></ul></div></div></div>{/* Groups sections starts */}{/* Group section ends */}{/* Accordion Group section starts */}{/* Accordion Group section ends */}</section></div><section id="ot-pc-lst" className="ot-hide ot-hosts-ui ot-pc-scrollbar"><div id="ot-pc-hdr"><div id="ot-lst-title"><button className="ot-link-btn back-btn-handler" aria-label="Back"><svg id="ot-back-arw" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 444.531 444.531" xmlSpace="preserve"><title>Back Button</title><g><path fill="#656565" d="M213.13,222.409L351.88,83.653c7.05-7.043,10.567-15.657,10.567-25.841c0-10.183-3.518-18.793-10.567-25.835
                              l-21.409-21.416C323.432,3.521,314.817,0,304.637,0s-18.791,3.521-25.841,10.561L92.649,196.425
                              c-7.044,7.043-10.566,15.656-10.566,25.841s3.521,18.791,10.566,25.837l186.146,185.864c7.05,7.043,15.66,10.564,25.841,10.564
                              s18.795-3.521,25.834-10.564l21.409-21.412c7.05-7.039,10.567-15.604,10.567-25.697c0-10.085-3.518-18.746-10.567-25.978
                              L213.13,222.409z" /></g></svg></button><h3>Performance Cookies</h3></div><div className="ot-lst-subhdr"><div className="ot-search-cntr"><p role="status" className="ot-scrn-rdr" /><label htmlFor="vendor-search-handler" className="ot-scrn-rdr" /> <input id="vendor-search-handler" type="text" name="vendor-search-handler" /> <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 -30 110 110" aria-hidden="true"><title>Search Icon</title><path fill="#2e3644" d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23
                      s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92
                      c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17
                      s-17-7.626-17-17S14.61,6,23.984,6z" /></svg></div><div className="ot-fltr-cntr"><button id="filter-btn-handler" aria-label="Filter" aria-haspopup="true"><svg role="presentation" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 402.577 402.577" xmlSpace="preserve"><title>Filter Icon</title><g><path fill="#fff" d="M400.858,11.427c-3.241-7.421-8.85-11.132-16.854-11.136H18.564c-7.993,0-13.61,3.715-16.846,11.136
                c-3.234,7.801-1.903,14.467,3.999,19.985l140.757,140.753v138.755c0,4.955,1.809,9.232,5.424,12.854l73.085,73.083
                c3.429,3.614,7.71,5.428,12.851,5.428c2.282,0,4.66-0.479,7.135-1.43c7.426-3.238,11.14-8.851,11.14-16.845V172.166L396.861,31.413
                C402.765,25.895,404.093,19.231,400.858,11.427z" /></g></svg></button></div><div id="ot-anchor" /><section id="ot-fltr-modal"><div id="ot-fltr-cnt"><button id="clear-filters-handler">Clear</button><div className="ot-fltr-scrlcnt ot-pc-scrollbar"><div className="ot-fltr-opts"><div className="ot-fltr-opt"><div className="ot-chkbox"><input id="chkbox-id" type="checkbox" aria-checked="false" className="category-filter-handler" /> <label htmlFor="chkbox-id"><span className="ot-label-txt">checkbox label</span></label> <span className="ot-label-status">label</span></div></div></div><div className="ot-fltr-btns"><button id="filter-apply-handler">Apply</button> <button id="filter-cancel-handler">Cancel</button></div></div></div></section></div></div><section id="ot-lst-cnt" className="ot-host-cnt ot-pc-scrollbar"><div id="ot-sel-blk"><div className="ot-sel-all"><div className="ot-sel-all-hdr"><span className="ot-consent-hdr">Consent</span> <span className="ot-li-hdr">Leg.Interest</span></div><div className="ot-sel-all-chkbox"><div className="ot-chkbox" id="ot-selall-hostcntr"><input id="select-all-hosts-groups-handler" type="checkbox" aria-checked="false" /> <label htmlFor="select-all-hosts-groups-handler"><span className="ot-label-txt">checkbox label</span></label> <span className="ot-label-status">label</span></div><div className="ot-chkbox" id="ot-selall-vencntr"><input id="select-all-vendor-groups-handler" type="checkbox" aria-checked="false" /> <label htmlFor="select-all-vendor-groups-handler"><span className="ot-label-txt">checkbox label</span></label> <span className="ot-label-status">label</span></div><div className="ot-chkbox" id="ot-selall-licntr"><input id="select-all-vendor-leg-handler" type="checkbox" aria-checked="false" /> <label htmlFor="select-all-vendor-leg-handler"><span className="ot-label-txt">checkbox label</span></label> <span className="ot-label-status">label</span></div></div></div></div><div className="ot-sdk-row"><div className="ot-sdk-column" /></div></section></section><div className="ot-pc-footer"><div className="ot-btn-container"> <button className="save-preference-btn-handler onetrust-close-btn-handler">Confirmer la sélection</button></div>{/* Footer logo */}<div className="ot-pc-footer-logo"><a href="https://www.onetrust.com/products/cookie-consent/" target="_blank" rel="noopener noreferrer" style={{backgroundImage: 'url("https://cdn.cookielaw.org/logos/static/poweredBy_ot_logo.svg")'}} aria-label="Powered by OneTrust S'ouvre dans un nouvel onglet" /></div></div>{/* Cookie subgroup container */}{/* Vendor list link */}{/* Cookie lost link */}{/* Toggle HTML element */}{/* Checkbox HTML */}{/* plus minus*/}{/* Arrow SVG element */}{/* Accordion basic element */}<span className="ot-scrn-rdr" aria-atomic="true" aria-live="polite" /><iframe className="ot-text-resize" title="onetrust-text-resize" style={{position: 'absolute', top: '-50000px', width: '100em'}} aria-hidden="true" /></div></div>
                </div>
          


 
   
      )}
export default Accueil