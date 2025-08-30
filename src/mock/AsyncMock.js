import farmBudgie from "../assets/bird/food/farm-budgie.jpg";
import lillebroInsects from "../assets/bird/food/lillebro-insects.jpg";
import prestigeParakeet from "../assets/bird/food/prestige-parakeet.jpg";
import prestigePremium from "../assets/bird/food/prestige-premium.jpg";
import tiakiLadder from "../assets/bird/toys/tiaki-ladder.jpg";
import tiakiSuspension from "../assets/bird/toys/tiaki-suspension.jpg";
import trixieSwing from "../assets/bird/toys/trixie-swing.jpg";
import trixieTower from "../assets/bird/toys/trixie-tower.jpg";

import cozyCave from "../assets/cat/bed/cozy-cave.jpg";
import radiatorBed from "../assets/cat/bed/radiator-bed.jpg";
import trixieCave from "../assets/cat/bed/trixie-cave.jpg";
import trixiePost from "../assets/cat/bed/trixie-post.jpg";
import wallBed from "../assets/cat/bed/wall-bed.jpg";

import hillsKitten from "../assets/cat/food/hills-kitten.jpg";
import hillsOralCare from "../assets/cat/food/hills-oral-care.jpg";
import purizonChicken from "../assets/cat/food/purizon-chicken.jpg";
import purizonGrainFree from "../assets/cat/food/purizon-grain-free.jpg";
import royalAdult from "../assets/cat/food/royal-adult.jpg";
import royalCoonAdult from "../assets/cat/food/royal-coon-adult.jpg";
import royalDentalCare from "../assets/cat/food/royal-dental-care.jpg";
import royalSterilized from "../assets/cat/royal-sterilized.jpg";

import roundCarousel from "../assets/cat/toys/round-carousel.jpg";
import scratchingPost from "../assets/cat/toys/scratching-post.jpg";
import setBalls from "../assets/cat/toys/set-balls.jpg";
import squeakyMouse from "../assets/cat/toys/squeaky-mouse.jpg";
import toyComporta from "../assets/cat/toys/toy-comporta.jpg";
import tunnel from "../assets/cat/toys/tunnel.jpg";

import blanketPaw from "../assets/dog/bed/blanket-paw.jpg";
import cozyBed from "../assets/dog/bed/cozy-bed.jpg";
import cozyBlanket from "../assets/dog/bed/cozy-blanket.jpg";
import mattressSoft from "../assets/dog/bed/mattress-soft.jpg";

import microfiberBathrobe from "../assets/dog/clothes/microfiber-bathrobe.jpg";
import rainJacket from "../assets/dog/clothes/rain-jacket.jpg";
import softHarness from "../assets/dog/clothes/soft-harness.jpg";
import trixieCollar from "../assets/dog/clothes/trixie-collar.jpg";

import eukaGoldenRetriever from "../assets/dog/food/euka-golden-retriever.jpg";
import eukaSensitiveSkin from "../assets/dog/food/euka-sensitive-skin.jpg";
import hillsPerfectWeight from "../assets/dog/food/hills-perfect-weight.jpg";
import hillsPuppy from "../assets/dog/food/hills-puppy.jpg";
import hillsSensitiveStomach from "../assets/dog/food/hills-sensitive-stomach.jpg";
import royalGoldenRetriever from "../assets/dog/food/royal-golden-retriever.jpg";
import royalHypoallergenic from "../assets/dog/food/royal-hypoallergenic.jpg";
import royalMiniAdult from "../assets/dog/food/royal-mini-adult.jpg";

import kongBalls from "../assets/dog/toys/kong-balls.jpg";
import talkingButtons from "../assets/dog/toys/talking-buttons.jpg";
import tiakiAvocado from "../assets/dog/toys/tiaki-avocado.jpg";
import tiakiOctopus from "../assets/dog/toys/tiaki-octopus.jpg";
import trixieRope from "../assets/dog/toys/trixie-rope.jpg";

import tabiminPellets from "../assets/fish/food/tabimin-pellets.jpg";
import tetrapondGarden from "../assets/fish/food/tetrapond-garden.jpg";
import tetrapondKoi from "../assets/fish/food/tetrapond-koi.jpg";
import tetraponMulticrips from "../assets/fish/food/tetrapon-multicrips.jpg";

import caviaGuinea from "../assets/rodents/food/cavia-guinea.jpg";
import crispyHamsters from "../assets/rodents/food/crispy-hamsters.jpg";
import crispyMuesli from "../assets/rodents/food/crispy-muesli.jpg";
import crispyRabbit from "../assets/rodents/food/crispy-rabbit.jpg";

import playpenSunProtection from "../assets/rodents/toys/playpen-sun-protection.jpg";
import snacky from "../assets/rodents/toys/snacky.jpg";
import trixieBall from "../assets/rodents/toys/trixie-ball.jpg";
import tunnelRodents from "../assets/rodents/toys/tunnel.jpg";

const products = [
	{
		id: 1,
		title: "JR Farm Individual Budgie",
		description:
			"The premium bird food from JR Farm is a species-appropriate, rich everyday food that is specially adapted to the special needs of budgies.",
		price: 79.9,
		petType: "bird",
		productType: "food",
		image: farmBudgie,
	},
	{
		id: 2,
		title: "Lillebro Fat Pills with Insects",
		description:
			"Lillebro's fat pellets are a delicious energy source that will attract many different birds to your garden like a magnet. The refinement with tasty mealworms makes them even more attractive.",
		price: 84.9,
		petType: "bird",
		productType: "food",
		image: lillebroInsects,
	},
	{
		id: 3,
		title: "Parakeets Prestige",
		description:
			"The premium seed mix in Versele-Laga Prestige Parakeet bird food provides balanced nutrition with all essential vitamins. This food is the best prerequisite for a strong plumage, magnificent and natural colors.",
		price: 151.9,
		petType: "bird",
		productType: "food",
		image: prestigeParakeet,
	},
	{
		id: 4,
		title: "Prestige Premium Budgies",
		description:
			"The valuable seed mixture in Prestige Premium Budgies - Budgie Food provides a well-balanced diet with all essential vitamins. This bird food is the best prerequisite for a strong plumage with magnificent, natural colors and a vital life.",
		price: 284.9,
		petType: "bird",
		productType: "food",
		image: prestigePremium,
	},
	{
		id: 5,
		title: "TIAKI bird ladder",
		description:
			"Make your feathered friends' home better with the TIAKI bird ladder - a small masterpiece made of wood , specially developed for the needs of small and medium-sized birds. This robust bird rope fits harmoniously into any bird cage and is easy to install in different places thanks to the practical hooks.",
		price: 21.9,
		petType: "bird",
		productType: "toys",
		image: tiakiLadder,
	},
	{
		id: 6,
		title: "TIAKI suspension bridge in colorful design",
		description:
			"Add a splash of colour to your feathered friends' home and offer them a playful challenge with the colourful TIAKI hanging bridge!  Made from natural wood , this bird bridge is completely safe for your birds and offers a safe environment for climbing and playing. The flexibility of the ladder allows you to take it in any shape – from a simple bridge to an exciting climbing landscape.",
		price: 49.9,
		petType: "bird",
		productType: "toys",
		image: tiakiSuspension,
	},
	{
		id: 7,
		title: "Trixie Bird Swing Nature",
		description:
			"Create a birdhouse where there is always enough activity and variety - for a happy bird life. Swings are among the accessories that should not be missing.",
		price: 25.9,
		petType: "bird",
		productType: "toys",
		image: trixieSwing,
	},
	{
		id: 8,
		title: "Trixie Gantry Ladder Tower",
		description:
			"Toy made of natural wood with bells to hang in the cage, for canaries, parakeets and lovebirds",
		price: 56.9,
		petType: "bird",
		productType: "toys",
		image: trixieTower,
	},
	{
		id: 9,
		title: "Cozy cave Big Baby",
		description:
			"Who's that peeking out of the cave? Two shells of stable synthetic felt together form this spacious cat cave, where your baby can hide!The cozy cave is equipped with a removable cushion and is a warm, draft-proof shelter for your velvet paw.",
		price: 127.9,
		petType: "cat",
		productType: "bed",
		image: cozyCave,
	},
	{
		id: 10,
		title: "Radiator bed Relax",
		description:
			"Is a nice, warm radiator a surefire way to make your cat purr with pleasure? Then the cuddly radiator bed will! Here the cat can lie down and gasp on a surface made of soft and lovely sheepskin plush, and the bed can be hung on the radiator in no time and without the use of tools. The soft surface is the perfect place for your cat to make themselves really comfortable and enjoy a little nap or two.",
		price: 68.9,
		petType: "cat",
		productType: "bed",
		image: radiatorBed,
	},
	{
		id: 11,
		title: "Trixie Minou Cat Cave",
		description:
			"This cozy den is just the thing for your cat. The cover is made of plush and has an easy-to-clean nylon bottom. The den is lined with fleece, which makes it extra soft and cozy. The entrance to the den has the cutest fringe.",
		price: 137.9,
		petType: "cat",
		productType: "bed",
		image: trixieCave,
	},
	{
		id: 12,
		title: "Trixie Baza Scratching Post",
		description:
			"If you are looking for a scratching post that doesn't take up much space and yet gives your cat everything it needs for a royal cat life, then the Trixie Baza scratching post is the right choice: Here your cat can scratch, play and relax as much as it wants, while the discreet cat furniture integrates harmoniously into your home.",
		price: 184.9,
		petType: "cat",
		productType: "bed",
		image: trixiePost,
	},
	{
		id: 13,
		title: "Natural Paradise Wall bed Dahlia",
		description:
			"The natural paradise is the best proof of your owner's respect for what you are and who you are: much more than a pet. You are a beloved member of the family and you deserve a comfortable and appreciative environment where you can feel at home. That's what we work passionately on.",
		price: 219.9,
		petType: "cat",
		productType: "bed",
		image: wallBed,
	},
	{
		id: 14,
		title: "Hill's Science Plan Kitten chicken",
		description:
			"Hill's Science Plan Kitten Chicken has been developed to ensure a good start to an exciting cat's life. The dry food provides plenty of energy and all the essential nutrients needed for optimal development in your kitten. ",
		price: 422.9,
		petType: "cat",
		productType: "food",
		image: hillsKitten,
	},
	{
		id: 15,
		title: "Hill's Science Plan Adult Oral Care Chicken",
		description:
			"The unique, specially formulated kibble in Hill's Science Plan Adult Oral Care Chicken can clean your cat's teeth and use mechanical abrasion to remove plaque with each bite. This can reduce the risk of bad breath and tartar buildup and promote oral hygiene.",
		price: 582.9,
		petType: "cat",
		productType: "food",
		image: hillsOralCare,
	},
	{
		id: 16,
		title: "Purizon Adult Chicken & Fish - grain free",
		description:
			"Purizon is a high-quality dry cat food that is based on the needs of the carnivorous cat. Due to its high proportion of animal ingredients of 70%, Purizon is extra rich in protein .",
		price: 245.9,
		petType: "cat",
		productType: "food",
		image: purizonChicken,
	},
	{
		id: 17,
		title: "Purizon Kitten Chicken & Fish - grain free",
		description:
			"Purizon kitten food is based on the cat's natural diet. Cats are carnivores. That's why Purizon has developed a food with a fish content of 70% - consisting of lots of freshly caught herring from the North Sea, as well as nutritious ingredients such as herring oil - completely grain-free.",
		price: 244.9,
		petType: "cat",
		productType: "food",
		image: purizonGrainFree,
	},
	{
		id: 18,
		title: "Royal Canin Adult 12+",
		description:
			"As cats get older, their needs change. Royal Canin Ageing 12+ recognises these and caters for them. As the sense of smell and taste can weaken with age, the food is designed to be particularly appetising.",
		price: 284.9,
		petType: "cat",
		productType: "food",
		image: royalAdult,
	},
	{
		id: 19,
		title: "Royal Canin Maine Coon Adult",
		description:
			"The Maine Coon combines the wild appearance of the wildcat with the lovable nature of the domestic cat. Cats of this breed reach an impressive size and can weigh three times as much as an average cat due to their strong build. ",
		price: 684.9,
		petType: "cat",
		productType: "food",
		image: royalCoonAdult,
	},
	{
		id: 20,
		title: "Royal Canin Dental Care",
		description:
			"Thanks to a dental care active nutrient that binds to the calcium in your cat's saliva, it can reduce the risk of tartar formation. In addition, the specially developed kibble promotes prolonged chewing, which through mechanical abrasion can support a ' toothbrushing effect'.",
		price: 284.9,
		petType: "cat",
		productType: "food",
		image: royalDentalCare,
	},
	{
		id: 21,
		title: "Royal Canin Sterilized",
		description:
			"Neutering changes a cat's metabolism. Royal Canin Sterilised 37 is perfectly adapted to this change. A balanced energy content and fat content can ensure that your cat can get exactly the amount of energy it needs.",
		price: 314.9,
		petType: "cat",
		productType: "food",
		image: royalSterilized,
	},
	{
		id: 22,
		title: "Round About cat carousel",
		description:
			"Here, cat hearts beat faster. With a light push of the paws, the ball will spin around like a whirlwind. The holes in the lid will animate your cat to wild hunting games. While your cat will try to grab the ball through the holes, it will just keep whirling around and around.",
		price: 26.9,
		petType: "cat",
		productType: "toys",
		image: roundCarousel,
	},
	{
		id: 23,
		title: "Scratching post Welle",
		description:
			"The perfect addition to your scratching post. Robust scratching post made of corrugated cardboard in a wave shape. Perfect for sharpening claws and cuddling. Includes catnip bag.",
		price: 24.9,
		petType: "cat",
		productType: "toys",
		image: scratchingPost,
	},
	{
		id: 24,
		title: "Cat toy set with balls & mice",
		description:
			"With this cat toy set, you can make any type of cat happy: 12 toys provide entertainment and variety. The set includes 6 toy mice and 6 balls, each in two different shapes. Your indoor cat is guaranteed to find his new favorite toy here!",
		price: 42.9,
		petType: "cat",
		productType: "toys",
		image: setBalls,
	},
	{
		id: 25,
		title: "Teaser with squeaky mouse",
		description:
			"Inside the mouse there is a sound chip. Just at the slightest touch, a real mouse sound is heard, stimulating the hunting instinct of your cat and animating it to play. The mouse is attached to a rubber cord. With the tease stick you can keep your cat busy for many wonderful hunting hours.",
		price: 14.9,
		petType: "cat",
		productType: "toys",
		image: squeakyMouse,
	},
	{
		id: 26,
		title: "Modern Living interactive cat toy Comporta",
		description:
			"Discover the Modern Living interactive cat toy Comporta, the perfect toy for your cat. This cat toy is made from natural, environmentally friendly and safe materials to give your furry friend the best play experience.",
		price: 73.9,
		petType: "cat",
		productType: "toys",
		image: toyComporta,
	},
	{
		id: 27,
		title: "Cat tunnel Natural",
		description:
			"An adventure playground for your indoor cat: the Natural cat tunnel is a place where you can play hide and seek. The Natural cat tunnel gets its name from the durable and soft linen structure with a high cotton content, which makes the tunnel so cozy.",
		price: 117.9,
		petType: "cat",
		productType: "toys",
		image: tunnel,
	},
	{
		id: 28,
		title: "Dog Blanket Paw, black/grey",
		description:
			"Isobed SL dog blanket Paw is not only incredibly soft, but also hypoallergenic and therefore perfect for dogs that suffer from allergies, or as a base in the dog basket. The pattern with the fine paws makes the dog blanket perfect for all kinds of situations.",
		price: 192.9,
		petType: "dog",
		productType: "bed",
		image: blanketPaw,
	},
	{
		id: 29,
		title: "Cozy bed Basic",
		description:
			"Lovely soft pet bed with faux fur, discreet colours that fit in anywhere, easy to clean - can be washed in the washing machine (cold water) , with nice paw application, 100% polyester. Colour: brown/beige.",
		price: 136.9,
		petType: "dog",
		productType: "bed",
		image: cozyBed,
	},
	{
		id: 30,
		title: "Trixie Kenny Cozy Blanket",
		description:
			"Whether as a protector for your sofa or as a cozy mat in the basket: the Trixie Kenny cozy blanket is versatile. The cozy blanket can be washed at up to 60°C, which reliably removes dust mites, skin flakes and pollen. This makes it ideal for allergy sufferers. ",
		price: 69.9,
		petType: "dog",
		productType: "bed",
		image: cozyBlanket,
	},
	{
		id: 31,
		title: "Dog mattress Strong & Soft",
		description:
			"The name says it all with the Strong & Soft dog mattress: the easy-care dog cushion is characterised by its robust and durable properties and provides your dog with a high level of lying comfort. The intelligent zip system means that you can turn it over and use it on both sides.",
		price: 302.9,
		petType: "dog",
		productType: "bed",
		image: mattressSoft,
	},
	{
		id: 32,
		title: "Microfiber bathrobe for dogs",
		description:
			"Whether you're home after a wet walk, a visit to the swimming pool, at the lake or just after a bath at home, the microfiber bathrobe is practical and pure coziness! Thanks to the absorbent microfibers , the bathrobe is characterized by very good moisture absorption. ",
		price: 127.9,
		petType: "dog",
		productType: "clothes",
		image: microfiberBathrobe,
	},
	{
		id: 33,
		title: "Dog rain jacket Illume Nite Neon",
		description:
			"Dangerous situations can arise on walks in the dark. Cloudy weather and rain-soaked streets reduce visibility. The Illume Nite Neon dog rain jacket guarantees the highest level of safety for your dog thanks to its reflective stripes and wide, eye-catching neon yellow back.",
		price: 126.9,
		petType: "dog",
		productType: "clothes",
		image: rainJacket,
	},
	{
		id: 34,
		title: "Dog soft harness Feel Free",
		description:
			"The Feel Free dog soft harness is very stable and yet extremely light due to the special nylon fabric. Your dog is not unnecessarily stressed and is not hindered in its freedom of movement. The silver-colored edges and stripes reflect light and give you and your doggy even more safety in the dark.",
		price: 87.9,
		petType: "dog",
		productType: "clothes",
		image: softHarness,
	},
	{
		id: 35,
		title: "Trixie collar with paw motif and reflector, silver",
		description:
			"When you walk your dog at dusk or in the evening, your dog can easily be overlooked by drivers or other road users. To avoid dangerous situations, make sure to make your dog visible in traffic. The reflective collar from Trixie with paw motif and reflector in silver is perfect for this.",
		price: 39.9,
		petType: "dog",
		productType: "clothes",
		image: trixieCollar,
	},
	{
		id: 36,
		title: "Eukanuba Adult Breed Specific Golden Retriever",
		description:
			"Friendly, easygoing, curious and adventurous – Golden Retrievers are one of the most popular family dogs for good reason. Eukanuba Adult Breed Specific Golden Retriever is developed specifically for adult Golden Retrievers.",
		price: 377.9,
		petType: "dog",
		productType: "food",
		image: eukaGoldenRetriever,
	},
	{
		id: 37,
		title: "Eukanuba Adult Daily Care Sensitive Skin",
		description:
			"Eukanuba Adult Daily Care Sensitive Skin is specially tailored to the needs of dogs with sensitive skin. The special recipe ensures maximum well-being, as ingredients that cause itching and skin irritation are avoided. Proteins from easily digestible fish ensure plenty of vitamins, while promoting strong and lean muscle mass.",
		price: 368.9,
		petType: "dog",
		productType: "food",
		image: eukaSensitiveSkin,
	},
	{
		id: 38,
		title: "Hill's Science Plan Adult 1+ Perfect Weight Medium Chicken",
		description:
			"Hill's Science Plan Adult 1+ Perfect Weight Medium with Chicken is a high-quality dog ​​food that has been specially developed to help manage the weight of adult medium-breed dogs.",
		price: 523.9,
		petType: "dog",
		productType: "food",
		image: hillsPerfectWeight,
	},
	{
		id: 39,
		title: "Hill's Science Plan Puppy <1 Large with Chicken",
		description:
			"For your puppy to develop optimally, a special food is required that ensures it has all the important nutrients in the first year of life. Hill's Science Plan Puppy <1 Large Chicken is developed for puppies of large breeds and can support healthy growth with its balanced recipe.",
		price: 522.9,
		petType: "dog",
		productType: "food",
		image: hillsPuppy,
	},
	{
		id: 40,
		title: "Hill's Science Plan Adult 1+ Sensitive Stomach & Skin Medium",
		description:
			"Hill's Science Plan Adult 1+ Sensitive Stomach & Skin Medium with Chicken is a balanced dry food especially for adult dogs with a sensitive stomach. It is enriched with prebiotic fibers that can support intestinal flora and gentle digestion.",
		price: 586.9,
		petType: "dog",
		productType: "food",
		image: hillsSensitiveStomach,
	},
	{
		id: 41,
		title: "Royal Canin Golden Retriever Adult",
		description:
			"The Golden Retriever is an exceptionally loving, friendly and reliable dog. And just as unique as your dog is, its food should be too. All Royal Canin products therefore undergo extensive quality control to ensure optimal food quality and to be able to meet your dog's individual nutritional needs and lifestyle.",
		price: 512.9,
		petType: "dog",
		productType: "food",
		image: royalGoldenRetriever,
	},
	{
		id: 42,
		title: "Royal Canin Veterinary Canine Hypoallergenic",
		description:
			"This dog food diet contains selected hydrolyzed proteins . Royal Canin Veterinary Diet Hypoallergenic has a special recipe that can support your dog's natural skin barrier. In addition, the valuable omega-3 fatty acids EPA and DHA can promote digestibility and intestinal function. ",
		price: 873.9,
		petType: "dog",
		productType: "food",
		image: royalHypoallergenic,
	},
	{
		id: 43,
		title: "Royal Canin Veterinary Canine Hypoallergenic Small Dog",
		description:
			"Specially developed for small breed dogs with sensitive digestion: Royal Canin Veterinary Canine Hypoallergenic Small Dog is a complete dietetic dry food that is characterised by good digestibility thanks to its hypoallergenic recipe. The dog food is made from selected, easily digestible ingredients and contains ingredients that can support skin and digestion.",
		price: 373.9,
		petType: "dog",
		productType: "food",
		image: royalMiniAdult,
	},
	{
		id: 44,
		title: "KONG SqueakAir Balls",
		description:
			"The tennis ball - the most important tool for tennis players and at the same time the favorite toy of many dogs! In fact, due to its size and material, there is hardly any other ball better suited for retrieving. KONG SqueakAir Balls are tennis balls specially developed for dogs, which are also equipped with an integrated squeaker , which ensures even more fun than a conventional tennis ball.",
		price: 38.9,
		petType: "dog",
		productType: "toys",
		image: kongBalls,
	},
	{
		id: 45,
		title: "TIAKI Pet Talking Buttons",
		description:
			"Do you want to learn to understand your pet even better? TIAKI Pet Talking Buttons <Let's Talk!> are specially designed to enrich the interaction between you and your pet. With a recording time of 30 seconds, you can record individual messages or commands that your dog can then retrieve with a simple paw press .",
		price: 254.9,
		petType: "dog",
		productType: "toys",
		image: talkingButtons,
	},
	{
		id: 46,
		title: "TIAKI snuff mat avocado",
		description:
			"The TIAKI sniffing mat in a cheerful avocado design awakens your dog's inner detective nose and offers an exciting, mentally stimulating play experience. With its spiral core and multi-layered structure of the fruit pulp, this mat offers various sniffing options and numerous hiding places for treats or dry food.",
		price: 119.9,
		petType: "dog",
		productType: "toys",
		image: tiakiAvocado,
	},
	{
		id: 47,
		title: "TIAKI Octopus Dog Toy",
		description:
			"With the lovely TIAKI dog toy octopus you make your beloved four-legged friend a special joy: The dog toy is shaped like a cute octopus and invites you to play together , which is not only fun, but also strengthens the bond between you and your dog.",
		price: 45.9,
		petType: "dog",
		productType: "toys",
		image: tiakiOctopus,
	},
	{
		id: 48,
		title: "Trixie Colorful Play Rope",
		description:
			"Dogs love to test their strength when they play. By pulling on the play rope, you as the owner can really test your strength with your dog. Dogs enjoy these shared playtimes, but they shouldn't always win the game.",
		price: 7.9,
		petType: "dog",
		productType: "toys",
		image: trixieRope,
	},
	{
		id: 49,
		title: "Tetra Tablets TabiMin feed pellets",
		description:
			"Targeted and varied nutrition for ornamental fish that live in the lower water layers - such as catfish, bream and carp",
		price: 74.9,
		petType: "fish",
		productType: "food",
		image: tabiminPellets,
	},
	{
		id: 50,
		title: "TetraPond Sticks garden pond food",
		description:
			"TetraPond pond food sticks contain all the essential nutrients and ballast substances, vitamins and trace elements that your pond fish need. The floating sticks are well absorbed by the fish. Due to their excellent digestibility, they have a minimal impact on the water and thus improve water quality.",
		price: 75.9,
		petType: "fish",
		productType: "food",
		image: tetrapondGarden,
	},
	{
		id: 51,
		title: "TetraPond koi food sticks",
		description:
			"TetraPond koi food sticks contain all the essential nutrients, vitamins and trace elements for species-appropriate nutrition for your koi fish. High-quality carotenoids as natural colour enhancers make the red, yellow and orange colour pigments shine.",
		price: 106.9,
		petType: "fish",
		productType: "food",
		image: tetrapondKoi,
	},
	{
		id: 52,
		title: "TetraPro Colour multi-crips",
		description:
			"The new TetraPro Colour multi-crips combine the benefits of Tetra complete food with that little extra plus for your fish.",
		price: 78.9,
		petType: "fish",
		productType: "food",
		image: tetraponMulticrips,
	},
	{
		id: 53,
		title: "Versele-Laga Cavia Complete guinea pig",
		description:
			"Cavia Complete is a tasty complete food for guinea pigs in extrudate form. Each bite contains the same balanced mix of ingredients that is optimally adapted to the nutritional physiology of guinea pigs. This eliminates the need for individual feed selection. No grain kernels are used.",
		price: 304.9,
		petType: "rodents",
		productType: "food",
		image: caviaGuinea,
	},
	{
		id: 54,
		title: "Versele-Laga Crispy Muesli for hamsters & co.",
		description:
			"Versele-Laga Crispy Muesli for hamsters is a high-quality complete food, specially formulated for small rodents and adapted to their needs. With 40% grain, the food forms the perfect dietary basis for hamsters, dwarf hamsters, rats, mice and gerbils.",
		price: 69.9,
		petType: "rodents",
		productType: "food",
		image: crispyHamsters,
	},
	{
		id: 55,
		title: "Versele-Laga Crispy Muesli for Guinea Pigs",
		description:
			"A new version of Versele-Laga Cavia Crispy - delicious muesli as complete food for guinea pigs, with a high crude fiber content, as well as good seeds and vegetables and extra vitamin C.",
		price: 62.9,
		petType: "rodents",
		productType: "food",
		image: crispyMuesli,
	},
	{
		id: 56,
		title: "Versele-Laga Crispy Muesli rabbit",
		description:
			"Versele-Laga Crispy Müsli rabbit is a high-quality complete food that has been specially developed for dwarf rabbits and adapted to their needs. The high proportion of vegetable ingredients approximates the natural nutrition of rabbits.",
		price: 59.9,
		petType: "rodents",
		productType: "food",
		image: crispyRabbit,
	},
	{
		id: 57,
		title: "Trixie playpen for young animals, 6-sided with sun protection",
		description:
			"This playpen is specially designed for the safety of young animals. The small grid spacing and the protective net with a mesh width of 1 x 1 cm prevent any escape attempts. The net also protects the young animals from birds of prey, cats and other predators. Half of the protective net is closed to provide the animals with the necessary shade.",
		price: 237.9,
		petType: "rodents",
		productType: "toys",
		image: playpenSunProtection,
	},
	{
		id: 58,
		title: "Trixie Snacky",
		description:
			"The ball can be filled with different types of treats. The opening can be adjusted depending on the size of the treats.",
		price: 26.9,
		petType: "rodents",
		productType: "toys",
		image: snacky,
	},
	{
		id: 59,
		title: "Trixie Food Ball",
		description:
			"The Food-Ball from Trixie protects the food from dirt while your pet tries to get its food while playing. The pet has to stretch to get food. Getting the food is made even more difficult by the chain, which makes the ball swing back and forth. Hours of fun and play for your pet. A perfect toy for most rodents and rabbits.",
		price: 41.9,
		petType: "rodents",
		productType: "toys",
		image: trixieBall,
	},
	{
		id: 60,
		title: "Trixie Tunnel in willow",
		description:
			"Willow tunnel for your pet to chew, play and hide in. Perfect for outdoor or indoor cages.",
		price: 89.9,
		petType: "rodents",
		productType: "toys",
		image: tunnelRodents,
	},
];

export const getProducts = () => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(products);
		}, 1000);
	});
};

export const getItem = (id) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const item = products.find((prod) => prod.id === parseInt(id));
			if (item) {
				resolve(item);
			} else {
				reject(new Error("Product not found!"));
			}
		}, 1000);
	});
};

export const getProductsByType = (type) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const filteredProducts = products.filter(
				(prod) => prod.productType === type,
			);
			if (filteredProducts.length > 0) {
				resolve(filteredProducts);
			} else {
				reject(new Error(`No products found for type: ${type}`));
			}
		}, 1000);
	});
};
