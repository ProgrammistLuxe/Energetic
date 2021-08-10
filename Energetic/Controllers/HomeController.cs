
using Energetic.Domain;
using Energetic.Models;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Energetic.Models.Club.Players;
using Energetic.Models.Club.Index;

namespace Energetic.Controllers
{
    public class HomeController : Controller
    {


        private readonly IDataService _dataService;

        /*------------------------------------*/
        public HomeController(IDataService dataService)
        {
            _dataService = dataService;
        }
        public ActionResult index()
        {
            Index index = new Index
            {
                Photo = _dataService.GetMainPhotoUsualInformationByID(2),
                Cubs = _dataService.GetCub()
            };
            return View("index", index);
        }

     

        public ActionResult footer()
        {
            var partners = _dataService.GetContacts(2); 
            return View("footer",partners);
        }


        /*----------------Club----------------*/
        public ActionResult usualInformation()
        {
            var usualInformation = _dataService.GetMainPhotoUsualInformationByID(1);
            return View("Club/usualInformation",usualInformation);
        }
        public ActionResult managment()
        {
            var management = _dataService.GetPersonal(2); 
            return View("Club/managment",management);
        }
        public ActionResult Contacts()
        {
            var contacts = _dataService.GetContacts(1);          
            return View("Club/contacts", contacts);
        }
        public ActionResult stadiums()
        {
            var stadiums = _dataService.GetStadium();
            return View("Club/stadiums",stadiums);
        }
        public ActionResult history()
        {
            var history = _dataService.GetHistory(); 
            return View("Club/history",history);
        }

        /*----------------Team----------------*/
        public ActionResult coachs()
        {
            var coachs = _dataService.GetPersonal(1);
            return View("Team/coachs",coachs);
        }
        public ActionResult legends()
        {
            var legends = _dataService.GetPersonal(3);
            return View("Team/legends",legends);
        }
        public ActionResult mainPlayers()
        {
            ActiveTeam mainPlayers = new ActiveTeam
            {
                Goalkeepers = _dataService.GetPlayerByType("Вратарь",true),
                Defenders = _dataService.GetPlayerByType("Защитник", true),
                Midfielders = _dataService.GetPlayerByType("Полузащитник", true),
                Forwards = _dataService.GetPlayerByType("Нападающий", true)
            };
            return View("Team/mainPlayers",mainPlayers);
        }

        /*----------------Statistic----------------*/
        public ActionResult players()
        {
            ActiveTeam Players = new ActiveTeam
            {
                Goalkeepers = _dataService.GetPlayerByType("Вратарь", false),
                Defenders = _dataService.GetPlayerByType("Защитник", false),
                Midfielders = _dataService.GetPlayerByType("Полузащитник", false),
                Forwards = _dataService.GetPlayerByType("Нападающий", false)
            };
            return View("Statistic/players",Players);
        }
        public ActionResult team()
        {
            var Team = _dataService.GetTeam();
            return View("Statistic/team",Team);
        }

        public ActionResult player(int id)
        {
            var Player = _dataService.GetPlayerByID(id);
            return View("Statistic/player",Player);
        }


        /*----------------Multimedia----------------*/
        public ActionResult albums()
        {
            var Albums = _dataService.GetAlbum();

            return View("Multimedia/albums",Albums);
        }
        public ActionResult video()
        {
            var Video = _dataService.GetVideo();
            return View("Multimedia/video",Video);
        }

        public ActionResult album(int Id)
        {
            var Album = _dataService.GetAlbumByID(Id);
            return View("Multimedia/album",Album);
        }

        /*-------------------------------------*/
      /*  Контроллеры для ENERGETIC-ADMIN*/



            public ActionResult Index_admin()
            {
                Index index = new Index
                {
                };

                return View("ENRGETIC-ADMIN_VIEWS/Index_admin", index);
            }





            public ActionResult main_admin()
            {

                Index_admin main = new Index_admin
                {
                    Photo = _dataService.GetMainPhotoUsualInformationByID(2),
                    Cubs = _dataService.GetCub(),
                    Partners = _dataService.GetContacts(2)
                };
                return View("ENRGETIC-ADMIN_VIEWS/Main_admin", main);
            }

            public ActionResult Video_admin()
            {
                var Video = _dataService.GetVideo();

                return View("ENRGETIC-ADMIN_VIEWS/Multimedia/Video", Video);
            }
            public ActionResult Gallery()
            {

                var Albums = _dataService.GetAlbum();
                return View("ENRGETIC-ADMIN_VIEWS/Multimedia/Gallery", Albums);
            }
            public ActionResult Players_admin()
            {
                ActiveTeam Players = new ActiveTeam
                {
                    Goalkeepers = _dataService.GetPlayerByType("Вратарь", false),
                    Defenders = _dataService.GetPlayerByType("Защитник", false),
                    Midfielders = _dataService.GetPlayerByType("Полузащитник", false),
                    Forwards = _dataService.GetPlayerByType("Нападающий", false)
                };

                return View("ENRGETIC-ADMIN_VIEWS/Team/Players", Players);
            }
            public ActionResult Coach()
            {
                var coachs = _dataService.GetPersonal(1);
                return View("ENRGETIC-ADMIN_VIEWS/Team/coachs", coachs);

            }
            public ActionResult Hall()
            {
                var legends = _dataService.GetPersonal(3);
                return View("ENRGETIC-ADMIN_VIEWS/Team/Hall", legends);

            }
            public ActionResult Bosses()
            {
                var management = _dataService.GetPersonal(2);

                return View("ENRGETIC-ADMIN_VIEWS/Team/Bosses", management);
            }

            public ActionResult Global_info()
            {
                var usualInformation = _dataService.GetMainPhotoUsualInformationByID(1);

                return View("ENRGETIC-ADMIN_VIEWS/Club/Global_info", usualInformation);

            }

            public ActionResult Contacts_admin()
            {

                var contacts = _dataService.GetContacts(1);
                return View("ENRGETIC-ADMIN_VIEWS/Club/Contacts", contacts);
            }

            public ActionResult History_admin()
            {
                var history = _dataService.GetHistory();

                return View("ENRGETIC-ADMIN_VIEWS/Club/History", history);
            }

            public ActionResult Stadium()
            {
                var stadiums = _dataService.GetStadium();

                return View("ENRGETIC-ADMIN_VIEWS/Club/Stadium", stadiums);
            }

            public ActionResult Statistics()
            {
                var Team = _dataService.GetTeam();

                return View("ENRGETIC-ADMIN_VIEWS/Club/Statistics", Team);
            }


            /*------------------------------------*/


        }
 }



