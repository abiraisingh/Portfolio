import catFriend from "@/assets/cat-friend.jpg";

const AboutSection = () => {
  const timeline = [
    {
      title: "Software Engineering",
      subtitle:
        "Designing and developing scalable full-stack applications while setting up databases and automating backend workflows.",
      color: "from-purple-400 to-blue-400",
    },
    {
      title: "Full-Stack Development",
      subtitle:
        "Building modern applications using React, Node.js, Express, MongoDB and MySQL while continuously improving architecture and performance.",
      color: "from-blue-400 to-cyan-400",
    },
    {
      title: "Web Development",
      subtitle:
        "Creating responsive and user-friendly websites using HTML, CSS, JavaScript and modern frontend frameworks.",
      color: "from-pink-400 to-purple-400",
    },
    {
      title: "MVJ College of Engineering",
      subtitle: "Bachelor of Computer Science and Engineering",
      period: "2022 – 2026",
      color: "from-indigo-400 to-purple-400",
    },
  ];

  return (
    <section
      id="about"
      className="py-24 px-6 relative overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50"></div>

      {/* Background blobs */}
      <div className="absolute top-[-120px] right-[-120px] w-[350px] h-[350px] bg-purple-300/40 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-120px] left-[-120px] w-[350px] h-[350px] bg-blue-300/40 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-6xl mx-auto">

        <div className="grid md:grid-cols-2 gap-14 items-center">

          {/* Profile Image */}
          <div className="flex justify-center md:justify-start">

            <div className="relative group">

              {/* Glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 to-blue-400 blur-3xl opacity-40 group-hover:opacity-60 transition duration-500" />

              <img
                src={catFriend}
                alt="Profile"
                className="relative w-72 h-72 md:w-80 md:h-80 rounded-full object-cover border border-white shadow-xl group-hover:scale-105 transition duration-500"
              />

            </div>

          </div>

          {/* Content */}
          <div className="space-y-10">

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              About Me
            </h2>

            <div className="space-y-8">

              {timeline.map((item, index) => (
                <div
                  key={index}
                  className="flex gap-5 group"
                >
                  {/* Timeline */}
                  <div className="flex flex-col items-center mt-1">

                    <div
                      className={`w-4 h-4 rounded-full bg-gradient-to-r ${item.color} shadow-md`}
                    />

                    {index < timeline.length - 1 && (
                      <div className="w-[2px] h-16 bg-gradient-to-b from-gray-300 to-transparent mt-2"></div>
                    )}

                  </div>

                  {/* Content Card */}
                  <div className="flex-1 pb-6">

                    <div className="bg-white/70 backdrop-blur-lg border border-white/50 rounded-xl p-5 shadow-sm hover:shadow-md transition">

                      <div className="flex justify-between items-start mb-2">

                        <h3 className="text-lg font-semibold text-gray-900">
                          {item.title}
                        </h3>

                        {item.period && (
                          <span className="text-sm text-gray-500">
                            {item.period}
                          </span>
                        )}

                      </div>

                      <p className="text-gray-600 leading-relaxed">
                        {item.subtitle}
                      </p>

                    </div>

                  </div>

                </div>
              ))}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutSection;