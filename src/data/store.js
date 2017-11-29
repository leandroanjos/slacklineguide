const Store = {
	steps: [
		{ code: "BT", name: "Butt" },
		{ code: "CH", name: "Chest" },
		{ code: "ST", name: "Standding" },
		{ code: "DK", name: "Drop Knee" },
		{ code: "BD", name: "Buddah" },
		{ code: "BC", name: "Back" },
		{ code: "FF", name: "Front Flip" },
		{ code: "BF", name: "Back Flip" },
		{ code: "180", name: "180 º" },
		{ code: "270", name: "270 º" },
		{ code: "360", name: "360 º" },
		{ code: "540", name: "540 º" },
		{ code: "720", name: "720 º" },
		{ code: "900", name: "900 º" }		
	],
	tricks: [
		{
			level: "Beginner", name: "Ascension 180", score: 0.0,
			steps: ["CH","180","BT"]
		},
		{
			level: "Beginner", name: "Buddha 180 to Butt Bounce", score: 0.0,
			steps: ["BD","180","BT"]
		},
		{
			level: "Beginner", name: "Butt Bounce 180 to Butt Bounce", score: 0.0,
			steps: ["BT","180","BT"]
		},
		{
			level: "Beginner", name: "Butt Bounce 180 to Crook", score: 0.0,
			steps: ["BT","180","CR"]
		},
		{
			level: "Beginner", name: "Crook", score: 0.0,
			steps: ["CR"]
		},
		{
			level: "Beginner", name: "Crook 180 to Butt Bounce", score: 0.0,
			steps: ["CR","180","BT"]
		},
		{
			level: "Beginner", name: "Drop Knee", score: 0.0,
			steps: ["DK"]
		},
		{
			level: "Beginner", name: "Double Drop Knee", score: 0.0,
			steps: ["DDK"]
		},
		{
			level: "Beginner", name: "Drop Knee 180 to Butt Bounce", score: 0.0,
			steps: ["DK","180","BT"]
		},
		{
			level: "Beginner", name: "Foot Plant", score: 0.0,
			steps: ["FP"]
		},
		{
			level: "Beginner", name: "Inline Buddha", score: 0.0,
			steps: []
		},
		{
			level: "Beginner", name: "Inline Sole Food", score: 0.0,
			steps: []
		},
		{
			level: "Beginner", name: "Inside Drop Knee", score: 0.0,
			steps: []
		},
		{
			level: "Beginner", name: "Lady Bounce", score: 0.0,
			steps: ["LD"]
		},
		{
			level: "Beginner", name: "One-Arm Lever", score: 0.0,
			steps: []
		},
		{
			level: "Beginner", name: "Sideline Buddha", score: 0.0,
			steps: []
		},
		{
			level: "Beginner", name: "Sole Food", score: 0.0,
			steps: []
		},
		{
			level: "Beginner", name: "Spraddle", score: 0.0,
			steps: ["SP"]
		},
		{
			level: "Beginner", name: "Standing 180 to Feet", score: 0.0,
			steps: ["ST","180","ST"]
		},
		{
			level: "Beginner", name: "Standing Eagle", score: 0.0,
			steps: []
		},
		{
			level: "Beginner", name: "Two-Arm Lever", score: 0.0,
			steps: []
		},		
		{
			level: "Intermediate", name: "Ascension 360", score: 0.0,
			steps: ["CH","360","BT"]
		},
		{
			level: "Intermediate", name: "Back Bounce", score: 0.0,
			steps: ["ST", "BC"]
		},
		{
			level: "Intermediate", name: "Back Bounce Drop Knee Back Bounce", score: 0.0,
			steps: ["BC", "DK"]
		},
		{
			level: "Intermediate", name: "Back Bounce to Chest Bounce", score: 0.0,
			steps: ["BC", "CH"]
		},
		{
			level: "Intermediate", name: "Buddah Fall 180", score: 0.0,
			steps: ["BD", "180", "CH"]
		},
		{
			level: "Intermediate", name: "Buddah Fall 360", score: 0.0,
			steps: ["BD", "360", "CH"]
		},
		{
			level: "Intermediate", name: "Buddah to Buddah", score: 0.0,
			steps: ["BD", "BD"]
		},
		{
			level: "Intermediate", name: "Buddha 360 to Butt Bounce", score: 0.0,
			steps: ["BD", "360", "BT"]
		},
		{
			level: "Intermediate", name: "Butt Backflip", score: 0.0,
			steps: ["BT", "BF", "BT"]
		},
		{
			level: "Intermediate", name: "Butt Bounce 180 to Feet", score: 0.0,
			steps: ["BT", "180", "ST"]
		},
		{
			level: "Intermediate", name: "Butt Bounce 270 to Butt Bounce", score: 0.0,
			steps: ["BT", "270", "BT"]
		},
		{
			level: "Intermediate", name: "Butt Bounce 360 to Butt Bounce", score: 0.0,
			steps: ["BT", "360", "BT"]
		},
		{
			level: "Intermediate", name: "Butt Bounce 360 to Dropknee", score: 0.0,
			steps: ["BT", "360", "DK"]
		},
		{
			level: "Intermediate", name: "Butt Bounce 360 to Feet", score: 0.0,
			steps: ["BT", "360", "ST"]
		},
		{
			level: "Intermediate", name: "Buttflip", score: 0.0,
			steps: ["BT", "FF", "BT"]
		},
		{
			level: "Intermediate", name: "Chest bounce 180 (Mojo Tap Spin)", score: 0.0,
			steps: []
		},
		{
			level: "Intermediate", name: "Chest Bounce to Back Bounce", score: 0.0,
			steps: []
		},
		{
			level: "Intermediate", name: "Chest Nasty", score: 0.0,
			steps: []
		},
		{
			level: "Intermediate", name: "Churro Bounce 180 to Butt Bounce", score: 0.0,
			steps: []
		},
		{
			level: "Intermediate", name: "Churro Bounce 360 to Butt Bounce", score: 0.0,
			steps: []
		},
		{
			level: "Intermediate", name: "Crook 180 to Crook", score: 0.0,
			steps: []
		},
		{
			level: "Intermediate", name: "Crook 360 to Butt Bounce", score: 0.0,
			steps: []
		},
		{
			level: "Intermediate", name: "Crook Fall 180", score: 0.0,
			steps: []
		},
		{
			level: "Intermediate", name: "Crook Fall 360", score: 0.0,
			steps: []
		},
		{
			level: "Intermediate", name: "Drop Knee 360 to Butt Bounce", score: 0.0,
			steps: []
		},
		{
			level: "Intermediate", name: "Drop Knee Back Bounce Drop Knee", score: 0.0,
			steps: []
		},
		{
			level: "Intermediate", name: "Flat Spin 360 (Mojo Flat Spin)", score: 0.0,
			steps: []
		},
		{
			level: "Intermediate", name: "Freak Fall", score: 0.0,
			steps: []
		},
		{
			level: "Intermediate", name: "Freefall 180", score: 0.0,
			steps: []
		},
		{
			level: "Intermediate", name: "Freefall 360", score: 0.0,
			steps: []
		},
		{
			level: "Intermediate", name: "Inside Drop Knee 180 to Butt Bounce", score: 0.0,
			steps: []
		},
		{
			level: "Intermediate", name: "Lady Bounce 180 to Butt Bounce", score: 0.0,
			steps: []
		},
		{
			level: "Intermediate", name: "Lady Bounce 360 to Butt Bounce", score: 0.0,
			steps: []
		},
		{
			level: "Intermediate", name: "Lady Fall 180", score: 0.0,
			steps: []
		},
		{
			level: "Intermediate", name: "Lady Fall 360", score: 0.0,
			steps: []
		},
		{
			level: "Intermediate", name: "Nasty Chest", score: 0.0,
			steps: []
		},
		{
			level: "Intermediate", name: "Sick Nasty", score: 0.0,
			steps: []
		},
		{
			level: "Intermediate", name: "Skydive",	score: 0.0,
			steps: []
		},
		{
			level: "Intermediate", name: "Spiral", score: 0.0,
			steps: []
		},
		{
			level: "Intermediate", name: "Spraddle 180 Butt Bounce", score: 0.0,
			steps: []
		},
		{
			level: "Intermediate", name: "Spraddle 360 Butt Bounce", score: 0.0,
			steps: []
		},
		{
			level: "Intermediate", name: "Spraddle Fall 180", score: 0.0,
			steps: []
		},
		{
			level: "Intermediate", name: "Spraddle Fall 360", score: 0.0,
			steps: []
		},
		{
			level: "Intermediate", name: "Standing 180 to Butt Bounce", score: 0.0,
			steps: []
		},
		{
			level: "Intermediate", name: "Standing 180 to Chest Bounce", score: 0.0,
			steps: []
		},
		{
			level: "Intermediate", name: "Standing 360 to Butt Bounce",	score: 0.0,
			steps: []
		},
		{
			level: "Intermediate", name: "Standing 360 to Feet", score: 0.0,
			steps: []
		}
	]
}

export default Store