using MongoDB.Bson;

namespace AngularPhonesDemo.Entities
{
    public class PhoneObject
    {
        public ObjectId Id { get; set; }
        public string Name { get; set; }
        public string Snippet { get; set; }
        public string ImageUrl { get; set; }
    }
}