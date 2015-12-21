using System.Collections.Generic;
using System.Linq;
using System.Web.Http;

namespace AngularPhonesDemo.Controllers
{
    public class PhoneObject
    {
        public int id { get; set; }
        public string name { get; set; }
        public string snippet { get; set; }
        public string imageUrl { get; set; }
    }

    public class PhoneRepo
    {
        public static List<PhoneObject> GetPhones()
        {
            return new List<PhoneObject>
            {
                new PhoneObject {id = 1, imageUrl = "http://cdn2.gsmarena.com/vv/bigpic/nokia-lumia-735.jpg", name = "Nokia Lumia 735", snippet = "The battle in the midrange has never been so intense and manufacturers have to work harder than ever to climb to prominence. Microsoft is surely feeling the heat from Android with makers, big and small, churning out solid and affordable phones that get the job done and sometimes even exceed expectations - for the price."},
                new PhoneObject {id = 2, imageUrl = "http://cdn2.gsmarena.com/vv/bigpic/apple-iphone-6s1.jpg", name = "iPhone 6s", snippet = "The more it changes, the harder it becomes to see the difference. And you know, it's not about Apple and the iPhone at all. It's where the industry has been heading for a while now. In the race for screen size and processing power, the major makers' flagships are like pro athletes finishing within milliseconds of each other. To get an extra edge, manufacturers will go in lots of directions - such as water proofing, bigger and sharper selfies, wireless charging, curved or borderless screens, whatnot."},
                new PhoneObject {id = 3, imageUrl = "http://cdn2.gsmarena.com/vv/bigpic/samsung-galaxy-tab-s-8.4.jpg", name = "Samsung Galaxy Tab S 8.4 LTE", snippet = "Ever since the 2011 unveiling of the Galaxy Tab 7.7 we've been waiting for the next generation of Super AMOLED tablets. Three years later they have arrived - the Samsung Galaxy Tab S duo comes in 10.5 sizes and like the Tab 7.7 before them, they are stunningly thin. Separate from the Galaxy Tab and Galaxy Note lines, the Galaxy Tab S tablets still share a lot with them. The powerful hardware platform, combined with proprietary TouchWiz features like Multi Window, instantly put the two at the forefront of functionality. Just look at that specs sheet."},
                new PhoneObject {id = 4, imageUrl = "http://cdn2.gsmarena.com/vv/bigpic/lg-google-nexus-5-.jpg", name = "LG Nexus 5", snippet = "Nexus phone releases are timed to let Google have the last word - and what a way to have it! A phone that matches any flagship on specs and premieres the latest OS version, but costs barely half as much as some of them. The Nexus 5 promises a great finale to yet another exciting smartphone season and it's not only the droids that stand to attention. This could have been a deja-vu moment for everybody but the fifth gen Google phone will probably have to work harder than ever. There's already a bunch of Snapdragon-800-powered Android flagships, while Qualcomm's latest is ticking inside Windows Phone-powered devices by Nokia too and Apple has the new 64-bit A7 chipset. On a second thought, Nexus phones have never been too keen on getting into the skirmish, keeping their distance, aloof and somewhat out of touch, nothing to prove to anyone. The best of Google on your homescreen - that's what it's all about - and at a price that's almost too good to be true."},
                new PhoneObject {id = 5, imageUrl = "http://cdn2.gsmarena.com/vv/bigpic/microsoft-lumia-950-xl--.jpg", name = "Microsoft Lumia 950 XL", snippet = "Microsoft Lumia 950 XL, the long-awaited comeback of the Windows phone phablet, is eagerly anticipated by every fan of the brand. It makes use of one of the best hardware around and it's the perfect demo platform for all newly introduced Windows 10 Mobile features. The improvements that the Lumia 950 XL has compared to the Lumia 950 include the bigger screen (5.7'' vs. 5.2'') and the beefier chipset (an eight-core Snapdragon 810 vs. a six-core Snapdragon 808). The new liquid cooling system is also welcome, and hopefully it can take off some of the extra the heat generated while playing games or using Windows Continuum."}
            };
        }
    }

    public class PhonesController : ApiController
    {
        [HttpGet]
        public List<PhoneObject> GetPhones()
        {
            return PhoneRepo.GetPhones();
        }

        [HttpGet]
        public PhoneObject Get(int id)
        {
            return PhoneRepo.GetPhones().FirstOrDefault(x => x.id == id);
        }
    }
}
