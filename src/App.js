import React, { useState } from "react";
import { Select, Button, Card, message, Row, Col } from "antd";

const { Option } = Select;

const App = () => {
  const [stage, setStage] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [skippedCount, setSkippedCount] = useState(0);
  const [selectedValue, setSelectedValue] = useState("");

  const questions = [
    {
      question: "HTML sarlavha tegi qanday ko'rinishda bo'ladi?",
      options: [
        "<h1>Salom!</h1>",
        "<header>Salom!</header>",
        "<title>Salom!</title>",
      ],
      correct: "<h1>Salom!</h1>",
    },
    {
      question: "HTML paragraflar tegi qanday ko'rinishda bo'ladi?",
      options: [
        "<p>Bu paragraflar.</p>",
        "<section>Bu paragraflar.</section>",
        "<div>Bu paragraflar.</div>",
      ],
      correct: "<p>Bu paragraflar.</p>",
    },
    {
      question: "HTML havola tegi qanday ko'rinishda bo'ladi?",
      options: [
        '<a href="#">Ushbu havola</a>',
        "<link href='#'>Ushbu havola</link>",
        "<a name='#'>Ushbu havola</a>",
      ],
      correct: '<a href="#">Ushbu havola</a>',
    },
    {
      question: "HTML rasm tegi qanday ko'rinishda bo'ladi?",
      options: [
        '<img src="rasm.jpg" alt="Rasm">',
        '<picture src="rasm.jpg" alt="Rasm">',
        '<image src="rasm.jpg" alt="Rasm">',
      ],
      correct: '<img src="rasm.jpg" alt="Rasm">',
    },
    {
      question: "HTML ro'yxat tegi qanday ko'rinishda bo'ladi?",
      options: [
        "<ul><li>Element 1</li></ul>",
        "<list><item>Element 1</item></list>",
        "<ol><li>Element 1</li></ol>",
      ],
      correct: "<ul><li>Element 1</li></ul>",
    },
    {
      question: "HTML formasi qanday ko'rinishda bo'ladi?",
      options: [
        "<form action='/' method='post'></form>",
        "<form action='/' method='get'></form>",
        "<input type='text'>",
      ],
      correct: "<form action='/' method='post'></form>",
    },
    {
      question: "HTML text input tegi qanday ko'rinishda bo'ladi?",
      options: [
        "<input type='text'>",
        "<text-input></text-input>",
        "<textbox></textbox>",
      ],
      correct: "<input type='text'>",
    },
    {
      question: "HTML checkbox tegi qanday ko'rinishda bo'ladi?",
      options: [
        "<input type='checkbox'>",
        "<checkbox></checkbox>",
        "<input type='check'>",
      ],
      correct: "<input type='checkbox'>",
    },
    {
      question: "HTML radio button tegi qanday ko'rinishda bo'ladi?",
      options: [
        "<input type='radio'>",
        "<radio></radio>",
        "<input type='rad'>",
      ],
      correct: "<input type='radio'>",
    },
    {
      question: "HTML select tegi qanday ko'rinishda bo'ladi?",
      options: [
        "<select><option>Variant 1</option></select>",
        "<dropdown><option>Variant 1</option></dropdown>",
        "<option-select><option>Variant 1</option></option-select>",
      ],
      correct: "<select><option>Variant 1</option></select>",
    },
    {
      question: "HTML tegi qanday ko'rinishda bo'ladi?",
      options: [
        "<html></html>",
        "<head></head>",
        "<body></body>",
      ],
      correct: "<html></html>",
    },
    {
      question: "HTML body tegi qanday ko'rinishda bo'ladi?",
      options: [
        "<body></body>",
        "<main></main>",
        "<container></container>",
      ],
      correct: "<body></body>",
    },
    {
      question: "HTML head tegi qanday ko'rinishda bo'ladi?",
      options: [
        "<head></head>",
        "<title></title>",
        "<meta></meta>",
      ],
      correct: "<head></head>",
    },
    {
      question: "HTML meta tegi qanday ko'rinishda bo'ladi?",
      options: [
        "<meta charset='UTF-8'>",
        "<meta name='viewport'>",
        "<meta description='...'>",
      ],
      correct: "<meta charset='UTF-8'>",
    },
    {
      question: "HTML title tegi qanday ko'rinishda bo'ladi?",
      options: [
        "<title>Page Title</title>",
        "<heading>Page Title</heading>",
        "<h1>Page Title</h1>",
      ],
      correct: "<title>Page Title</title>",
    },
    {
      question: "HTML link tegi qanday ko'rinishda bo'ladi?",
      options: [
        "<link rel='stylesheet' href='style.css'>",
        "<style href='style.css'>",
        "<css link='style.css'>",
      ],
      correct: "<link rel='stylesheet' href='style.css'>",
    },
    {
      question: "HTML style tegi qanday ko'rinishda bo'ladi?",
      options: [
        "<style>body { background-color: white; }</style>",
        "<css>body { background-color: white; }</css>",
        "<script>body { background-color: white; }</script>",
      ],
      correct: "<style>body { background-color: white; }</style>",
    },
    {
      question: "HTML strong tegi qanday ko'rinishda bo'ladi?",
      options: [
        "<strong>Bu matn qalin</strong>",
        "<b>Bu matn qalin</b>",
        "<important>Bu matn qalin</important>",
      ],
      correct: "<strong>Bu matn qalin</strong>",
    },
    {
      question: "HTML em tegi qanday ko'rinishda bo'ladi?",
      options: [
        "<em>Bu matn italik</em>",
        "<i>Bu matn italik</i>",
        "<italic>Bu matn italik</italic>",
      ],
      correct: "<em>Bu matn italik</em>",
    },
    {
      question: "HTML blockquote tegi qanday ko'rinishda bo'ladi?",
      options: [
        "<blockquote>Ushbu iqtibos</blockquote>",
        "<quote>Ushbu iqtibos</quote>",
        "<cite>Ushbu iqtibos</cite>",
      ],
      correct: "<blockquote>Ushbu iqtibos</blockquote>",
    },
    {
      question: "HTML div tegi qanday ko'rinishda bo'ladi?",
      options: [
        "<div>Ushbu kontent</div>",
        "<section>Ushbu kontent</section>",
        "<container>Ushbu kontent</container>",
      ],
      correct: "<div>Ushbu kontent</div>",
    },
    {
      question: "HTML span tegi qanday ko'rinishda bo'ladi?",
      options: [
        "<span>Ushbu matn</span>",
        "<text>Ushbu matn</text>",
        "<inline>Ushbu matn</inline>",
      ],
      correct: "<span>Ushbu matn</span>",
    },
    {
      question: "HTML header tegi qanday ko'rinishda bo'ladi?",
      options: [
        "<header>Ushbu bosh</header>",
        "<head>Ushbu bosh</head>",
        "<nav>Ushbu bosh</nav>",
      ],
      correct: "<header>Ushbu bosh</header>",
    },
    {
      question: "HTML footer tegi qanday ko'rinishda bo'ladi?",
      options: [
        "<footer>Ushbu pastki qism</footer>",
        "<bottom>Ushbu pastki qism</bottom>",
        "<end>Ushbu pastki qism</end>",
      ],
      correct: "<footer>Ushbu pastki qism</footer>",
    },
    {
      question: "HTML nav tegi qanday ko'rinishda bo'ladi?",
      options: [
        "<nav>Ushbu navigatsiya</nav>",
        "<menu>Ushbu navigatsiya</menu>",
        "<navigation>Ushbu navigatsiya</navigation>",
      ],
      correct: "<nav>Ushbu navigatsiya</nav>",
    },
    {
      question: "HTML main tegi qanday ko'rinishda bo'ladi?",
      options: [
        "<main>Ushbu asosiy kontent</main>",
        "<body>Ushbu asosiy kontent</body>",
        "<content>Ushbu asosiy kontent</content>",
      ],
      correct: "<main>Ushbu asosiy kontent</main>",
    },
    {
      question: "HTML article tegi qanday ko'rinishda bo'ladi?",
      options: [
        "<article>Ushbu maqola</article>",
        "<post>Ushbu maqola</post>",
        "<content>Ushbu maqola</content>",
      ],
      correct: "<article>Ushbu maqola</article>",
    },
    {
      question: "HTML section tegi qanday ko'rinishda bo'ladi?",
      options: [
        "<section>Ushbu bo'lim</section>",
        "<part>Ushbu bo'lim</part>",
        "<div>Ushbu bo'lim</div>",
      ],
      correct: "<section>Ushbu bo'lim</section>",
    },
    {
      question: "HTML details tegi qanday ko'rinishda bo'ladi?",
      options: [
        "<details><summary>Qo'shimcha ma'lumot</summary></details>",
        "<summary>Qo'shimcha ma'lumot</summary>",
        "<information>Qo'shimcha ma'lumot</information>",
      ],
      correct: "<details><summary>Qo'shimcha ma'lumot</summary></details>",
    },
    {
      question: "HTML summary tegi qanday ko'rinishda bo'ladi?",
      options: [
        "<summary>Ushbu qisqacha ma'lumot</summary>",
        "<details>Ushbu qisqacha ma'lumot</details>",
        "<brief>Ushbu qisqacha ma'lumot</brief>",
      ],
      correct: "<summary>Ushbu qisqacha ma'lumot</summary>",
    },
  ];


  const handleSubmit = () => {
    if (selectedValue === "skip") {
      setSkippedCount(skippedCount + 1);
      message.info("Bu savolni o'tkazib yubordingiz.");
    } else if (selectedValue === questions[stage].correct) {
      setCorrectCount(correctCount + 1);
      message.success("To'g'ri javob!");
    } else {
      message.error("Xato javob!");
    }

    setSelectedValue(""); // Tanlangan qiymatni tozalash

    if (stage < questions.length - 1) {
      setStage(stage + 1);
    } else {
      console.log(stage);
    }
  };

  const handleSkip = () => {
    if (skippedCount < 3) {
      setSkippedCount(skippedCount + 1);
      message.info("Bu savolni o'tkazib yubordingiz.");
      setSelectedValue(""); // Tanlangan qiymatni tozalash

      if (stage < questions.length - 1) {
        setStage(stage + 1);
      } else {
        console.log(stage);
      }
    } else {
      message.error("Maksimal o'tkazish soniga yetdingiz.");
    }
  };

  const goToPreviousQuestion = () => {
    if (stage > 0) {
      setStage(stage - 1);
      setSelectedValue(""); // Tanlangan qiymatni tozalash
    }
  };

  const goToNextQuestion = () => {
    if (stage < questions.length - 1) {
      setStage(stage + 1);
      setSelectedValue(""); // Tanlangan qiymatni tozalash
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", background: "#f0f2f5" }}>
      <Card title={`Savol ${stage + 1}: ${questions[stage].question}`} style={{ width: "100%", maxWidth: 500 }}>
        <Select
          value={selectedValue}
          style={{ width: "100%", marginBottom: 20 }}
          onChange={setSelectedValue}
        >
          <Option value="skip">Bu savolni o'tkazib yuborish</Option>
          {questions[stage].options.map((option, index) => (
            <Option key={index} value={option}>
              {option}
            </Option>
          ))}
        </Select>
        <Button
          type="primary"
          onClick={handleSubmit}
          style={{ marginBottom: 10, width: '100%', backgroundColor: '#4CAF50', color: 'white' }}
        >
          Yuborish
        </Button>
        <Button
          onClick={handleSkip}
          style={{ marginBottom: 10, width: '100%', backgroundColor: 'red', color: 'white' }}
        >
          O'tkazib yuborish
        </Button>
        <Row gutter={8}>
          <Col span={12}>
            <Button onClick={goToPreviousQuestion} disabled={stage === 0} style={{ width: '100%' }}>
              Orqaga
            </Button>
          </Col>
          <Col span={12}>
            <Button onClick={goToNextQuestion} disabled={stage === questions.length - 1} style={{ width: '100%' }}>
              Oldinga
            </Button>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default App;
