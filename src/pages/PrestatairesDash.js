
import React, { useState, useEffect } from 'react';



export default function PrestatairesDash() {
      return (
        <div>
          <a className="layoutSkipMain" href="#layoutMain">Aller au contenu principal</a>
          
          <main id="layoutMain">
     
            <div className="wrapper app-tools-container-vendors" data-is-tools-vendors={1} data-cookie-layer-vendor="vtp">
              <div className="tools-vendors-header">
                <div className="pure-g mb10">
                  <div className="pure-u-2-3">
                    <h1 className="tools-title">Mes Prestataires</h1>
                  </div>
                </div>
                <div className="vendors-headerCount">
                  <div className="tools-vendors-header-item">
                    <p className="vendors-headerCount-total block">
                      0 sur 20 engagés
                    </p>
                    <div className="tools-boxProgress-container">
                      <div className="tools-boxProgress-progress">
                        <div style={{width: '0%'}} />
                      </div>
                    </div>
                  </div>
                  <div className="tools-vendors-header-item mb20">
                    <ul className="tools-toggle">
                      <a role="button" href="/tools/Vendors" className="tools-toggle-item active">
                        <i className="icon icon-fav-on-border mr10 fixicon" />
                        Enregistrés <span className="count">2</span>
                      </a>
                      <a role="button" href="/tools/VendorsBooked" className="tools-toggle-item">
                        <i className="icon icon-double-check mr10 fixicon" />
                        Réservés <span className="count">0</span>
                      </a>
                    </ul>
                  </div>
                  <div className="tools-vendors-header-item text-right">
                    <button className="btn-flat red app-add-vendor-modal ml40 mb15">
                      <i className="icon-tools icon-tools-plus-white icon-left" />
                      Ajouter prestataire
                    </button>
                  </div>
                </div>
              </div>
              <div className="pure-g vendors-categBox">
                <div className="pure-u-1-4 vendors-categBox-separator vendors-categBox-separator-cover">
                  <div className="vendors-categBox-item app-link" data-href="/tools/VendorsCateg?id_categ=16">
                    <i className="svgIcon svgIcon__categReception vendors-categBox-item-icon"><svg viewBox="0 0 54 41">
                        <path d="M4 19.421l-2.401 1.795A1 1 0 01.4 19.614L25.868.584a1 1 0 01.751-.324 1 1 0 01.751.324l25.467 19.03a1 1 0 01-1.198 1.602L48 18.496V41H4V19.421zm2-1.494V39h12V21h16v18h12V17.002L26.619 2.519 6 17.927zM32 39V23H20v16h12z" fillRule="nonzero" /></svg></i>
                    <p className="vendors-categBox-title">Réception</p>
                    <a className="vendors-categBox-button app-icon-hover" data-icon-old="icon-tools-search" data-icon-new="icon-tools-search-white" href="https://www.mariages.net/reception/paris">
                      <i className="icon-tools icon-tools-search mr5" />
                      Rechercher
                    </a>
                  </div>
                </div>
                <div className="pure-u-1-4 vendors-categBox-separator vendors-categBox-separator-cover">
                  <div className="vendors-categBox-item app-link" data-href="/tools/VendorsCateg?id_categ=27">
                    <i className="svgIcon svgIcon__categCatering vendors-categBox-item-icon"><svg viewBox="0 0 50 33">
                        <path d="M39.678 28.996v-.004c-.216.01-.431.01-.647.003V29H.995L1 27.995c.063-11.97 8.762-21.843 20.165-23.686A2.796 2.796 0 0121 3.374C21 1.476 22.864 0 25 0s4 1.476 4 3.374c0 .308-.054.614-.155.907a24.195 24.195 0 0117.82 12.85 10.076 10.076 0 012.385-.102l.856.065.065.856a10.398 10.398 0 01-1.366 5.945c.258 1.483.395 2.82.395 4.105v1H39.678v-.004zm5.008-11.331A22.181 22.181 0 0025.156 6C13.29 5.936 3.611 15.238 3.028 27H33.96a8.646 8.646 0 01-.497-.459c-1.784-1.783-2.66-4.2-2.426-6.606l.08-.82.82-.079c2.411-.23 4.831.642 6.63 2.437.271.284.522.583.75.896a10.06 10.06 0 011.743-2.368 10.614 10.614 0 013.626-2.336zM46.9 26.13a9.93 9.93 0 01-1.019.869h1.09c-.017-.284-.04-.573-.07-.869zM25.054 4h1.69c.163-.2.256-.429.256-.626C27 2.696 26.12 2 25 2s-2 .696-2 1.374c0 .197.093.426.257.626h1.797zm9.823 21.127c1.135 1.133 2.597 1.781 4.104 1.864a6.713 6.713 0 00-1.843-4.118c-1.141-1.14-2.614-1.788-4.13-1.865.077 1.51.727 2.978 1.87 4.119zm7.592-3.707a7.97 7.97 0 00-1.929 3.183c.27.722.42 1.483.465 2.3 1.749-.26 3.346-1.038 4.582-2.286 1.491-1.554 2.334-3.57 2.408-5.612-2.033.073-3.985.91-5.526 2.415zM0 33v-2h50v2H0z" fillRule="nonzero" /></svg></i>
                    <p className="vendors-categBox-title">Traiteur</p>
                    <a className="vendors-categBox-button app-icon-hover" data-icon-old="icon-tools-search" data-icon-new="icon-tools-search-white" href="https://www.mariages.net/traiteur-mariage/paris">
                      <i className="icon-tools icon-tools-search mr5" />
                      Rechercher
                    </a>
                  </div>
                </div>
                <div className="pure-u-1-4 vendors-categBox-separator vendors-categBox-separator-cover">
                  <div className="vendors-categBox-item app-link" data-href="/tools/VendorsCateg?id_categ=21">
                    <i className="svgIcon svgIcon__categPhoto vendors-categBox-item-icon"><svg viewBox="0 0 54 40">
                        <path d="M14.628 17.998H2V37.47c0 .303.236.53.592.53h48.816c.356 0 .592-.227.592-.53V17.998H39.372A12.99 12.99 0 0140 22c0 7.18-5.82 13-13 13s-13-5.82-13-13c0-1.397.22-2.742.628-4.002zm.838-2A12.999 12.999 0 0127 9c5.015 0 9.366 2.84 11.534 6.998H52V6.53c0-.303-.236-.53-.592-.53H2.592C2.236 6 2 6.227 2 6.53v9.468zM7 4V2.292C7 1.02 8.06 0 9.344 0h6.312C16.94 0 18 1.02 18 2.292V4h33.408C52.85 4 54 5.104 54 6.53v30.94c0 1.426-1.149 2.53-2.592 2.53H2.592C1.15 40 0 38.896 0 37.47V6.53C0 5.104 1.149 4 2.592 4zm2 0h7V2.292c0-.15-.148-.292-.344-.292H9.344C9.148 2 9 2.142 9 2.292zm31 10a1 1 0 01-1-1V9.032a1 1 0 011-1h8a1 1 0 011 1V13a1 1 0 01-1 1zm7-2v-1.968h-6V12zm-20-1c-6.075 0-11 4.925-11 11s4.925 11 11 11 11-4.925 11-11-4.925-11-11-11zm.029 4c3.88 0 7.029 3.133 7.029 7 0 3.868-3.148 7-7.03 7C23.149 29 20 25.868 20 22c0-3.867 3.148-7 7.029-7zm0 2C24.25 17 22 19.24 22 22s2.25 5 5.029 5c2.778 0 5.029-2.24 5.029-5s-2.25-5-5.03-5z" /></svg></i>
                    <p className="vendors-categBox-title">Photo</p>
                    <a className="vendors-categBox-button app-icon-hover" data-icon-old="icon-tools-search" data-icon-new="icon-tools-search-white" href="https://www.mariages.net/photo-mariage/paris">
                      <i className="icon-tools mr5 icon-tools-search" />
                      Rechercher
                    </a>
                  </div>
                </div>
                <div className="pure-u-1-4 vendors-categBox-separator vendors-categBox-separator-cover">
                  <div className="vendors-categBox-item vendors-categBox-item-img booked app-link" data-href="/tools/VendorsCateg?id_categ=163" style={{background: 'url(https://cdn0.mariages.net/emp/fotos/5/5/3/1/t20_young-couple-in-a-wedding-ceremony-at-the-beach-2021-08-27-00-05-52-utc_3_265531-165115712480998.jpg)no-repeat scroll 50% 50% transparent', backgroundSize: 'cover'}} />
                  <div className="vendors-categBox-content">
                    <i className="svgIcon svgIcon__categVideo vendors-categBox-item-icon"><svg viewBox="0 0 54 47">
                        <path d="M37.727 44.2V24.4a.873.873 0 00-.865-.871H4.586a.873.873 0 00-.864.871v19.8c0 .478.392.871.864.871h32.276a.873.873 0 00.865-.871zm1.857 0a2.73 2.73 0 01-2.722 2.729H4.586A2.73 2.73 0 011.865 44.2V24.4a2.73 2.73 0 012.721-2.729h32.276a2.73 2.73 0 012.722 2.729v19.8zm-29.54-13.471a.929.929 0 010-1.858h22.609a.929.929 0 010 1.858h-22.61zM19.86 10c0 5.482-4.43 9.929-9.894 9.929C4.5 19.929.07 15.482.07 10S4.501.071 9.966.071C15.43.071 19.86 4.518 19.86 10zm-1.858 0c0-4.458-3.6-8.071-8.036-8.071-4.438 0-8.037 3.613-8.037 8.071s3.6 8.071 8.037 8.071c4.437 0 8.036-3.613 8.036-8.071zm17.996 3.6c0 3.495-2.824 6.329-6.308 6.329-3.485 0-6.308-2.834-6.308-6.329 0-3.495 2.823-6.329 6.308-6.329 3.484 0 6.308 2.834 6.308 6.329zm-1.858 0c0-2.47-1.993-4.471-4.45-4.471-2.458 0-4.451 2-4.451 4.471 0 2.47 1.993 4.471 4.45 4.471 2.458 0 4.451-2 4.451-4.471zm4.157 24.986a.929.929 0 11.717-1.713l12.689 5.308c.297.124.368.077.368-.25V27.374c0-.328-.071-.376-.368-.252l-12.69 5.304a.929.929 0 11-.716-1.713l12.69-5.305c1.522-.636 2.942.315 2.942 1.966v14.557c0 1.651-1.42 2.6-2.942 1.963l-12.69-5.308z" fillRule="nonzero" /></svg></i>
                    <p className="vendors-categBox-title">Vidéo</p>
                    <span className="vendors-categBox-button black"><i className="icon-tools icon-tools-heart-white mr5" />1</span>
                  </div>
                </div>
                <div className="pure-u-1-4 vendors-categBox-separator vendors-categBox-separator-cover">
                  <div className="vendors-categBox-item app-link" data-href="/tools/VendorsCateg?id_categ=17">
                    <i className="svgIcon svgIcon__categBand vendors-categBox-item-icon"><svg viewBox="0 0 55 41">
                        <path d="M18.635 4.636a9.002 9.002 0 000 12.728 8.992 8.992 0 0012.722 0 9.004 9.004 0 000-12.729 8.994 8.994 0 00-12.722 0zm14.137-1.414c4.293 4.296 4.293 11.26 0 15.556-4.294 4.296-11.257 4.296-15.551 0-4.295-4.297-4.295-11.26 0-15.556 4.294-4.296 11.257-4.296 15.55 0zM45 26v-3.465a4 4 0 11-4 6.93 4 4 0 014-6.93V6.558l9.014 3.372-.145 7.075L47 14.195V26h-2a2 2 0 10-3.999-.002A2 2 0 0045 26zM2.877 34.27a8.29 8.29 0 00-.229.404c-.398.75-.636 1.485-.648 2.12-.015.903.42 1.569 1.584 2.066 1.248.532 1.547.393 7.754-3.224 4.299-2.505 7.515-3.7 11.178-3.634 3.042.054 5.307 1.278 6.849 3.267.942 1.217 1.43 2.43 1.613 3.284l-1.956.42a5.104 5.104 0 00-.244-.738 7.269 7.269 0 00-.994-1.74c-1.183-1.528-2.891-2.45-5.303-2.493-3.21-.058-6.127 1.026-10.136 3.362-.529.308-2.278 1.356-2.565 1.524-.974.573-1.702.97-2.387 1.288-1.83.852-3.28 1.084-4.593.523-1.912-.815-2.83-2.22-2.8-3.94.018-1 .349-2.018.881-3.022.21-.397.421-.736.605-1.003A4.153 4.153 0 011 30.78v-.297c0-.97.34-1.91.962-2.663l12.776-15.457 1.541 1.274L3.503 29.095A2.18 2.18 0 003 30.483v.297c0 1.132.879 2.088 2.048 2.207a2.334 2.334 0 001.702-.499l15.622-12.595 1.256 1.557L8.005 34.045a4.333 4.333 0 01-3.163.932 4.314 4.314 0 01-1.965-.706zM15.274 2.689l1.452-1.376 18 19-1.452 1.376-18-19zM51.929 14.05l.057-2.745L47 9.442v2.592l4.93 2.017z" fillRule="nonzero" /></svg></i>
                    <p className="vendors-categBox-title">Musique</p>
                    <a className="vendors-categBox-button app-icon-hover" data-icon-old="icon-tools-search" data-icon-new="icon-tools-search-white" href="https://www.mariages.net/musique-mariage/paris">
                      <i className="icon-tools icon-tools-search mr5" />
                      Rechercher
                    </a>
                  </div>
                </div>
                <div className="pure-u-1-4 vendors-categBox-separator vendors-categBox-separator-cover">
                  <div className="vendors-categBox-item app-link" data-href="/tools/VendorsCateg?id_categ=22">
                    <i className="svgIcon svgIcon__categRental vendors-categBox-item-icon"><svg viewBox="0 0 56 31">
                        <path d="M39.294 6.146l2.294 3.477c.035.053.064.108.088.164h9.587A4.744 4.744 0 0156 14.525v8.968a4.744 4.744 0 01-4.738 4.738h-2.31c-.484 0-.93-.172-1.276-.46a5.002 5.002 0 01-9.31.112c-.322.22-.71.348-1.128.348H20.577C19.803 29.947 18.052 31 16.001 31c-2.048 0-3.8-1.054-4.576-2.769H3.321C1.467 28.185 0 26.671 0 24.86c0-.226.023-.451.075-.721l.11-.524.11-.493c1.408-6.564 3.062-10.318 6.47-14.145C11.992 3.1 19.241-.001 27.726-.001h10.009a2.667 2.667 0 012.664 2.664c0 1.409-.367 2.726-1.105 3.483zm-1.958.663H33.99v2.978h5.31L37.335 6.81zm13.927 19.422A2.744 2.744 0 0054 23.493v-8.968a2.744 2.744 0 00-2.738-2.738H31.99V4.81h5.744c.083-.006.214-.133.36-.476.191-.444.304-1.065.304-1.67 0-.364-.3-.664-.664-.664H27.727C19.8 2 13.097 4.866 8.26 10.305c-3.149 3.537-4.667 6.983-6.01 13.241l-.108.49-.105.497a1.703 1.703 0 00-.036.326c0 .73.604 1.355 1.29 1.372h33.948a5.854 5.854 0 015.858-5.638 5.853 5.853 0 015.856 5.638h2.31zM43 22v1a3 3 0 100 6.001A3 3 0 0043 23v-1zm-29.084 6.292c.528.45 1.252.708 2.084.708.842 0 1.572-.262 2.1-.72a153.4 153.4 0 01-2.1.014c-.692 0-1.35 0-2.084-.002zm11.867-6.425a1 1 0 11-1.793.888 8.363 8.363 0 00-7.5-4.66 8.363 8.363 0 00-7.5 4.66 1 1 0 01-1.792-.888 10.362 10.362 0 019.293-5.772c3.98 0 7.556 2.267 9.292 5.772z" fillRule="nonzero" /></svg></i>
                    <p className="vendors-categBox-title">Voiture</p>
                    <a className="vendors-categBox-button app-icon-hover" data-icon-old="icon-tools-search" data-icon-new="icon-tools-search-white" href="https://www.mariages.net/voiture-mariage/paris">
                      <i className="icon-tools icon-tools-search mr5" />
                      Rechercher
                    </a>
                  </div>
                </div>
                <div className="pure-u-1-4 vendors-categBox-separator vendors-categBox-separator-cover">
                  <div className="vendors-categBox-item app-link" data-href="/tools/VendorsCateg?id_categ=159">
                    <i className="svgIcon svgIcon__categTransport vendors-categBox-item-icon"><svg viewBox="0 0 55 36">
                        <path d="M2 25.023c.05-.008.1-.012.153-.012h7.914a7.547 7.547 0 016.779-4.224 7.55 7.55 0 016.719 4.101h9.593a7.55 7.55 0 016.72-4.101 7.547 7.547 0 016.716 4.101h6.084v-6.497c0-.73-.149-1.447-.438-2.11L46.795 3.718A2.858 2.858 0 0044.174 2H3.138A1.14 1.14 0 002 3.139v21.884zM2 27v1.333c0 .665.54 1.206 1.206 1.206h6.187a7.612 7.612 0 01.02-2.528h-7.26c-.052 0-.103-.004-.153-.011zm8.009 4.539H3.206A3.206 3.206 0 010 28.333V3.139a3.14 3.14 0 013.138-3.14h41.036a4.859 4.859 0 014.455 2.924l5.446 12.56a7.28 7.28 0 01.603 2.908v9.846a3.304 3.304 0 01-3.302 3.302h-4.662a7.547 7.547 0 01-6.837 4.346 7.55 7.55 0 01-6.838-4.346h-9.354a7.55 7.55 0 01-6.839 4.346 7.547 7.547 0 01-6.837-4.346zm37.32-2h4.047c.718 0 1.302-.585 1.302-1.302v-1.349h-5.391a7.59 7.59 0 01.043 2.65zm-35.736.588c.023.049.04.1.055.152a5.55 5.55 0 0010.423-3.82.994.994 0 01-.166-.41 5.551 5.551 0 00-10.312 4.078zm12.665-3.239a7.585 7.585 0 01.043 2.65h8.122a7.607 7.607 0 01.043-2.65h-8.208zm9.926-19.885H22.54v5.524h11.643V7.003zm2 .041v5.767l1.08.813 1.147.86.514.386c.116.086.553.23.7.23h6.027a2831.413 2831.413 0 00-1.59-3.625l-.028-.062A660.403 660.403 0 0042.524 8c-.176-.392-.32-.712-.432-.957h-5.908zm-15.643-.04H9.03v5.523h11.512V7.003zm14.504 7.453v.07H7.03V5.003h28.016v.041h7.674c.97.514.97.514.896.548l.063.123c.039.08.091.191.158.335.123.266.295.647.513 1.134.383.855.899 2.022 1.516 3.423l.027.063a1914.415 1914.415 0 012.205 5.03l.612 1.4h-9.084c-.576 0-1.431-.282-1.895-.627l-.518-.388a1306.421 1306.421 0 01-2.167-1.628zM19.071 28.335a2.222 2.222 0 01-2.224 2.222 2.222 2.222 0 110-4.444c1.228 0 2.224.994 2.224 2.222zm-2 0c0-.122-.1-.222-.224-.222a.222.222 0 100 .444c.124 0 .224-.099.224-.222zm22.806-5.548a5.549 5.549 0 10-.002 11.097 5.549 5.549 0 00.002-11.097zm2.223 5.548a2.224 2.224 0 01-4.448 0 2.224 2.224 0 014.448 0zm-2 0a.22.22 0 00-.222-.222c-.126 0-.226.1-.226.222s.1.222.226.222a.22.22 0 00.222-.222z" fillRule="nonzero" /></svg></i>
                    <p className="vendors-categBox-title">Transports</p>
                    <a className="vendors-categBox-button app-icon-hover" data-icon-old="icon-tools-search" data-icon-new="icon-tools-search-white" href="https://www.mariages.net/bus-mariage/paris">
                      <i className="icon-tools icon-tools-search mr5" />
                      Rechercher
                    </a>
                  </div>
                </div>
                <div className="pure-u-1-4 vendors-categBox-separator vendors-categBox-separator-cover">
                  <div className="vendors-categBox-item app-link" data-href="/tools/VendorsCateg?id_categ=18">
                    <i className="svgIcon svgIcon__categInvite vendors-categBox-item-icon"><svg viewBox="0 0 50 51">
                        <path d="M45 22.32V9.19C45 8.54 44.444 8 43.748 8H6.252C5.556 8 5 8.54 5 9.19v13.058l20.398 12.324L45 22.321zm2-1.25l.553-.345-.553-.461v.807zm1 1.734L27.317 35.731 48 48.227V22.804zM3 21.04v-.776l-.54.45.54.326zM45.411 49L2 22.773V49h43.411zM3 17.66V9.19C3 7.423 4.463 6 6.252 6h9.978l5.589-4.868C22.546.402 23.564 0 24.656 0c1.13 0 2.125.34 2.783 1.004L33.245 6h10.503C45.537 6 47 7.423 47 9.19v8.47l3 2.5V51H0V20.16l3-2.5zM19.274 6H30.18L26.08 2.468C25.777 2.166 25.293 2 24.656 2c-.572 0-1.078.2-1.472.592L19.274 6zm8.819 8C30.248 14 32 15.78 32 18.008a4 4 0 01-1.14 2.803l-4.636 4.878a1 1 0 01-1.443.006l-4.766-4.935A4.306 4.306 0 0119 18.008C19 15.813 20.72 14 22.907 14c.968 0 1.891.37 2.593.999A3.904 3.904 0 0128.093 14zm1.323 5.428c.382-.396.584-.883.584-1.42 0-1.13-.864-2.008-1.907-2.008a1.91 1.91 0 00-1.693 1.061 1 1 0 01-1.801 0A1.908 1.908 0 0022.907 16C21.848 16 21 16.894 21 18.008c0 .532.198 1.045.504 1.42l3.99 4.127 3.922-4.127z" fillRule="nonzero" /></svg></i>
                    <p className="vendors-categBox-title">Faire-part</p>
                    <a className="vendors-categBox-button app-icon-hover" data-icon-old="icon-tools-search" data-icon-new="icon-tools-search-white" href="https://www.mariages.net/faire-part-mariage/paris">
                      <i className="icon-tools icon-tools-search mr5" />
                      Rechercher
                    </a>
                  </div>
                </div>
                <div className="pure-u-1-5 vendors-categBox-separator vendors-categBox-separator-cover">
                  <div className="vendors-categBox-item app-link" data-href="/tools/VendorsCateg?id_categ=19">
                    <i className="svgIcon svgIcon__categGift vendors-categBox-item-icon"><svg viewBox="0 0 44 49">
                        <path d="M37.436 2.802c1.542 2.462 1.213 4.674-.693 6.42-1.463 1.34-3.794 2.37-6.77 3.16l-.659.168H41.8c1.114 0 2.05.936 2.05 2.05l-.006 9.107c.153 1.226-.763 2.143-1.944 2.143h-.351l.001 20.35c0 1.29-.98 2.361-2.285 2.445l-.165.005H4.9a2.435 2.435 0 01-2.45-2.45V25.85H2.1A2.073 2.073 0 01.05 23.8v-9.2c0-1.114.936-2.05 2.05-2.05l12.685.001c-.221-.054-.44-.11-.657-.168-2.977-.792-5.308-1.822-6.77-3.161-1.907-1.746-2.236-3.958-.695-6.418C8.341.108 10.563-.6 12.993.515c2 .917 4.055 3.008 6.131 5.93a49.908 49.908 0 012.7 4.273l.226.405.226-.405a49.908 49.908 0 012.7-4.272c2.076-2.923 4.13-5.014 6.13-5.93 2.43-1.115 4.653-.408 6.33 2.286zm2.613 23.048H26.25v21.3H39.1a.933.933 0 00.944-.839l.006-.111-.001-20.35zm-22.299 0H3.95V46.2c0 .506.364.891.839.944l.111.006h12.85v-21.3zm7 0h-5.5v21.3h5.5v-21.3zm-7-11.8H2.1a.575.575 0 00-.55.55v9.2c0 .286.264.55.55.55h15.65v-10.3zm7 0h-5.5v10.3h5.5v-10.3zm17.05 0H26.25v10.3H41.9c.32 0 .491-.172.45-.55v-9.2a.575.575 0 00-.55-.55zM7.936 3.598c-1.154 1.842-.944 3.256.434 4.518 1.244 1.139 3.38 2.082 6.143 2.817 1.691.45 3.509.794 5.327 1.046l.707.093.337.04-.365-.655A48.438 48.438 0 0017.9 7.315c-1.935-2.725-3.834-4.658-5.533-5.436-1.734-.795-3.148-.346-4.432 1.72zm23.796-1.72c-1.699.78-3.598 2.712-5.533 5.437a47.1 47.1 0 00-2.21 3.436l-.408.706-.365.656.337-.04.707-.094c1.818-.252 3.636-.596 5.327-1.046 2.763-.735 4.9-1.678 6.143-2.817 1.378-1.262 1.588-2.676.433-4.52-1.283-2.063-2.697-2.512-4.431-1.717z" fillRule="nonzero" /></svg></i>
                    <p className="vendors-categBox-title">Cadeaux aux invités</p>
                    <a className="vendors-categBox-button app-icon-hover" data-icon-old="icon-tools-search" data-icon-new="icon-tools-search-white" href="https://www.mariages.net/cadeaux-invites-mariage/paris">
                      <i className="icon-tools icon-tools-search mr5" />
                      Rechercher
                    </a>
                  </div>
                </div>
                <div className="pure-u-1-5 vendors-categBox-separator vendors-categBox-separator-cover">
                  <div className="vendors-categBox-item app-link" data-href="/tools/VendorsCateg?id_categ=20">
                    <i className="svgIcon svgIcon__categFlower vendors-categBox-item-icon"><svg viewBox="0 0 34 54">
                        <path d="M1.262 19.007a15.769 15.769 0 01-.262-2.7V5a1 1 0 011-1c3.282 0 6.336 1 8.878 2.709A27.672 27.672 0 0116.343.246a1 1 0 011.314 0 27.673 27.673 0 015.464 6.462c.18-.112.361-.22.545-.326A15.792 15.792 0 0132 4a1 1 0 011 1v11.32c-.074 6.59-4.225 12.225-10.06 14.546a15.496 15.496 0 01-4.94 1.24V43.37a17.164 17.164 0 012.44-3.202c3.326-3.533 7.89-5.348 12.59-5.154l.922.038.035.923c.181 4.698-1.553 9.434-4.798 12.977-3.173 3.194-7.3 4.952-11.679 5.048h-.85c-4.363 0-8.506-1.764-11.68-5.049C1.572 45.516-.173 40.813.013 35.975l.037-.942.942-.02c4.693-.097 9.242 1.712 12.56 5.146.948.98 1.765 2.073 2.448 3.256V32.14C8.57 31.797 2.468 26.23 1.262 19.007zm15.611-4.878a15.757 15.757 0 014.618-6.252A25.576 25.576 0 0017 2.346a25.567 25.567 0 00-4.525 5.588 16.15 16.15 0 014.398 6.195zm5.013 27.42c-1.99 2.059-3.348 4.614-3.907 7.34L17.341 52h.147c3.842-.085 7.475-1.633 10.254-4.429a16.353 16.353 0 004.254-10.567c-3.785.091-7.402 1.668-10.11 4.544zm-5.86 7.366c-.667-2.85-1.99-5.376-3.912-7.366-2.696-2.79-6.314-4.363-10.11-4.525.084 3.946 1.615 7.716 4.405 10.528C9.216 50.457 12.839 52 16.66 52h.089l-.723-3.085zM18 20.015c0 1.334-2 1.334-2 0 0-7.35-5.75-13.46-13-13.98v10.262C3.085 23.864 9.338 30 17 30c7.663 0 13.915-6.136 14-13.692V6.036c-7.2.525-13 6.662-13 13.98z" fillRule="nonzero" /></svg></i>
                    <p className="vendors-categBox-title">Fleurs et Décoration</p>
                    <a className="vendors-categBox-button app-icon-hover" data-icon-old="icon-tools-search" data-icon-new="icon-tools-search-white" href="https://www.mariages.net/fleurs-mariage/paris">
                      <i className="icon-tools icon-tools-search mr5" />
                      Rechercher
                    </a>
                  </div>
                </div>
                <div className="pure-u-1-5 vendors-categBox-separator vendors-categBox-separator-cover">
                  <div className="vendors-categBox-item app-link" data-href="/tools/VendorsCateg?id_categ=161">
                    <i className="svgIcon svgIcon__categMisc vendors-categBox-item-icon"><svg viewBox="0 0 32 32">
                        <path fillRule="evenodd" clipRule="evenodd" d="M16 1.807c-1.623-.637-2.915-.655-4.031-.363-.95.248-1.758.722-2.474 1.142l-.391.227c-.836.477-1.575.817-2.458.781-.882-.036-2.002-.455-3.558-1.724l-.002-.002a1.12 1.12 0 00-1.824.893c.025 1.761.264 4.96 1.533 7.735.638 1.394 1.544 2.702 2.833 3.662 1.296.964 2.95 1.557 5.038 1.557 1.814.016 3.613-.33 5.291-1.02l.009-.003a.086.086 0 01.068 0l.009.004a13.607 13.607 0 005.29 1.019c2.09 0 3.743-.593 5.039-1.557 1.289-.96 2.195-2.268 2.833-3.662 1.269-2.775 1.508-5.973 1.533-7.734a1.12 1.12 0 00-1.826-.892m-27.65.891v.001l.5-.01-.5.008v.001zM16 1.807c1.623-.637 2.915-.655 4.032-.363.95.248 1.758.722 2.473 1.142l.391.227c.836.477 1.575.817 2.458.781.882-.036 2.002-.455 3.558-1.724m-3.517 2.724c1.183-.049 2.506-.609 4.149-1.95a.12.12 0 01.194.096v.005c-.024 1.717-.26 4.75-1.443 7.335-.588 1.287-1.402 2.443-2.52 3.276-1.113.828-2.555 1.359-4.444 1.359h-.004a12.609 12.609 0 01-4.9-.943 1.086 1.086 0 00-.853 0c-1.555.638-3.22.958-4.9.943h-.005c-1.889 0-3.33-.53-4.443-1.36-1.12-.832-1.933-1.988-2.521-3.275-1.183-2.586-1.419-5.618-1.443-7.335v-.002a.12.12 0 01.067-.11l.002-.001a.119.119 0 01.127.014c1.642 1.34 2.964 1.9 4.147 1.948 1.183.048 2.134-.422 2.995-.913l.428-.248c.716-.419 1.389-.812 2.193-1.022.929-.243 2.055-.24 3.587.397a.5.5 0 00.384 0c1.532-.637 2.658-.64 3.587-.397.804.21 1.477.603 2.193 1.022l.428.248c.86.491 1.812.96 2.995.913z" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M1.762 2.249a.5.5 0 00-.5.5v27.49a.5.5 0 001 0V2.748a.5.5 0 00-.5-.5zM7.678 6.827c.642-.257 1.514-.348 2.456-.18.942.168 1.728.556 2.242 1.022.52.47.706.962.633 1.37-.072.407-.417.804-1.067 1.065-.642.259-1.513.35-2.455.178-.944-.172-1.73-.56-2.244-1.025-.52-.47-.705-.959-.632-1.367.073-.407.417-.802 1.067-1.063zM7.305 5.9c-.835.335-1.523.947-1.678 1.816-.155.869.278 1.68.945 2.283.673.61 1.639 1.068 2.736 1.268 1.098.2 2.165.105 3.008-.234.835-.336 1.523-.95 1.678-1.818.155-.869-.28-1.682-.947-2.286-.673-.61-1.64-1.07-2.737-1.266M7.305 5.9c.843-.338 1.908-.432 3.005-.237L7.305 5.9zM24.348 6.827c-.643-.257-1.515-.348-2.457-.18-.942.168-1.728.556-2.242 1.022-.52.47-.706.962-.633 1.37.073.407.417.804 1.067 1.065.642.259 1.514.35 2.455.178.944-.172 1.73-.56 2.244-1.025.52-.47.705-.959.632-1.367-.073-.407-.416-.802-1.067-1.063zm.372-.928c.835.335 1.524.947 1.679 1.816.155.869-.279 1.68-.946 2.283-.672.61-1.639 1.068-2.735 1.268-1.099.2-2.166.105-3.009-.234-.835-.336-1.523-.95-1.677-1.818-.156-.869.279-1.682.946-2.286.673-.61 1.64-1.07 2.737-1.266m3.005.237c-.843-.338-1.908-.432-3.005-.237z" /></svg></i>
                    <p className="vendors-categBox-title">Animation</p>
                    <a className="vendors-categBox-button app-icon-hover" data-icon-old="icon-tools-search" data-icon-new="icon-tools-search-white" href="https://www.mariages.net/animation-mariage/paris">
                      <i className="icon-tools icon-tools-search mr5" />
                      Rechercher
                    </a>
                  </div>
                </div>
                <div className="pure-u-1-5 vendors-categBox-separator vendors-categBox-separator-cover">
                  <div className="vendors-categBox-item app-link" data-href="/tools/VendorsCateg?id_categ=160">
                    <i className="svgIcon svgIcon__categPlanner vendors-categBox-item-icon"><svg viewBox="0 0 58 58">
                        <path d="M49.207 37.13V5.87a3.066 3.066 0 00-3.066-3.067H7.357v52.394H46.14a3.066 3.066 0 003.066-3.067v-15zm2 0H58v12.056h-6.793v2.944a5.066 5.066 0 01-5.066 5.067H5.066A5.066 5.066 0 010 52.13V5.87A5.066 5.066 0 015.066.803h41.075a5.066 5.066 0 015.066 5.067V6.95H58v12.056h-6.793v3.04H58v12.056h-6.793v3.027zM5.357 55.197V2.803h-.29A3.066 3.066 0 002 5.87v46.26a3.066 3.066 0 003.066 3.067h.29zm34.346-41.453v12.458H16.277V13.744h23.426zm-21.426 2v8.458h19.426v-8.458H18.277zm32.93 1.263H56V8.951h-4.793v8.056zm0 15.096H56v-8.056h-4.793v8.056zm0 15.083H56V39.13h-4.793v8.056z" fillRule="nonzero" /></svg></i>
                    <p className="vendors-categBox-title">Organisation</p>
                    <a className="vendors-categBox-button app-icon-hover" data-icon-old="icon-tools-search" data-icon-new="icon-tools-search-white" href="https://www.mariages.net/organisation-mariage/paris">
                      <i className="icon-tools icon-tools-search mr5" />
                      Rechercher
                    </a>
                  </div>
                </div>
                <div className="pure-u-1-5 vendors-categBox-separator vendors-categBox-separator-cover">
                  <div className="vendors-categBox-item app-link" data-href="/tools/VendorsCateg?id_categ=164">
                    <i className="svgIcon svgIcon__categOfficiant vendors-categBox-item-icon"><svg viewBox="0 0 50 38">
                        <path d="M20.62 27.06a6.877 6.877 0 01-2.167-2.958c-1.631-3.728.217-8.163 3.98-9.574 3.745-1.404 8.113.482 9.514 4.176 1.322 3.05.32 6.461-2.22 8.485 3.334 1.808 5.688 5.725 5.688 9.77a1 1 0 01-1 1H15.732a1 1 0 01-1-1c0-4.224 2.366-8.177 5.887-9.898zm6.233-.542c.118-.035.236-.074.352-.117 2.765-1.21 4.06-4.267 2.9-6.92l-.02-.05c-.999-2.661-4.216-4.055-6.95-3.03-2.685 1.007-4.023 4.218-2.83 6.949.595 1.585 1.977 2.721 3.564 3.168h2.984zm-3.216 2H22.32c-2.968 1.009-5.169 4.03-5.534 7.442h16.57c-.387-3.332-2.662-6.407-5.538-7.442h-.728a7.517 7.517 0 01-3.453 0zm-6.06-24.254a1 1 0 01.596 1.91C8.763 9.113 2.201 17.9 2.201 27.92v9.04a1 1 0 11-2 0v-9.04c0-10.9 7.136-20.456 17.376-23.656zM50.013 36.96a1 1 0 11-2 0v-9.04c0-9.982-6.526-18.796-15.777-21.749a1 1 0 11.608-1.905c10.075 3.215 17.17 12.796 17.17 23.654v9.04zM24.906.775a3.04 3.04 0 011.808-.574c1.614 0 3.01 1.302 3.01 3.009 0 .704-.202 1.442-.508 2.054a1 1 0 01-.187.26l-3.215 3.214a1 1 0 01-1.414 0l-3.415-3.415c-.603-.603-.896-1.26-.896-2.113C20.09 1.596 21.392.2 23.1.2a3.04 3.04 0 011.807.575zm2.817 2.435c0-.57-.47-1.01-1.009-1.01-.411 0-.725.184-.976.56a1 1 0 01-1.664 0c-.25-.376-.564-.56-.976-.56-.57 0-1.009.471-1.009 1.01 0 .302.07.459.31.699l2.708 2.708 2.383-2.383c.141-.325.233-.703.233-1.024z" fillRule="nonzero" /></svg></i>
                    <p className="vendors-categBox-title">Officiants</p>
                    <a className="vendors-categBox-button app-icon-hover" data-icon-old="icon-tools-search" data-icon-new="icon-tools-search-white" href="https://www.mariages.net/officiants/paris">
                      <i className="icon-tools icon-tools-search mr5" />
                      Rechercher
                    </a>
                  </div>
                </div>
                <div className="pure-u-1-5 vendors-categBox-separator vendors-categBox-separator-cover">
                  <div className="vendors-categBox-item app-link" data-href="/tools/VendorsCateg?id_categ=162">
                    <i className="svgIcon svgIcon__categCake vendors-categBox-item-icon"><svg viewBox="0 0 54 51">
                        <path d="M28.943 13H47v1.588a8.083 8.083 0 01-1 3.91v11.487h8v1.496a7.806 7.806 0 01-1 3.83V51H1V35.31a7.806 7.806 0 01-1-3.83v-1.495h8V18.5a8.078 8.078 0 01-1-3.912V13h18.202l-4.96-4.961c-.784-.882-1.268-2.066-1.268-3.273A4.74 4.74 0 0123.742 0c1.284 0 2.46.501 3.33 1.365A4.7 4.7 0 0130.404 0a4.74 4.74 0 014.766 4.766c0 1.227-.496 2.41-1.379 3.388L28.943 13zM10 29.985h34v-9.109a7.67 7.67 0 01-4.811 1.69c-2.398 0-4.61-1.151-6.081-3.017-1.445 1.855-3.698 3.017-6.108 3.017-2.398 0-4.608-1.151-6.08-3.018-1.445 1.855-3.698 3.018-6.109 3.018A7.68 7.68 0 0110 20.876v9.109zm-7 7.677V49h48V37.662a8.147 8.147 0 01-5.098 1.78c-2.5 0-4.8-1.14-6.3-3.004a8.086 8.086 0 01-6.302 3.005c-2.5 0-4.8-1.141-6.3-3.006a8.08 8.08 0 01-6.3 3.006 8.086 8.086 0 01-6.302-3.005 8.082 8.082 0 01-6.3 3.005A8.147 8.147 0 013 37.662zm11.811-17.096c2.205 0 4.253-1.332 5.19-3.318l.875-1.854.923 1.83c1.024 2.032 3.02 3.342 5.201 3.342 2.205 0 4.253-1.332 5.19-3.318l.876-1.856.922 1.833c1.021 2.03 3.019 3.341 5.2 3.341 3.082 0 5.593-2.458 5.798-5.566H9.013c.206 3.125 2.734 5.566 5.798 5.566zM8.098 37.443a6.061 6.061 0 005.409-3.29l.891-1.749.891 1.75c1.017 1.996 3.1 3.289 5.411 3.289 2.31 0 4.39-1.292 5.41-3.29l.89-1.746.89 1.746a6.063 6.063 0 005.41 3.29c2.312 0 4.394-1.293 5.41-3.29l.892-1.749.891 1.75a6.061 6.061 0 005.409 3.289c3.19 0 5.814-2.412 6.076-5.458H2.022c.262 3.046 2.886 5.458 6.076 5.458zM32.341 6.777c.53-.588.829-1.302.829-2.01A2.74 2.74 0 0030.404 2c-1.046 0-1.954.563-2.448 1.496l-.884 1.67-.884-1.67C25.694 2.562 24.787 2 23.742 2a2.74 2.74 0 00-2.768 2.766c0 .698.294 1.416.723 1.901l5.375 5.375 5.269-5.265z" fillRule="nonzero" /></svg></i>
                    <p className="vendors-categBox-title">Wedding cake</p>
                    <a className="vendors-categBox-button app-icon-hover" data-icon-old="icon-tools-search" data-icon-new="icon-tools-search-white" href="https://www.mariages.net/wedding-cake/paris">
                      <i className="icon-tools icon-tools-search mr5" />
                      Rechercher
                    </a>
                  </div>
                </div>
                <div className="pure-u-1-5 vendors-categBox-separator vendors-categBox-separator-cover">
                  <div className="vendors-categBox-item vendors-categBox-item-img booked app-link" data-href="/tools/VendorsCateg?id_categ=23" style={{background: 'url(https://cdn0.mariages.net/emp/fotos/5/5/2/5/t20_kesslord-2-25-9038_3_125525.jpg)no-repeat scroll 50% 50% transparent', backgroundSize: 'cover'}} />
                  <div className="vendors-categBox-content">
                    <i className="svgIcon svgIcon__categBride vendors-categBox-item-icon"><svg viewBox="0 0 49 54">
                        <path d="M39 36.064a22.418 22.418 0 00-1.352-1.036 25.587 25.587 0 01-4.901 2.73c-7.223 2.846-15.282 1.765-21.485-2.655C5.857 38.972 2.337 45.147 2.022 52H39V36.064zm2 1.875V52h5.977c-.243-5.372-2.439-10.309-5.977-14.06zm-5.184-4.079a22.689 22.689 0 00-4.337-1.908l.61-1.904c2.53.81 4.861 2.003 6.932 3.503V18.516c0-2.794-.28-4.741-1.106-6.936-3.02-7.783-11.733-11.591-19.403-8.516-5.65 2.31-9.368 7.869-9.512 13.933v17.314a24.27 24.27 0 017.99-4.265l.597 1.908a22.277 22.277 0 00-4.5 1.974c5.56 3.65 12.594 4.464 18.904 1.978a23.682 23.682 0 003.825-2.046zM7 36.113v-19.14C7.163 10.102 11.36 3.83 17.761 1.21c8.712-3.493 18.596.827 22.022 9.656.925 2.457 1.238 4.634 1.238 7.65v16.651C45.974 39.62 49 46.013 49 53v1H0v-1c0-6.493 2.64-12.498 7-16.887zM7 36h2v17H7V36zm30.145-10.979l.263.287v.389c0 .761-1.565 2.934-3.386 4.516C31.303 32.576 27.906 34 23.87 34c-3.648 0-6.813-1.244-9.47-3.308a16.936 16.936 0 01-2.396-2.264c-.409-.47-.688-.845-.84-1.074l-.856-1.3 1.54-.238c6.87-1.06 13.593-4.51 18.398-11.389l1.668-2.387.15 2.908c.175 3.37 2.11 6.83 5.081 10.073zm-6.707-7.535c-4.592 5.602-10.488 8.719-16.593 10a15.06 15.06 0 001.782 1.627C17.954 30.92 20.701 32 23.87 32c3.523 0 6.467-1.234 8.84-3.296a13.837 13.837 0 002.138-2.327 9.97 9.97 0 00.355-.526c-2.34-2.663-4.041-5.476-4.765-8.365z" fillRule="nonzero" /></svg></i>
                    <p className="vendors-categBox-title">Mariée et Accessoires</p>
                    <span className="vendors-categBox-button black"><i className="icon-tools icon-tools-heart-white mr5" />1</span>
                  </div>
                </div>
                <div className="pure-u-1-5 vendors-categBox-separator vendors-categBox-separator-cover">
                  <div className="vendors-categBox-item app-link" data-href="/tools/VendorsCateg?id_categ=24">
                    <i className="svgIcon svgIcon__categGroom vendors-categBox-item-icon"><svg viewBox="0 0 49 54">
                        <path d="M38.816 19.577c.145-.837.221-1.698.221-2.577 0-8.284-6.724-15-15.018-15C15.77 2 9.073 8.643 9 16.863c1.904.656 3.948.988 6.073.988 6.374 0 12.286-3.235 15.762-8.443l1.697-2.544.134 3.056a11.453 11.453 0 006.15 9.657zm-.488 1.991a13.47 13.47 0 01-7.319-9.08c-3.922 4.592-9.728 7.363-15.935 7.363a20.8 20.8 0 01-5.94-.845C10.113 26.34 16.405 32 24.017 32c6.7 0 12.375-4.381 14.31-10.432zM16.509 32.26C8.172 35.392 2.425 43.103 2.023 52h19.68l-.186-1.212-.012-.153V41.68l1.17-1.945-1.943-2.513 2.546-3.238a16.94 16.94 0 01-6.769-1.725zm-2.162-1.27C9.908 27.921 7 22.8 7 17 7 7.612 14.621 0 24.018 0c9.4 0 17.019 7.61 17.019 17 0 5.686-2.794 10.72-7.086 13.806C42.803 34.537 48.742 43.196 48.742 53v1H0v-1c0-9.627 5.736-18.133 14.347-22.01zM31.8 32.123a16.921 16.921 0 01-6.07 1.792l2.531 3.316-1.937 2.504 1.17 1.945v8.954l-.01.153-.187 1.212h19.422c-.409-9.065-6.356-16.911-14.919-19.876zm-8.073 19.876h1.546l.222-1.441v-8.322l-.995-1.654-.995 1.654v8.322l.222 1.441zm2.012-14.776l-1.214-1.59-1.257 1.599 1.232 1.592 1.239-1.601z" fillRule="nonzero" /></svg></i>
                    <p className="vendors-categBox-title">Marié et Accessoires</p>
                    <a className="vendors-categBox-button app-icon-hover" data-icon-old="icon-tools-search" data-icon-new="icon-tools-search-white" href="https://www.mariages.net/busc.php?id_grupo=4&id_provincia=485&id_region=32">
                      <i className="icon-tools icon-tools-search mr5" />
                      Rechercher
                    </a>
                  </div>
                </div>
                <div className="pure-u-1-5 vendors-categBox-separator vendors-categBox-separator-cover">
                  <div className="vendors-categBox-item app-link" data-href="/tools/VendorsCateg?id_categ=28">
                    <i className="svgIcon svgIcon__categBeauty vendors-categBox-item-icon"><svg viewBox="0 0 54 44">
                        <path d="M52.832 30H54v13H42V30h1v-6h1v-5.602l4.307-5.665.743.374c.418.21.98.63 1.528 1.31.89 1.103 1.422 2.541 1.422 4.318V24h.832v6zm-2 0v-4H45v4h5.832zm-39.943 7C4.439 33.82 0 27.177 0 19.499 0 8.73 8.731 0 19.5 0 30.27 0 39 8.73 39 19.499c0 7.678-4.437 14.32-10.888 17.501H38v6.075H1V37h9.889zM3 41.075h33V39H3v2.075zM19.5 2C9.836 2 2 9.835 2 19.499 2 29.164 9.836 37 19.5 37 29.165 37 37 29.164 37 19.499 37 9.834 29.166 2 19.5 2zM50 18.735c0-1.309-.369-2.307-.978-3.062a4.284 4.284 0 00-.235-.267L46 19.072V24h4v-5.265zM52 41v-9h-8v9h8zM19.5 6C26.956 6 33 12.044 33 19.499 33 26.957 26.957 33 19.5 33 12.044 33 6 26.957 6 19.499 6 12.044 12.045 6 19.5 6zm0 2C13.15 8 8 13.149 8 19.499 8 25.852 13.148 31 19.5 31 25.853 31 31 25.853 31 19.499 31 13.149 25.852 8 19.5 8z" fillRule="nonzero" /></svg></i>
                    <p className="vendors-categBox-title">Beauté et bien-être</p>
                    <a className="vendors-categBox-button app-icon-hover" data-icon-old="icon-tools-search" data-icon-new="icon-tools-search-white" href="https://www.mariages.net/esthetique-coiffure-mariage/paris">
                      <i className="icon-tools icon-tools-search mr5" />
                      Rechercher
                    </a>
                  </div>
                </div>
                <div className="pure-u-1-5 vendors-categBox-separator vendors-categBox-separator-cover">
                  <div className="vendors-categBox-item app-link" data-href="/tools/VendorsCateg?id_categ=29">
                    <i className="svgIcon svgIcon__categJewel vendors-categBox-item-icon"><svg viewBox="0 0 38 54">
                        <path d="M24.296 16.829c7.87 2.309 13.637 9.597 13.637 18.203C37.933 45.488 29.422 54 18.967 54 8.511 54 .001 45.49.001 35.032c0-8.625 5.791-15.926 13.689-18.218L5.706 7.047 11.522 0h14.956l5.816 7.047-7.998 9.782zm-5.329 1.237c-9.352 0-16.966 7.615-16.966 16.966C2.001 44.385 9.616 52 18.967 52c9.35 0 16.966-7.616 16.966-16.968 0-9.35-7.616-16.966-16.966-16.966zM12.464 2l-4.17 5.053 7.243 8.86c1.236-.205 2.366-.311 3.462-.311 1.156 0 2.3.105 3.466.307l7.24-8.856L25.536 2h-13.07zm6.537 15.602c-1.367 0-2.556.092-3.681.302l-.958-.348-8.135-9.922L7 6h24l.776 1.631-8.134 10-.97.35A18.738 18.738 0 0019 17.6zm0-2c1.152 0 2.296.105 3.464.307L28.898 8H9.113l6.428 7.839c1.079-.165 2.207-.237 3.46-.237zm-3.869-8.28l2.88 8.758c.265-.01.574-.014.987-.014.413 0 .722.003.987.014l2.881-8.757-3.9-4.334-3.835 4.334zm-.72-2.187L17.186 2h-3.804l1.03 3.135zM20.75 2l2.833 3.148L24.618 2H20.75zM19 18.066c-.798 0-1.141.012-1.547.07l-1.092-.677-5.31-16.147L12 0h14l.95 1.313-5.312 16.146-1.091.677c-.407-.058-.75-.07-1.548-.07z" fillRule="nonzero" /></svg></i>
                    <p className="vendors-categBox-title">Bijoux</p>
                    <a className="vendors-categBox-button app-icon-hover" data-icon-old="icon-tools-search" data-icon-new="icon-tools-search-white" href="https://www.mariages.net/bijoux-mariage/paris">
                      <i className="icon-tools icon-tools-search mr5" />
                      Rechercher
                    </a>
                  </div>
                </div>
                <div className="pure-u-1-5 vendors-categBox-separator vendors-categBox-separator-cover">
                  <div className="vendors-categBox-item app-link" data-href="/tools/VendorsCateg?id_categ=25">
                    <i className="svgIcon svgIcon__categPlane vendors-categBox-item-icon"><svg viewBox="0 0 54 54">
                        <path d="M50.572 11.446a5.68 5.68 0 00-8.5-7.533L9.365 40.803a2.714 2.714 0 00.002 3.601 2.713 2.713 0 003.832.231L50.087 11.93c.16-.143.34-.322.485-.484zm.846 1.977L14.525 46.132a4.713 4.713 0 01-6.655-.4 4.713 4.713 0 010-6.258L40.575 2.586a7.678 7.678 0 1110.843 10.837zM40.211 31.775l3.213-3.215a3.505 3.505 0 114.957 4.957l-3.215 3.215a3.505 3.505 0 01-4.955-4.957zm1.414 3.542c.586.587 1.54.587 2.128 0l3.214-3.214a1.505 1.505 0 10-2.13-2.128l-3.212 3.214a1.505 1.505 0 000 2.128zM17.267 8.834l3.214-3.217a3.507 3.507 0 014.958 4.959l-3.215 3.214a3.505 3.505 0 01-4.957-4.956zm3.543 3.541l3.215-3.213a1.507 1.507 0 00-2.13-2.13l-3.213 3.216a1.505 1.505 0 002.128 2.127zm-1.218 34.82a.962.962 0 001.584-1.01l-2.272-5.728 1.859-.737 2.278 5.744a2.959 2.959 0 01-.676 3.143c-1.154 1.158-3.038 1.158-4.15.037l-.06-.056-3.675-3.674 1.415-1.415 3.664 3.665.033.031zM5.296 35.73a2.97 2.97 0 01.095-4.098 2.95 2.95 0 013.15-.673l5.74 2.277-.738 1.86-5.726-2.273a.946.946 0 00-1.012.224c-.377.377-.377.987-.042 1.323.018.01.026.014.062.061l3.674 3.676-1.414 1.414L5.4 35.835l-.105-.105zm40.018 17.075l1.397-1.433-1.397 1.433-18.672-18.672 1.415-1.415 18.656 18.656a2.168 2.168 0 003.056-.01c.612-.61.794-1.519.489-2.308l-4.945-12.47-.145.145a3.503 3.503 0 01-4.957 0 3.505 3.505 0 010-4.957l2.287-2.287-2.918-7.359 1.86-.737 3.401 8.58-.464.466-2.752 2.75a1.505 1.505 0 102.13 2.13l2.295-2.297.561 1.415 5.51 13.892a4.168 4.168 0 01-6.816 4.467l.703-.71.707-.708-1.4 1.429zM32.611 12.56l-.737 1.86-7.972-3.163.737-1.859 7.972 3.162zM19.566 7.388l-.737 1.86L4.952 3.744a2.167 2.167 0 00-2.33 3.539L21.28 25.945l-1.414 1.414L1.205 8.694a4.168 4.168 0 01.015-5.88 4.17 4.17 0 014.462-.932l13.884 5.506z" fillRule="nonzero" /></svg></i>
                    <p className="vendors-categBox-title">Lune de Miel</p>
                    <a className="vendors-categBox-button app-icon-hover" data-icon-old="icon-tools-search" data-icon-new="icon-tools-search-white" href="https://www.mariages.net/lune-de-miel/paris">
                      <i className="icon-tools icon-tools-search mr5" />
                      Rechercher
                    </a>
                  </div>
                </div>
                <div className="pure-u-1-5 vendors-categBox-separator vendors-categBox-separator-cover">
                  <div className="vendors-categBox-item app-link" data-href="/tools/VendorsCateg?id_categ=26">
                    <i className="svgIcon svgIcon__categMore vendors-categBox-item-icon"><svg viewBox="0 0 54 54">
                        <path d="M54 27c0 14.912-12.088 27-27 27S0 41.912 0 27 12.088 0 27 0s27 12.088 27 27zm-2 0C52 13.192 40.808 2 27 2S2 13.192 2 27s11.192 25 25 25 25-11.192 25-25zm-32.182 0a3.416 3.416 0 11-6.832 0 3.416 3.416 0 016.832 0zm-2 0a1.416 1.416 0 10-2.832 0 1.416 1.416 0 002.832 0zm12.113 0a3.416 3.416 0 11-6.833 0 3.416 3.416 0 016.833 0zm-2 0a1.416 1.416 0 10-2.833 0 1.416 1.416 0 002.833 0zm13.084 0a3.416 3.416 0 11-6.833 0 3.416 3.416 0 016.833 0zm-2 0a1.416 1.416 0 10-2.833 0 1.416 1.416 0 002.833 0z" fillRule="nonzero" /></svg></i>
                    <p className="vendors-categBox-title">Autres</p>
                    <a className="vendors-categBox-button app-icon-hover" data-icon-old="icon-tools-search" data-icon-new="icon-tools-search-white" href="https://www.mariages.net/busc.php?id_grupo=0&id_provincia=485&id_region=32">
                      <i className="icon-tools icon-tools-search mr5" />
                      Rechercher
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
                        <li>
                          <a rel="nofollow noopener noreferrer" href="https://www.facebook.com/mariagesnet" target="_blank"><i className="svgIcon svgIcon__facebook"><svg viewBox="0 0 1792 1792">
                                <path d="M1343 12v264h-157q-86 0-116 36t-30 108v189h293l-39 296h-254v759H734V905H479V609h255V391q0-186 104-288.5T1115 0q147 0 228 12z" /></svg></i>Facebook</a>
                        </li>
                        <li>
                          <a rel="nofollow noopener noreferrer" href="https://twitter.com/mariagesnet" target="_blank"><i className="svgIcon svgIcon__twitter"><svg viewBox="0 0 502 408">
                                <path d="M501.625 48.375c-18.477 8.203-38.281 13.71-59.102 16.21 21.25-12.733 37.579-32.89 45.235-56.874a206.477 206.477 0 01-65.313 24.922c-18.75-20-45.468-32.461-75.039-32.461-56.797 0-102.851 46.016-102.851 102.812 0 8.047.937 15.899 2.695 23.438C161.781 122.125 86.04 81.188 35.297 18.96 26.43 34.195 21.39 51.85 21.39 70.68c0 35.664 18.125 67.148 45.742 85.625-16.875-.547-32.735-5.196-46.602-12.89v1.288c0 49.844 35.469 91.367 82.461 100.86-8.594 2.343-17.695 3.593-27.07 3.593-6.64 0-13.086-.625-19.375-1.875 13.125 40.82 51.094 70.625 96.055 71.446-35.157 27.578-79.493 43.984-127.696 43.984-8.32 0-16.484-.469-24.492-1.445 45.469 29.218 99.531 46.21 157.617 46.21 189.14 0 292.578-156.68 292.578-292.538 0-4.454-.117-8.946-.273-13.32 20.078-14.493 37.5-32.618 51.289-53.243z" fillRule="nonzero" /></svg></i>Twitter</a>
                        </li>
                        <li>
                          <a rel="nofollow noopener noreferrer" href="https://pinterest.com/mariagesnet" target="_blank"><i className="svgIcon svgIcon__pinterest"><svg viewBox="0 0 1792 1792">
                                <path d="M1664 896q0 209-103 385.5T1281.5 1561 896 1664q-111 0-218-32 59-93 78-164 9-34 54-211 20 39 73 67.5t114 28.5q121 0 216-68.5t147-188.5 52-270q0-114-59.5-214T1180 449t-255-63q-105 0-196 29t-154.5 77-109 110.5-67 129.5T377 866q0 104 40 183t117 111q30 12 38-20 2-7 8-31t8-30q6-23-11-43-51-61-51-151 0-151 104.5-259.5T904 517q151 0 235.5 82t84.5 213q0 170-68.5 289T980 1220q-61 0-98-43.5T859 1072q8-35 26.5-93.5t30-103T927 800q0-50-27-83t-77-33q-62 0-105 57t-43 142q0 73 25 122l-99 418q-17 70-13 177-206-91-333-281T128 896q0-209 103-385.5T510.5 231 896 128t385.5 103T1561 510.5 1664 896z" /></svg></i>Pinterest</a>
                        </li>
                        <li>
                          <a rel="nofollow noopener noreferrer" href="https://instagram.com/mariagesnet" target="_blank"><i className="svgIcon svgIcon__instagram"><svg viewBox="0 0 1792 1792">
                                <path d="M1152 896q0-106-75-181t-181-75-181 75-75 181 75 181 181 75 181-75 75-181zm138 0q0 164-115 279t-279 115-279-115-115-279 115-279 279-115 279 115 115 279zm108-410q0 38-27 65t-65 27-65-27-27-65 27-65 65-27 65 27 27 65zM896 266q-7 0-76.5-.5t-105.5 0-96.5 3-103 10T443 297q-50 20-88 58t-58 88q-11 29-18.5 71.5t-10 103-3 96.5 0 105.5.5 76.5-.5 76.5 0 105.5 3 96.5 10 103T297 1349q20 50 58 88t88 58q29 11 71.5 18.5t103 10 96.5 3 105.5 0 76.5-.5 76.5.5 105.5 0 96.5-3 103-10 71.5-18.5q50-20 88-58t58-88q11-29 18.5-71.5t10-103 3-96.5 0-105.5-.5-76.5.5-76.5 0-105.5-3-96.5-10-103T1495 443q-20-50-58-88t-88-58q-29-11-71.5-18.5t-103-10-96.5-3-105.5 0-76.5.5zm768 630q0 229-5 317-10 208-124 322t-322 124q-88 5-317 5t-317-5q-208-10-322-124t-124-322q-5-88-5-317t5-317q10-208 124-322t322-124q88-5 317-5t317 5q208 10 322 124t124 322q5 88 5 317z" /></svg></i>Instagram</a>
                        </li>
                        <li>
                          <a rel="nofollow noopener noreferrer" href="https://www.youtube.com/user/mariagesdotnet/featured" target="_blank"><i className="svgIcon svgIcon__youtube-filled"><svg viewBox="0 0 17 12">
                                <path d="M16.293 2.731v6.324a2.384 2.384 0 01-2.383 2.385H2.73A2.384 2.384 0 01.347 9.055V2.73A2.384 2.384 0 012.73.347h11.18a2.384 2.384 0 012.383 2.384zM6.587 8.624l4.693-3.001L6.587 2.62v6.004z" fillRule="evenodd" /></svg></i>Youtube</a>
                        </li>
                        <li>
                          <a rel="nofollow noopener noreferrer" href="https://www.tiktok.com/@mariages.net" target="_blank"><i className="svgIcon svgIcon__tiktok-logo"><svg viewBox="0 0 18 18">
                                <path d="M17.806 4.507A4.546 4.546 0 0113.254 0h-2.94v8.03l-.003 4.4a2.66 2.66 0 01-2.814 2.655 2.65 2.65 0 01-1.217-.374 2.66 2.66 0 01-1.3-2.241 2.662 2.662 0 013.504-2.565V6.921a5.784 5.784 0 00-.848-.062 5.636 5.636 0 00-4.234 1.894 5.513 5.513 0 00-1.391 3.326 5.506 5.506 0 001.64 4.29A5.637 5.637 0 007.636 18c.287-.001.57-.022.848-.063a5.618 5.618 0 003.138-1.57 5.503 5.503 0 001.65-3.915l-.015-6.57a7.43 7.43 0 004.557 1.549V4.506h-.008z" /></svg></i>TikTok</a>
                        </li>
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
                    <i className="icon-flag icon-flag-fr icon-left" /> France
                    <i className="svgIcon svgIcon__angleDown">
                      <svg viewBox="0 0 32 32" width={16} height={16}>
                        <use xlinkHref="#svg-_common-angleDown" />
                      </svg>
                    </i>
                    <div id="app-footer-flags" style={{display: 'none'}} />
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
          <img className="img-trace" src="https://www.mariages.net/traces-LastConnection.php?idUser=6159171&idDevice=2" alt="" />
          <div id="app-pusher-vendors-users-notification-alert" className="pusher-notification dnone" />
          <div id="app-chat-container" className="pusher-container" style={{display: 'none'}}>
            <div id="app-bot-bot" data-fromtype="bot" data-fromid="bot" data-idconversation="null" data-id-question={1} data-id-flow="null" data-id-categ="null" data-id-sector="null" className="app-chat-container-top">
              <div className="chat-launcher app-chat-launcher">
                <div className="chat-launcher-button">
                  <img className="app-chat-avatar" src="https://www.mariages.net/assets/img/chatbot/avatar.png" width={50} height={50} alt="" />
                  <span className="app-chat-num-messages chat-message-count dnone bounce-once" style={{display: 'inline'}}>1</span>
                </div>
                <div className="chat-launcher-preview fadeout">
                  <div className="app-conversation-summary">
                    Bonjour, je suis Sara, votre assistante virtuelle. Puis-je vous aider dans vos préparatifs de mariage ?
                  </div>
                </div>
              </div>
              <div className="chat-conversation app-chat-conversation" data-initconversation={0}>
                <div className="chat-header">
                  <div className="app-controls-menu chat-controls chat-controls-left">
                    <div className />
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
                  <div className="app-conversation-parts chat-messages__inner">
                    <div className="chat-message-welcome">
                      <p className="title">Conseillère Mariages.net</p>
                      <p>
                        Je tiens à vous aider à choisir le prestataire le mieux adapté au mariage de vos rêves. Un service
                        gratuit pour que vous embauchiez toujours les meilleurs professionnels de votre région. Demandez-nous
                        conseil !
                      </p>
                      <div className="chat-legal">
                        <a className="app-pusher-link" href="https://www.mariages.net/mentions-legales.php#concierge">Conditions d'utilisation</a><a className="app-pusher-link ml10" href="https://www.mariages.net/legal/privacy.php">Politique de confidentialité</a>
                      </div>
                    </div>
                    <div className="chat__separator"><span>10/08/2022</span></div>
                    <div className="app-income-message message-income">
                      <div className="chat-message message-income">
                        <div className="chat-message-avatar">
                          <img src="https://www.mariages.net/assets/img/chatbot/avatar.png" width={50} height={50} alt="Sara" />
                        </div>
                        <div className="chat-message-globe">
                          Bonjour, je suis Sara, votre assistante virtuelle. Puis-je vous aider dans vos préparatifs de
                          mariage ?
                          <div className="chat__timestamp">17:49</div>
                        </div>
                      </div>
                      <div className="app-chat-reply-template">
                        <div className="app-chat-qr-container chatQuickReply">
                          <span className="chatQuickReply__input app-chat-qr" data-type="null" data-reply-text="Oui">Oui</span><span className="chatQuickReply__input app-chat-qr" data-type="null" data-reply-text="Non, merci">Non, merci</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="composer-container chat-message-send app-chat-message-send">
                  <div className="app-chat-writing-alert">Sara est en train d'écrire...</div>
                  <form method="POST" className="app-chat-form-chatbot" data-type="user" data-id={6159171}>
                    <div className="composer-textarea-container flex-va-center flex-justify-space-between">
                      <input className="app-no-tiny app-chat-textarea chat-message-send__messageInput" name="comment" placeholder="Écrivez votre message..." autoComplete="off" readOnly="readonly" />
                      <div className="chat-submit">
                        <span className="app-chat-form-submit chat-message-send__messageSubmit chat-message-send__messageSubmit--disabled"><i className="icon icon-send" /></span>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" style={{display: 'none'}}>
            <symbol>
              <svg id="svg-_common-heart" viewBox="0 0 34 30">
                <path d="M26.232.086C30.653.716 34 4.68 34 9.858c0 1.41-.371 2.884-1.073 4.412-1.35 2.937-3.878 6.013-7.247 9.134a68.921 68.921 0 01-5.582 4.625c-.665.496-1.284.941-1.84 1.328-.335.233-.577.396-.71.483a1 1 0 01-1.097 0c-.132-.087-.374-.25-.71-.483a67.429 67.429 0 01-1.84-1.328 68.921 68.921 0 01-5.58-4.625c-3.37-3.121-5.898-6.197-7.248-9.134C.371 12.742 0 11.268 0 9.858 0 4.681 3.347.716 7.768.086 11.6-.46 15.091 1.616 17 5.778 18.91 1.617 22.4-.46 26.232.086z" fillRule="nonzero" /></svg><svg id="svg-_common-angleDown" viewBox="0 0 18 18">
                <path d="M16.9 5.6c-.2-.2-.5-.2-.7 0L9 12.8 1.8 5.6c-.2-.2-.5-.2-.7 0s-.2.5 0 .7l7.5 7.5v.1c.1.1.3.1.4.1.1 0 .3 0 .4-.1v-.1l7.5-7.5c.2-.2.2-.5 0-.7z" />
              </svg>
            </symbol>
          </svg>
          <div id="survicate-box"><div className="sv-box-child" /></div>
          <div id="onetrust-consent-sdk">
            <div className="onetrust-pc-dark-filter ot-hide ot-fade-in" />
            <div id="onetrust-pc-sdk" className="otPcCenter ot-hide ot-fade-in" aria-modal="true" role="alertdialog" lang="fr-FR" aria-label="Ne pas vendre mes données personnelles">
              {/* Close Button */}
              <div className="ot-pc-header">
                {/* Logo Tag */}
                <div className="ot-pc-logo" role="img" aria-label="Logo de la société" style={{backgroundImage: 'url("https://cdn.cookielaw.org/logos/4708a190-b1e8-4c46-8bde-12838e4eaa32/006bd2e8-872d-4227-861d-cf26c0f64c1c/fc7601b1-1544-4023-8371-18b980ec8c87/logo_tkww.png")', backgroundPosition: 'left'}} />
                <button id="close-pc-btn-handler" className="ot-close-icon" aria-label="Fermer" />
              </div>
              {/* Close Button */}
              <div id="ot-pc-content" className="ot-pc-scrollbar">
                <h2 id="ot-pc-title">Ne pas vendre mes données personnelles</h2>
                <div id="ot-pc-desc">
                  Lorsque vous visitez notre site Web, nous stockons des cookies sur votre navigateur pour collecter des
                  informations. Ces informations collectées peuvent être liées à vous, à vos préférences ou à votre appareil,
                  et sont principalement utilisées pour faire fonctionner le site comme vous le souhaitez et pour fournir une
                  expérience Web plus personnalisée. Toutefois, vous pouvez choisir de ne pas autoriser certains types de
                  cookies, ce qui peut avoir un impact sur votre expérience du site et des services que nous offrons. Cliquez
                  sur les différents titres de catégories pour en savoir plus et modifier nos paramètres par défaut selon vos
                  préférences. Vous ne pouvez pas vous désinscrire de nos Cookies Strictement Nécessaires internes lorsqu'ils
                  sont déployés afin d'assurer le bon fonctionnement de notre site Web (tels que pour afficher le bandeau des
                  cookies, pour vous connecter à votre compte, pour rediriger votre session lorsque vous quittez votre compte,
                  etc.) Pour plus d'Informations sur les cookies internes et de tiers utilisés, veuillez consulter le lien
                  suivant. <br /><a href="https://cookiepedia.co.uk/giving-consent-to-cookies" className="privacy-notice-link" rel="noopener" target="_blank" aria-label="Pour en savoir plus sur la protection de votre vie privée, s'ouvre dans un nouvel onglet">Plus d’informations</a>
                </div>
                <button id="accept-recommended-btn-handler">Tout autoriser</button>
                <section className="ot-sdk-row ot-cat-grp">
                  <h3 id="ot-category-title">Gérer les préférences de consentement</h3>
                  <div className="ot-accordion-layout ot-cat-item" data-optanongroupid="C0001">
                    <button aria-expanded="false" ot-accordion="true" aria-controls="ot-desc-id-C0001" aria-labelledby="ot-header-id-C0001" />{/* Accordion header */}
                    <div className="ot-acc-hdr ot-always-active-group">
                      <div className="ot-plus-minus"><span /><span /></div>
                      <h4 className="ot-cat-header" id="ot-header-id-C0001">Cookies strictement nécessaires</h4>
                      <div className="ot-always-active">Toujours actif</div>
                    </div>
                    {/* accordion detail */}
                    <div className="ot-acc-grpcntr ot-acc-txt">
                      <p className="ot-acc-grpdesc ot-category-desc" id="ot-desc-id-C0001">
                        Ces cookies sont strictement nécessaires pour le fonctionnement du Site Web. Elles permettent à
                        l'Utilisateur de naviguer sur le Site ainsi que d'utiliser les différentes options et services que le
                        Site leur offre. Sans elles, certaines fonctionnalités du Site Web ne fonctionneraient pas
                        correctement.
                      </p>
                    </div>
                  </div>
                  <div className="ot-accordion-layout ot-cat-item" data-optanongroupid="SPD_BG">
                    <button aria-expanded="false" ot-accordion="true" aria-controls="ot-desc-id-SPD_BG" aria-labelledby="ot-header-id-SPD_BG" />{/* Accordion header */}
                    <div className="ot-acc-hdr">
                      <div className="ot-plus-minus"><span /><span /></div>
                      <h4 className="ot-cat-header" id="ot-header-id-SPD_BG">Vente de données personnelles</h4>
                      <div className="ot-tgl">
                        <input type="checkbox" name="ot-group-id-SPD_BG" id="ot-group-id-SPD_BG" aria-checked="true" role="switch" className="category-switch-handler" data-optanongroupid="SPD_BG" defaultChecked aria-labelledby="ot-header-id-SPD_BG" />
                        <label className="ot-switch" htmlFor="ot-group-id-SPD_BG"><span className="ot-switch-nob" />
                          <span className="ot-label-txt">Vente de données personnelles</span></label>
                      </div>
                    </div>
                    {/* accordion detail */}
                    <div className="ot-acc-grpcntr ot-acc-txt">
                      <p className="ot-acc-grpdesc ot-category-desc" id="ot-desc-id-SPD_BG">
                        En vertu du CCPA de Californie, vous avez le droit de refuser que vos informations personnelles soient
                        vendues à des tierces parties. Ces cookies permettent de recueillir des informations à des fins
                        d’analyses et de statistiques et pour personnaliser les publicités ciblées que vous recevez. Utilisez
                        ce bouton pour refuser la vente de vos informations personnelles. Si vous décidez de refuser la vente
                        de vos données, vous ne recevrez pas de publicités personnalisées et nous ne vendrons pas vos
                        informations personnelles à aucun tiers. Veuillez noter que, si vous le désirez, vous pouvez contacter
                        notre service juridique pour obtenir plus de détails sur vos droits en tant que consommateur de
                        Californie. Pour cela, cliquez sur le lien Exercer ses droits. <br /><br />Si vous avez activé les
                        contrôles de sécurité dans votre navigateur (avec un plug-in par exemple), nous devons considérer que
                        votre opposition à la vente de vos données est valide. Nous ne pourrons donc pas suivre votre activité
                        en ligne. Cela est susceptible d’affecter notre capacité à vous proposer des publicités ciblées selon
                        vos préférences.
                      </p>
                      <div className="ot-subgrp-cntr">
                        <ul className="ot-subgrps">
                          <li className="ot-subgrp" data-optanongroupid="C0002">
                            <h5>Cookies d'analyse</h5>
                            <div className="ot-tgl-cntr ot-subgrp-tgl">
                              <div className="ot-tgl ot-hide-tgl">
                                <input type="checkbox" name="switch" id="ot-sub-group-id-C0002" aria-checked="false" role="switch" data-optanongroupid="C0002" className="cookie-subgroup-handler" aria-label="Cookies d'analyse" aria-hidden="true" />
                                <label className="ot-switch" htmlFor="ot-sub-group-id-C0002"><span className="ot-switch-nob" /> <span className="ot-label-txt">Switch Label</span></label>
                                <span className="ot-label-status">label</span>
                              </div>
                            </div>
                            <p className="ot-subgrp-desc">
                              Ces cookies tiers stockent des informations sur la manière dont les Utilisateurs interagissent
                              avec le contenu du Site Web, leur provenance, le navigateur qu'ils utilisent et la durée de leur
                              visite sur chaque page, entre d’autres. Elles sont utilisées pour mesurer les audiences et
                              produire des statistiques.
                            </p>
                          </li>
                        </ul>
                      </div>
                      <div className="ot-subgrp-cntr">
                        <ul className="ot-subgrps">
                          <li className="ot-subgrp" data-optanongroupid="C0005">
                            <h5>Cookies « réseaux sociaux »</h5>
                            <div className="ot-tgl-cntr ot-subgrp-tgl">
                              <div className="ot-tgl ot-hide-tgl">
                                <input type="checkbox" name="switch" id="ot-sub-group-id-C0005" aria-checked="false" role="switch" data-optanongroupid="C0005" className="cookie-subgroup-handler" aria-label="Cookies « réseaux sociaux »" aria-hidden="true" />
                                <label className="ot-switch" htmlFor="ot-sub-group-id-C0005"><span className="ot-switch-nob" /> <span className="ot-label-txt">Switch Label</span></label>
                                <span className="ot-label-status">label</span>
                              </div>
                            </div>
                            <p className="ot-subgrp-desc">
                              Ces cookies tiers permettent aux Utilisateurs de partager du contenu à travers les réseaux
                              sociaux. Ces cookies peuvent suivre la trace du navigateur de l'Utilisateur sur d'autres sites
                              web et créer un profil des intérêts de l'Utilisateur, ce qui peut avoir une incidence sur le
                              contenu montré à l'Utilisateur sur les autres sites web visités.
                            </p>
                          </li>
                        </ul>
                      </div>
                      <div className="ot-subgrp-cntr">
                        <ul className="ot-subgrps">
                          <li className="ot-subgrp" data-optanongroupid="C0004">
                            <h5>Cookies pour une publicité personnalisée</h5>
                            <div className="ot-tgl-cntr ot-subgrp-tgl">
                              <div className="ot-tgl ot-hide-tgl">
                                <input type="checkbox" name="switch" id="ot-sub-group-id-C0004" aria-checked="false" role="switch" data-optanongroupid="C0004" className="cookie-subgroup-handler" aria-label="Cookies pour une publicité personnalisée" aria-hidden="true" />
                                <label className="ot-switch" htmlFor="ot-sub-group-id-C0004"><span className="ot-switch-nob" /> <span className="ot-label-txt">Switch Label</span></label>
                                <span className="ot-label-status">label</span>
                              </div>
                            </div>
                            <p className="ot-subgrp-desc">
                              Ces cookies tiers stockent les informations comportementales de l'Utilisateur, obtenues à partir
                              de l'analyse de ses habitudes de navigation, et nous permettent ou permettent à des tiers de lui
                              montrer de la publicité en fonction du comportement et des intérêts de l'Utilisateur, ou de
                              suivre le comportement et l'efficacité des campagnes publicitaires.
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* Groups sections starts */}{/* Group section ends */}{/* Accordion Group section starts */}{/* Accordion Group section ends */}
                </section>
              </div>
              <section id="ot-pc-lst" className="ot-hide ot-hosts-ui ot-pc-scrollbar">
                <div id="ot-pc-hdr">
                  <div id="ot-lst-title">
                    <button className="ot-link-btn back-btn-handler" aria-label="Back">
                      <svg id="ot-back-arw" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 444.531 444.531" xmlSpace="preserve">
                        <title>Back Button</title>
                        <g>
                          <path fill="#656565" d="M213.13,222.409L351.88,83.653c7.05-7.043,10.567-15.657,10.567-25.841c0-10.183-3.518-18.793-10.567-25.835
                  l-21.409-21.416C323.432,3.521,314.817,0,304.637,0s-18.791,3.521-25.841,10.561L92.649,196.425
                  c-7.044,7.043-10.566,15.656-10.566,25.841s3.521,18.791,10.566,25.837l186.146,185.864c7.05,7.043,15.66,10.564,25.841,10.564
                  s18.795-3.521,25.834-10.564l21.409-21.412c7.05-7.039,10.567-15.604,10.567-25.697c0-10.085-3.518-18.746-10.567-25.978
                  L213.13,222.409z" />
                        </g>
                      </svg>
                    </button>
                    <h3>Performance Cookies</h3>
                  </div>
                  <div className="ot-lst-subhdr">
                    <div className="ot-search-cntr">
                      <p role="status" className="ot-scrn-rdr" />
                      <label htmlFor="vendor-search-handler" className="ot-scrn-rdr" />
                      <input id="vendor-search-handler" type="text" name="vendor-search-handler" />
                      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 -30 110 110" aria-hidden="true">
                        <title>Search Icon</title>
                        <path fill="#2e3644" d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23
          s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92
          c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17
          s-17-7.626-17-17S14.61,6,23.984,6z" />
                      </svg>
                    </div>
                    <div className="ot-fltr-cntr">
                      <button id="filter-btn-handler" aria-label="Filter" aria-haspopup="true">
                        <svg role="presentation" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 402.577 402.577" xmlSpace="preserve">
                          <title>Filter Icon</title>
                          <g>
                            <path fill="#fff" d="M400.858,11.427c-3.241-7.421-8.85-11.132-16.854-11.136H18.564c-7.993,0-13.61,3.715-16.846,11.136
    c-3.234,7.801-1.903,14.467,3.999,19.985l140.757,140.753v138.755c0,4.955,1.809,9.232,5.424,12.854l73.085,73.083
    c3.429,3.614,7.71,5.428,12.851,5.428c2.282,0,4.66-0.479,7.135-1.43c7.426-3.238,11.14-8.851,11.14-16.845V172.166L396.861,31.413
    C402.765,25.895,404.093,19.231,400.858,11.427z" />
                          </g>
                        </svg>
                      </button>
                    </div>
                    <div id="ot-anchor" />
                    <section id="ot-fltr-modal">
                      <div id="ot-fltr-cnt">
                        <button id="clear-filters-handler">Clear</button>
                        <div className="ot-fltr-scrlcnt ot-pc-scrollbar">
                          <div className="ot-fltr-opts">
                            <div className="ot-fltr-opt">
                              <div className="ot-chkbox">
                                <input id="chkbox-id" type="checkbox" aria-checked="false" className="category-filter-handler" />
                                <label htmlFor="chkbox-id"><span className="ot-label-txt">checkbox label</span></label>
                                <span className="ot-label-status">label</span>
                              </div>
                            </div>
                          </div>
                          <div className="ot-fltr-btns">
                            <button id="filter-apply-handler">Apply</button>
                            <button id="filter-cancel-handler">Cancel</button>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
                <section id="ot-lst-cnt" className="ot-host-cnt ot-pc-scrollbar">
                  <div id="ot-sel-blk">
                    <div className="ot-sel-all">
                      <div className="ot-sel-all-hdr">
                        <span className="ot-consent-hdr">Consent</span> <span className="ot-li-hdr">Leg.Interest</span>
                      </div>
                      <div className="ot-sel-all-chkbox">
                        <div className="ot-chkbox" id="ot-selall-hostcntr">
                          <input id="select-all-hosts-groups-handler" type="checkbox" aria-checked="false" />
                          <label htmlFor="select-all-hosts-groups-handler"><span className="ot-label-txt">checkbox label</span></label>
                          <span className="ot-label-status">label</span>
                        </div>
                        <div className="ot-chkbox" id="ot-selall-vencntr">
                          <input id="select-all-vendor-groups-handler" type="checkbox" aria-checked="false" />
                          <label htmlFor="select-all-vendor-groups-handler"><span className="ot-label-txt">checkbox label</span></label>
                          <span className="ot-label-status">label</span>
                        </div>
                        <div className="ot-chkbox" id="ot-selall-licntr">
                          <input id="select-all-vendor-leg-handler" type="checkbox" aria-checked="false" />
                          <label htmlFor="select-all-vendor-leg-handler"><span className="ot-label-txt">checkbox label</span></label>
                          <span className="ot-label-status">label</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ot-sdk-row"><div className="ot-sdk-column" /></div>
                </section>
              </section>
              <div className="ot-pc-footer">
                <div className="ot-btn-container">
                  <button className="save-preference-btn-handler onetrust-close-btn-handler">Confirmer la sélection</button>
                </div>
                {/* Footer logo */}
                <div className="ot-pc-footer-logo">
                  <a href="https://www.onetrust.com/products/cookie-consent/" target="_blank" rel="noopener noreferrer" style={{backgroundImage: 'url("https://cdn.cookielaw.org/logos/static/poweredBy_ot_logo.svg")'}} aria-label="Powered by OneTrust S'ouvre dans un nouvel onglet" />
                </div>
              </div>
              {/* Cookie subgroup container */}{/* Vendor list link */}{/* Cookie lost link */}{/* Toggle HTML element */}{/* Checkbox HTML */}{/* plus minus*/}{/* Arrow SVG element */}{/* Accordion basic element */}<span className="ot-scrn-rdr" aria-atomic="true" aria-live="polite" /><iframe className="ot-text-resize" title="onetrust-text-resize" style={{position: 'absolute', top: '-50000px', width: '100em'}} aria-hidden="true" />
            </div>
          </div>
        </div>
      )
    }
