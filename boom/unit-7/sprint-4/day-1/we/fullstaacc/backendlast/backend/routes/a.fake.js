// try {
//     const { username, avatar, email, password } = req.body;
//     const hashedPassword = await bcrypt.hash(password, 10);
//     const user = new User({
//       username,
//       avatar,
//       email,
//       password: hashedPassword,
//     });
//     await user.save();
//     res.status(201).json({ message: 'User registered successfully' });
//   } catch (error) {
//     res.status(500).json({ error: 'Registration failed' });
//   }