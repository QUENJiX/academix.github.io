<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Study Planner</title>
    <link rel="stylesheet" href="styles.css">
    <script src="script.js" defer></script>
    <script src="https://kit.fontawesome.com/a076d05399.js" crossorigin="anonymous"></script>
</head>
<body>
    <div class="container">
        <h1>Semester Study Planner</h1>
        <button class="reset-button" id="resetAll">Reset All Progress</button>

        <!-- Bangladesh Studies -->
        <div class="subject" id="bangladesh-studies">
            <div class="subject-header">
                <h2><i class="fas fa-book-open subject-icon"></i> Bangladesh Studies</h2>
                <div class="progress-bar-container">
                    <div class="progress-bar" id="progress-bangladesh"></div>
                </div>
            </div>
            <div class="topics">
                <ul>
                    <li>
                        <label><input type="checkbox" class="topic-checkbox" data-subject="bangladesh"> 
                            Religions of Bangladesh and The Progress of Islam in the Sub-Continent
                        </label>
                    </li>
                    <li>
                        <label><input type="checkbox" class="topic-checkbox" data-subject="bangladesh"> 
                            Society and Culture of Bangladesh
                        </label>
                    </li>
                    <li>
                        <label><input type="checkbox" class="topic-checkbox" data-subject="bangladesh"> 
                            Bangladesh and International Affairs
                        </label>
                    </li>
                    <li>
                        <label><input type="checkbox" class="topic-checkbox" data-subject="bangladesh"> 
                            Political Parties in Bangladesh
                        </label>
                    </li>
                    <li>
                        <label><input type="checkbox" class="topic-checkbox" data-subject="bangladesh"> 
                            Election and Government [Short Questions]
                        </label>
                    </li>
                    <li>
                        <label><input type="checkbox" class="topic-checkbox" data-subject="bangladesh"> 
                            Liberation War and Its Aftermath; [Four National Leaders]
                        </label>
                    </li>
                    <li>
                        <label><input type="checkbox" class="topic-checkbox" data-subject="bangladesh"> 
                            July Revolution [Timeline]
                        </label>
                    </li>
                </ul>
            </div>
        </div>

        <!-- Social Process and Institutions -->
        <div class="subject" id="social-process">
            <div class="subject-header">
                <h2><i class="fas fa-users subject-icon"></i> Social Process and Institutions</h2>
                <div class="progress-bar-container">
                    <div class="progress-bar" id="progress-social"></div>
                </div>
            </div>
            <div class="topics">
                <ul>
                    <li>
                        <label><input type="checkbox" class="topic-checkbox" data-subject="social"> 
                            Development of Sociology [Karl Marx, Pierre Bourdieu, Max Weber]
                        </label>
                        <div class="source">Source: Sociology: a Brief Introduction by Richard T. Schaefer [Chap-1: p9-16; Chap-5: p112-113]</div>
                        <div class="important">Important: Conflict Theory, Dramaturgical Approach</div>
                    </li>
                    <li>
                        <label><input type="checkbox" class="topic-checkbox" data-subject="social"> 
                            Culture
                        </label>
                        <div class="source">Source: Sociology: a Brief Introduction by Richard T. Schaefer [Chap-3]</div>
                        <div class="important">Important: Cultural Imperialism</div>
                    </li>
                    <li>
                        <label><input type="checkbox" class="topic-checkbox" data-subject="social"> 
                            Race
                        </label>
                        <div class="source">Source: Sociology: a Brief Introduction by Richard T. Schaefer [Chap-10]</div>
                    </li>
                    <li>
                        <label><input type="checkbox" class="topic-checkbox" data-subject="social"> 
                            Social Movements: Analyzation
                        </label>
                    </li>
                    <li>
                        <label><input type="checkbox" class="topic-checkbox" data-subject="social"> 
                            Marxism: Dialectic Materialism & Economic Determinism
                        </label>
                        <div class="source">Source: Sociology: a Brief Introduction by Richard T. Schaefer [Chap-14: p343]</div>
                    </li>
                </ul>
            </div>
        </div>

        <!-- Mass Communication -->
        <div class="subject" id="mass-communication">
            <div class="subject-header">
                <h2><i class="fas fa-bullhorn subject-icon"></i> Mass Communication: Structure and Process</h2>
                <div class="progress-bar-container">
                    <div class="progress-bar" id="progress-mass"></div>
                </div>
            </div>
            <div class="topics">
                <ul>
                    <li>
                        <label><input type="checkbox" class="topic-checkbox" data-subject="mass"> 
                            Definition and Nature of Mass Communication
                        </label>
                        <div class="source">Source: The Dynamics of Mass Communication by Joseph Dominick [Chap:-1]</div>
                    </li>
                    <li>
                        <label><input type="checkbox" class="topic-checkbox" data-subject="mass"> 
                            Mass Communication Process [Laswell's Communication Model]
                        </label>
                        <div class="source">Source: The Dynamics of Mass Communication by Joseph Dominick [Chap:-1] & Internet</div>
                    </li>
                    <li>
                        <label><input type="checkbox" class="topic-checkbox" data-subject="mass"> 
                            Convergence
                        </label>
                        <div class="source">Source: The Dynamics of Mass Communication by Joseph Dominick [Chap:-1]</div>
                    </li>
                    <li>
                        <label><input type="checkbox" class="topic-checkbox" data-subject="mass"> 
                            Critical/Cultural Studies of Mass Media
                        </label>
                        <div class="source">Source: The Dynamics of Mass Communication by Joseph Dominick [Chap:-1]</div>
                    </li>
                    <li>
                        <label><input type="checkbox" class="topic-checkbox" data-subject="mass"> 
                            Functions of Media - Micro and Macro Analysis
                        </label>
                        <div class="source">Source: The Dynamics of Mass Communication by Joseph Dominick [Chap:-2]</div>
                        <div class="source">Source: Introduction to Mass Communication by Stanley Baran [Chap:-2]</div>
                    </li>
                    <li>
                        <label><input type="checkbox" class="topic-checkbox" data-subject="mass"> 
                            Uses and Gratification Theory
                        </label>
                        <div class="source">Source: The Internet</div>
                    </li>
                    <li>
                        <label><input type="checkbox" class="topic-checkbox" data-subject="mass"> 
                            Features and History of Mass Media
                        </label>
                        <div class="source">Source: Introduction to Mass Communication by Stanley Baran [Chap: 3-10]</div>
                    </li>
                    <li>
                        <label><input type="checkbox" class="topic-checkbox" data-subject="mass"> 
                            Internet and WWW
                        </label>
                        <div class="source">Source: The Dynamics of Mass Communication by Joseph Dominick [Chap:-12]</div>
                        <div class="source">Source: Introduction to Mass Communication by Stanley Baran [Chap:-10]</div>
                    </li>
                    <li>
                        <label><input type="checkbox" class="topic-checkbox" data-subject="mass"> 
                            Normative Theory
                        </label>
                        <div class="source">Source: Introduction to Mass Communication by Stanley Baran [Chap:-13]</div>
                    </li>
                    <li>
                        <label><input type="checkbox" class="topic-checkbox" data-subject="mass"> 
                            Magic Bullet Theory
                        </label>
                        <div class="source">Source: Introduction to Mass Communication by Stanley Baran [Chap:-13]</div>
                    </li>
                    <li>
                        <label><input type="checkbox" class="topic-checkbox" data-subject="mass"> 
                            Media Freedom, Regulation and Ethics
                        </label>
                        <div class="source">Source: Introduction to Mass Communication by Stanley Baran [Chap:-14]</div>
                    <!-- Additional mass communication topics -->
                </ul>
            </div>
        </div>

        <!-- Interpersonal Communication -->
        <div class="subject" id="interpersonal-communication">
            <div class="subject-header">
                <h2><i class="fas fa-comments subject-icon"></i> Interpersonal and Group Communication</h2>
                <div class="progress-bar-container">
                    <div class="progress-bar" id="progress-interpersonal"></div>
                </div>
            </div>
            <div class="topics">
                <ul>
                    <li>
                        <label><input type="checkbox" class="topic-checkbox" data-subject="interpersonal"> 
                            Foundation of Interpersonal communication (IC)
                        </label>
                        <div class="subtopics">
                            <ul>
                                <li>The Elements of IC</li>
                                <li>The Benefits of Studying IC</li>
                            </ul>
                        </div>
                        <div class="source">Source: The Interpersonal Communication Book by Joseph A. DeVito [Part-1]</div>
                    </li>
                    <li>
                        <label><input type="checkbox" class="topic-checkbox" data-subject="interpersonal"> 
                            Culture and Interpersonal Communication (IC)
                        </label>
                        <div class="subtopics">
                            <ul>
                                <li>Acculturation, Ethnocentrism, Assimilation, Cultural Sensitivity</li>
                                <li>Importance of Culture in IC</li>
                                <li>Cultural Differencesm</li>
                                <li>The Principles of Effective IC</li>
                            </ul>
                        </div>
                        <div class="source">Source: The Interpersonal Communication Book by Joseph A. DeVito [Part-2]</div>
                    </li>
                    <li>
                        <label><input type="checkbox" class="topic-checkbox" data-subject="interpersonal"> 
                            Interpersonal Relationship
                        </label>
                        <div class="subtopics">
                            <ul>
                                <li>Relationship Stages</li>
                                <li>Relationship Communication</li>
                                <li>Relationship Theories</li>
                            </ul>
                        </div>
                        <div class="source">Source: The Interpersonal Communication Book by Joseph A. DeVito [Part-3]</div>
                    </li>
                    <!-- Additional interpersonal communication topics -->
                </ul>
            </div>
        </div>

        <!-- ICT Skills -->
        <div class="subject" id="ict-skills">
            <div class="subject-header">
                <h2><i class="fas fa-laptop-code subject-icon"></i> ICT Skills for Media</h2>
                <div class="progress-bar-container">
                    <div class="progress-bar" id="progress-ict"></div>
                </div>
            </div>
            <div class="topics">
                <ul>
                    <li><label><input type="checkbox" class="topic-checkbox" data-subject="ict"> MS Word</label></li>
                    <li><label><input type="checkbox" class="topic-checkbox" data-subject="ict"> Microsoft PowerPoint</label></li>
                    <li><label><input type="checkbox" class="topic-checkbox" data-subject="ict"> Avro and Buoy Typing</label></li>
                    <li><label><input type="checkbox" class="topic-checkbox" data-subject="ict"> Canva Poster Design and Presentation</label></li>
                    <li><label><input type="checkbox" class="topic-checkbox" data-subject="ict"> CV Writing [Canva and MS Word]</label></li>
                    <li><label><input type="checkbox" class="topic-checkbox" data-subject="ict"> Excel</label></li>
                </ul>
            </div>
        </div>
    </div>
</body>
</html>
