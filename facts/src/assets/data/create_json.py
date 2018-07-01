import json


def run():
    questions = []
    with open('questions.txt', 'r') as f:
        for line in f.readlines():
            line = line.strip()
            elements = [x.strip() for x in line.split('=')]
            questions.append({
                'title': elements[0],
                'description': elements[1],
            })
    with open('questions.json', 'w') as f:
        json.dump(questions, f, indent=4)


if __name__ == '__main__':
  run()
