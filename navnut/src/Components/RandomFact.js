
let NutrtionFactArray = [
    "Common types of sugar are corn syrup and table sugar.", "Added sugars contain empty calories.", "Common types of sugar are corn syrup and table sugar.", "The three main types of omega-3 fats are alpha-linolenic acid (ALA), eicosapentaenoic acid (EPA), and docosahexaenoic acid (DHA).", "Good sources of EPA and DHA are grass-fed meat and omega-3 enriched or pastured eggs.”, “Food producers often use hydrogenation to harden vegetable oils for use in products such as margarine.”, “A high intake of trans fats is associated with various chronic diseases, such as abdominal obesity, inflammation, and heart disease.”, “Veggies are rich in vitamins, minerals, fiber, antioxidants, and an endless variety of trace nutrients that science has just begun to uncover.”, “If getting more sun is not an option, taking a vitamin D supplement or a tablespoon of cod liver oil each day is the best way to prevent or reverse a deficiency.”, “Unrefined carbs are whole foods that are rich in carbs.”, “Eating refined carbs will cause rapid spikes in blood sugar.”, “The vitamins and minerals you can also get from a cheap multivitamin are just a tiny part of the total nutrients in foods.”, “Most people who lose a lot of weight on a diet gain it back whenever they “stop” the diet.”, “Food processing removes many of the beneficial nutrients in the food during its process.”, “processed foods have all sorts of artificial chemicals, some of which have a questionable safety profile.”, “People are all unique so should their diets be. Subtle differences in genetics, body type, physical activity, and environment can affect which kind of diet you should follow."

]


function RandomFact(){
    return(
    <div className="randomfact">
          <div className='fact'>
            <p>hello world</p>
          {/* {NutrtionFactArray.map((item) => (
            <h1>{item}</h1>
          ))} */}
        </div>
    </div>
    )
}

export default RandomFact
