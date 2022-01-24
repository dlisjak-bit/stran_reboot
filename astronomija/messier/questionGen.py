f = open("questions.txt", "w+")
for i in range(110):
    f.write("    {\n")
    f.write("        question: \"M" + str(i+1) + "\",\n")
    f.write("        correctAnswer: \"\"\n")
    f.write("    },\n")
