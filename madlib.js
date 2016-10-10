var adjective1 = 'sloppy';
var adjective2 = 'dry';
var bodyPartPlural = 'toes';
var isRelated = true;
    var relationship = (isRelated ? 'sister' : 'friend');
var verb = 'throw';
var isLowNumber = false;
    var number = (isLowNumber ? 3 : 50);
var verbPastTense = 'landed';
var name = 'George';
var animal = 'ostrich';
var noun = 'barn';
var color = 'blue';
var noun2 = 'train';
var isColorful = false;
    var color2 = (isColorful ? 'yellow and orange' : 'gray');
var verbPlural = 'jumps';
var isSmall = true;
    var size = (isSmall ? 'tiny' : 'huge');
var nounPluarl = 'radios';
var noun3 = 'grass';
var place = 'airport';
var isHappy = true;
    var adjective3 = (isHappy ? 'rambunctious' : 'argumentative');
var isSmallAnimal = false;
    var animal2 = (isSmallAnimal ? 'kitten' : 'elephant');

var madLib = `New Puppy Madlib

We got a puppy the other day. She was so ${adjective1} and ${adjective2} -- the best puppy you've ever seen.  She was barely bigger than our ${bodyPartPlural} and sat in my ${relationship}'s lap on the way home. When we arrived, she could barely ${verb} in the ${number} inches of snow on the ground, so we had to shovel a path. She got cold very quickly, so we brought her inside and ${verbPastTense} by the fire.

We named her ${name}. We were deciding between that and ${animal}, so we flipped a ${noun} to choose. We were also thinking about the name ${color} ${noun2} but it was clear from the beginning that wasn't a good fit.

One of the first things we did was buy a bunch of puppy toys.  We got a ${color2} ball that ${verbPlural} all around the house, ${size} ${nounPluarl} she can chew on, and a ${noun3} to play tug-of-war with. Her favorite thing to do is go to the ${place} to see her friend the ${adjective3} ${animal2}.`

console.log(madLib);
