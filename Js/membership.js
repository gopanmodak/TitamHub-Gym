const membershipPlans = [
  {
    name: "Pass Trial",
    price: "$ 0",
    feature: [
      "Access to the gym from 8:00 to 14:00",
      "The trainer on duty will introduce you to the gym",
    ],
  },
  {
    name: "Pass 'Easy Start'",
    price: "$ 119",
    feature: [
      "Visit without restrictions 24/7",
      "Individual training program",
      "Access to the TRAINER application",
      "Trainer support",
    ],
  },
  {
    name: "Pass 'Free Time'",
    price: "$ 49",
    feature: [
      "The entrance time to the gym is from 14:00 to 16:00",
      "Without suspension of gym membership",
      "The trainer on duty will introduce you to the gym",
    ],
  },
  {
    name: "Pass '1 Month 24/7'",
    price: "$ 85",
    feature: [
      "Visit without restrictions 24/7",
      "The trainer on duty will introduce you to the gym",
    ],
  },
  {
    name: "Pass 'In Shape (AM)'",
    price: "$ 165",
    feature: [
      "Training in mini-groups until 14:00",
      "Without suspension of gym membership",
      "Classes with a trainer in a mini-group 3 times a week",
      "Trainer support",
    ],
  },
  {
    name: "Pass 'In Shape (PM)'",
    price: "$ 195",
    feature: [
      "Training in mini-groups until 17:00",
      "Without suspension of gym membership",
      "Classes with a trainer in a mini-group 3 times a week",
      "Trainer support",
    ],
  },
];


const renderMembershipPlans = () => {
  const membershipGride = document.getElementById('membershipPlans');

  const html = membershipPlans.map(plan => `
    <div class="membership-card">
      <h3>${plan.name}</h3>
      <div class="price">${plan.price}</div>
      <ul>
        ${plan.feature.map(feature => `
          <li>
            <img src="/images/icons/check-icon.png" alt="">
            <span>${feature}</span>
          </li>
        `).join('')}
      </ul>
      <button class="buy-btn">Buy Now</button>
    </div>
  `).join('');

  membershipGride.innerHTML = html;
};

document.addEventListener('DOMContentLoaded', () => {
  renderMembershipPlans();
});