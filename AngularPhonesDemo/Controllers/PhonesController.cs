using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Web.Http;
using MongoDB.Bson;
using MongoDB.Driver;
using MongoDB.Driver.Builders;

namespace AngularPhonesDemo.Controllers
{
    public class PhonesController : ApiController
    {
        readonly MongoCollection<PhoneObject> _collection;
        public PhonesController()
        {
            var connectionstring = ConfigurationManager.AppSettings.Get("MONGOLAB_URI");
            var url = new MongoUrl(connectionstring);
            var client = new MongoClient(url);
            var server = client.GetServer();
            var database = server.GetDatabase(url.DatabaseName);

            _collection = database.GetCollection<PhoneObject>("PhoneObjects");
        }
        [HttpGet]
        public List<PhoneObject> GetPhones()
        {
            return _collection.FindAll().ToList();
        }

        [HttpGet]
        public PhoneObject Get(string id)
        {
            var phone = _collection.FindOneAs<PhoneObject>(Query.EQ("_id", ObjectId.Parse(id)));
            return phone;
        }
    }
}
