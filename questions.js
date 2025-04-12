const questions = [
    {
      text: `<b>Ella:</b> I love how quiet the library is after school.
      <p><b>Sam:</b> Me too. It’s the perfect place to concentrate.
      <p><b>Ella:</b> I always get more done here than at home.`,
      options: ["discussion", "disagreement", "argument", "fight"],
      answerIndex: 0
    },
    {
      text: `<b>Ava:</b> Group projects are the worst. I’d rather work alone.
      <p><b>Leo:</b> Really? I like them. You get to hear new ideas.
      <p><b>Ava:</b> I think it just means doing all the work for others.
      <p><b>Leo:</b> That’s not always true.`,
      options: ["discussion", "disagreement", "argument", "fight"],
      answerIndex: 1
    },
    {
      text: `<b>Jade:</b> Everyone should learn coding. It’s becoming essential.
      <p><b>Dylan:</b> But not everyone wants to go into tech.
      <p><b>Jade:</b> It’s not about tech careers. It teaches logic and problem-solving, which help in any field. That's why everyone should learn it!
      <p><b>Dylan:</b> I hadn’t thought of it that way.`,
      options: ["discussion", "disagreement", "argument", "fight"],
      answerIndex: 2
    },
    {
      text: `<b>Olive:</b> You didn’t even try to include me in the group chat.
      <p><b>Max:</b> Because you always ignore everyone and act better than us.
      <p><b>Olive:</b> That’s not true, you’re just mad I called you out last week.
      <p><b>Max:</b> Whatever. You’re fake and everyone knows it.`,
      options: ["discussion", "disagreement", "argument", "fight"],
      answerIndex: 3
    },
    {
      text: `<b>Rin:</b> Rainy days are great for reading.
      <p><b>Kai:</b> Totally. They make everything feel calm and quiet.`,
      options: ["discussion", "disagreement", "argument", "fight"],
      answerIndex: 0
    },
    {
      text: `<b>Noah:</b> Online school was way better than in-person.
      <p><b>Layla:</b> I totally disagree. It was so isolating.
      <p><b>Noah:</b> But it gave me more time and freedom.
      <p><b>Layla:</b> And less motivation for me.`,
      options: ["discussion", "disagreement", "argument", "fight"],
      answerIndex: 1
    },
    {
      text: `<b>Isa:</b> We should ban single-use plastics in school.
      <p><b>Tam:</b> Isn’t that a bit extreme?
      <p><b>Isa:</b> Not really. It would reduce waste, and students would adapt quickly with reusable containers.
      <p><b>Tam:</b> I like your thinking!`,
      options: ["discussion", "disagreement", "argument", "fight"],
      answerIndex: 2
    },
    {
      text: `<b>Mila:</b> You're always late and never take anything seriously.
      <p><b>Ryan:</b> At least I’m not a control freak who nags every second.
      <p><b>Mila:</b> You’re impossible. No wonder no one wants to work with you.<p><b>Ryan:</b> Whatever, bossy.`,
      options: ["discussion", "disagreement", "argument", "fight"],
      answerIndex: 3
    },
    {
      text: `<b>Sophia:</b> I love how music can change your whole mood.
      <p><b>Luca:</b> Definitely. Some songs can totally lift your spirits.
      <p><b>Sophia:</b> And have you found it can kill your mood too?.
      <p><b>Luca:</b> Fo' sho' man.`,
      options: ["discussion", "disagreement", "argument", "fight"],
      answerIndex: 0
    },
    {
      text: `<b>Ezra:</b> History is the most boring subject ever.
      <p><b>Lani:</b> Not true. It’s full of interesting stories.
      <p><b>Ezra:</b> I don’t really care about dead people.
      <p><b>Lani:</b> Then you’re missing out on how we understand today’s world.`,
      options: ["discussion", "disagreement", "argument", "fight"],
      answerIndex: 1
    },
    {
      text: `<b>Caleb:</b> We should have school uniforms because they reduce peer pressure.
      <p><b>Nia:</b> But they take away personal expression.
      <p><b>Caleb:</b> Well sort of, but they create equality. Students judge each other less when everyone’s dressed the same.
      <p><b>Nia:</b> That’s actually a good point.`,
      options: ["discussion", "disagreement", "argument", "fight"],
      answerIndex: 2
    },
    {
      text: `<b>Amber:</b> You’re the reason we failed. You didn’t do your part.
      <p><b>Finn:</b> Maybe if you weren’t such a control freak, I could’ve helped.
      <p><b>Amber:</b> At least I actually *try* to do well.
      <p><b>Finn:</b> Whatever. Keep blaming everyone else.`,
      options: ["discussion", "disagreement", "argument", "fight"],
      answerIndex: 3
    },
    {
      text: `<b>Liam:</b> Video games really help me relax.
      <p><b>Jules:</b> Same. They’re a great way to wind down after school.
      <p><b>Liam:</b> I just feel like such a chicken jockey.
      <p><b>Jules:</b> That's...great...I guess.`,
      options: ["discussion", "disagreement", "argument", "fight"],
      answerIndex: 0
    },
    {
      text: `<b>Ari:</b> If it was up to me, PE would be optional.
      <p><b>Sky:</b> Really? Why?
      <p><b>Ari:</b> It's just how I feel.
      <p><b>Sky:</b> I think it's an important aspect of healthy living.`,
      options: ["discussion", "disagreement", "argument", "fight"],
      answerIndex: 1
    },
    {
      text: `<b>Nico:</b> Fast food should be banned in schools.
      <p><b>Jade:</b> That’s harsh. Not everyone can bring home-cooked meals.
      <p><b>Nico:</b> But it's been proven to lead to health problems. If we only offer healthy food, people will adapt, and we will have a healthier population.
      <p><b>Jade:</b> Hmm... maybe you’re right.`,
      options: ["discussion", "disagreement", "argument", "fight"],
      answerIndex: 2
    },
    {
      text: `<b>Rhea:</b> You always interrupt and talk over me.
      <p><b>Asher:</b> Maybe I wouldn’t if you didn’t drone on forever.
      <p><b>Rhea:</b> Wow. That’s rude.
      <p><b>Asher:</b> Whatever. Get over yourself.`,
      options: ["discussion", "disagreement", "argument", "fight"],
      answerIndex: 3
    },
    {
      text: `<b>Ali:</b> Early morning walks are the best.
      <p><b>Kai:</b> Absolutely. It clears your mind before the day starts.
      <p><b>Ali:</b> I like to walk around the park near my place.
      <p><b>Kai:</b> Yeah it's so nice and fresh really early, hey?!`,
      options: ["discussion", "disagreement", "argument", "fight"],
      answerIndex: 0
    },
    {
      text: `<b>Emma:</b> Homework should be banned.
      <p><b>Raj:</b> I don’t agree. It helps reinforce learning.
      <p><b>Emma:</b> It just causes stress.
      <p><b>Raj:</b> I don't think we're going to see eye to eye on this.`,
      options: ["discussion", "disagreement", "argument", "fight"],
      answerIndex: 1
    },
    {
      text: `<b>Zane:</b> Zoos should be shut down. Animals deserve freedom.
      <p><b>Ella:</b> But some zoos protect endangered species.
      <p><b>Zane:</b> Even so, most zoos are about profit. Sanctuaries are better and focus on animal welfare.
      <p><b>Ella:</b> I'm convinced, but I don't know the practicalities of how to change things.`,
      options: ["discussion", "disagreement", "argument", "fight"],
      answerIndex: 2
    },
    {
      text: `<b>Ivy:</b> You never take responsibility for anything.
      <p><b>Ben:</b> At least I don’t play the victim all the time.
      <p><b>Ivy:</b> Classic. Blame me for your screw-ups.
      <p><b>Ben:</b> Grow up.`,
      options: ["discussion", "disagreement", "argument", "fight"],
      answerIndex: 3
    },

    {
        text: `<b>Harper:</b> I love sketching while listening to lo-fi beats.
        <p><b>Milo:</b> Same here. It really helps me focus.
        <p><b>Harper:</b> And it makes boring homework feel kinda chill.
         <p><b>Milo:</b> Truth.`,
        options: ["discussion", "disagreement", "argument", "fight"],
        answerIndex: 0
      },
      {
        text: `<b>Jonah:</b> Math is useless in real life.
        <p><b>Zoe:</b> I don’t think so. It’s everywhere, like in budgeting and cooking.
        <p><b>Jonah:</b> Still feels like we’re wasting time on equations we’ll never use.
        <p><b>Zoe:</b> Depends how you look at it.`,
        options: ["discussion", "disagreement", "argument", "fight"],
        answerIndex: 1
      },
      {
        text: `<b>Willow:</b> We should start a recycling club at school.
        <p><b>Beau:</b> Not sure anyone would care enough to join.
        <p><b>Willow:</b> Then we make them care by showing how much waste we produce weekly.
        <p><b>Beau:</b> I doubt that will change peoples' minds.
        <p><b>Willow:</b> If people see the landfill in Kwinana, they'll change their mind, no doubt!`,
        options: ["discussion", "disagreement", "argument", "fight"],
        answerIndex: 2
      },
      {
        text: `<b>Freya:</b> You’re such a fake friend. You only talk to me when you need something.
        <p><b>Riley:</b> At least I’m not the one spreading lies behind people’s backs.
        <p><b>Freya:</b> Keep pretending you're perfect.
        <p><b>Riley:</b> You’re toxic.`,
        options: ["discussion", "disagreement", "argument", "fight"],
        answerIndex: 3
      },
      {
        text: `<b>Leo:</b> Science documentaries are oddly satisfying.
        <p><b>Nina:</b> Yeah! Especially when they show space or deep ocean stuff.
        <p><b>Leo:</b> I could watch that for hours.
        <p><b>Nina:</b> I do.`,
        options: ["discussion", "disagreement", "argument", "fight"],
        answerIndex: 0
      },
      {
        text: `<b>Ezra:</b> I think school should start later in the day.
        <p><b>Maya:</b> You reckon?
        <p><b>Ezra:</b> Yeah...students would be more awake and focused.
        <p><b>Maya:</b> I think it'd start eating into afternoon sports and dinner time.
        <p><b>Ezra:</b> Well it already eats into breakfast time.`,
        options: ["discussion", "disagreement", "argument", "fight"],
        answerIndex: 1
      },
      {
        text: `<b>Iris:</b> We need to stop using so much paper in class.
        <p><b>Jett:</b> But not all teachers like using digital stuff.
        <p><b>Iris:</b> Then we should help them switch. It’s better for the environment, it saves money, and the kids are into it.
        <p><b>Jett:</b> Maybe we could suggest it to the student council.`,
        options: ["discussion", "disagreement", "argument", "fight"],
        answerIndex: 2
      },
      {
        text: `<b>Sadie:</b> You always make me feel stupid during group work.
        <p><b>Kieran:</b> Have you ever wondered why?
        <p><b>Sadie:</b> Wow. That's really unkind.
        <p><b>Kieran:</b> You're welcome.`,
        options: ["discussion", "disagreement", "argument", "fight"],
        answerIndex: 3
      },
      {
        text: `<b>Isla:</b> I love how snacks taste better during movie night.
        <p><b>Owen:</b> I know, right? Popcorn just hits different with a good film.
        <p><b>Isla:</b> And chocolate. Always chocolate.
        <p><b>Owen:</b> Obviously.`,
        options: ["discussion", "disagreement", "argument", "fight"],
        answerIndex: 0
      },
      {
        text: `<b>Hugo:</b> PE is a waste of time when we could be studying.
        <p><b>Sasha:</b> I disagree. It’s the only part of school that helps with mental health.
        <p><b>Hugo:</b> I just think we could use the time better.
        <p><b>Sasha:</b> We clearly value different things.`,
        options: ["discussion", "disagreement", "argument", "fight"],
        answerIndex: 1
      },
      {
        text: `<b>Max:</b> Homework should be banned.
        <p><b>Lena:</b> I don’t think banning it is the answer. Maybe just less of it.
        <p><b>Max:</b> But no one actually enjoys it or learns that much from it.
        <p><b>Lena:</b> Still, some practice is helpful. We need a balance.`,
        options: ["discussion", "disagreement", "argument", "fight"],
        answerIndex: 2
      },
      {
        text: `<b>Ava:</b> You literally never listen to what I’m saying!
        <p><b>Leo:</b> Maybe if you didn’t talk so much nonsense, I would.
        <p><b>Ava:</b> You’re such a jerk.
        <p><b>Leo:</b> And you’re just loud for no reason.`,
        options: ["discussion", "disagreement", "argument", "fight"],
        answerIndex: 3
      },
      {
        text: `<b>Mila:</b> I think pineapple on pizza is actually good.
        <p><b>Ezra:</b> Same. It’s underrated.
        <p><b>Mila:</b> Right? The sweet and salty combo is perfect.
        <p><b>Ezra:</b> People who hate it are just dramatic.`,
        options: ["discussion", "disagreement", "argument", "fight"],
        answerIndex: 0
      },
      {
        text: `<b>Ivy:</b> That group project was unfair. You didn’t do anything.
        <p><b>Jasper:</b> I told you I was sick, but sure, blame me.
        <p><b>Ivy:</b> Sick or not, we needed you.
        <p><b>Jasper:</b> Maybe try asking next time instead of accusing me.`,
        options: ["discussion", "disagreement", "argument", "fight"],
        answerIndex: 3
      },
      {
        text: `<b>Riley:</b> We should be allowed to wear make-up at school.
        <p><b>Noah:</b> Why would you say that?
        <p><b>Riley:</b> People should just be allowed to express themselves. Plus, isn't school about preparing us for the real world?
        <p><b>Noah:</b> I see your point, but it's probably not a strong enough case to change a school policy.`,
        options: ["discussion", "disagreement", "argument", "fight"],
        answerIndex: 2
      },
      {
        text: `<b>Sophia:</b> Math is definitely my favorite subject.
        <p><b>Daniel:</b> Really? Mine's history.
        <p><b>Sophia:</b> I get that. History’s cool too.
        <p><b>Daniel:</b> Yeah, especially the ancient stuff.`,
        options: ["discussion", "disagreement", "argument", "fight"],
        answerIndex: 0
      },
      {
        text: `<b>Elijah:</b> You copied my answer. I saw you.
        <p><b>Zoe:</b> I didn’t! You’re just making stuff up.
        <p><b>Elijah:</b> Don’t lie. It’s obvious.
        <p><b>Zoe:</b> You think you’re perfect, but you’re not.`,
        options: ["discussion", "disagreement", "argument", "fight"],
        answerIndex: 3
      },
      {
        text: `<b>Harper:</b> I prefer books over movies.
        <p><b>Logan:</b> Nah, movies are way better. Books are too slow.
        <p><b>Harper:</b> But books give you more detail and imagination.
        <p><b>Logan:</b> Maybe, but who has the time?`,
        options: ["discussion", "disagreement", "argument", "fight"],
        answerIndex: 1
      },
      {
        text: `<b>Nora:</b> I’m going to try vegetarianism for a month.
        <p><b>Luca:</b> That’s awesome. I’ve been thinking about it too.
        <p><b>Nora:</b> It’s hard to give up bacon, though.
        <p><b>Luca:</b> True, but it's worth trying.`,
        options: ["discussion", "disagreement", "argument", "fight"],
        answerIndex: 0
      },
      {
        text: `<b>Emily:</b> You cheated on the game and still lost.
        <p><b>Carter:</b> At least I don’t cry when I lose like you do.
        <p><b>Emily:</b> Whatever. You’re just salty.
        <p><b>Carter:</b> Your tears are salty.`,
        options: ["discussion", "disagreement", "argument", "fight"],
        answerIndex: 3
      }
      
  ];
  