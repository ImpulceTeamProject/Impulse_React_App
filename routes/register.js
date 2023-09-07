// const express = require('express');
// const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

// const router = express.Router();

// router.post('/api/users/register', async (req, res) => {
//   const { first_name, last_name, email, password } = req.body;

//   try {
//     const registerRes = await fetch(`${process.env.API_URL}/api/users/register`, {
//       method: 'POST',
//       headers: {
//         Accept: 'application/json',
//         'Content-Type': 'application/json',
//       }
//     })
//   }
//   catch (err)  {
    
//   }
// });

// module.exports = router;