import { Chapter } from '@/types/curriculum'

export const chapters: Chapter[] = [
  {
    id: 'getting-started',
    title: 'Getting Started',
    description: 'Learn the basics of Rust programming, installation, and your first program.',
    order: 1,
    estimatedTime: 120,
    difficulty: 'beginner',
    prerequisites: [],
    learningObjectives: [
      'Install Rust and set up development environment',
      'Understand Rust\'s philosophy and design goals',
      'Write and run your first Rust program',
      'Use Cargo for project management'
    ],
    lessons: [
      {
        id: 'installation',
        title: 'Installation',
        description: 'Set up Rust development environment',
        content: `# Installing Rust

Rust is installed and managed by the \`rustup\` tool. This chapter will guide you through installing Rust and setting up your development environment.

## Installing rustup

The easiest way to install Rust is through rustup, which is a command line tool for managing Rust versions and associated tools.

### On Linux and macOS

Open a terminal and run:

\`\`\`bash
curl --proto '=https' --tlsv1.2 https://sh.rustup.rs -sSf | sh
\`\`\`

### On Windows

Download and run the installer from [rustup.rs](https://rustup.rs/).

## Verifying Installation

After installation, verify that Rust is installed correctly:

\`\`\`bash
rustc --version
cargo --version
\`\`\`

You should see version information for both \`rustc\` (the Rust compiler) and \`cargo\` (Rust's package manager).`,
        order: 1,
        type: 'tutorial',
        estimatedTime: 15,
        codeExamples: [
          {
            id: 'version-check',
            title: 'Check Rust Version',
            code: 'rustc --version\ncargo --version',
            language: 'bash',
            explanation: 'These commands verify that Rust is properly installed on your system.',
            runnable: false,
          }
        ],
        exercises: []
      },
      {
        id: 'hello-world',
        title: 'Hello, World!',
        description: 'Write your first Rust program',
        content: `# Hello, World!

Let's write our first Rust program! This is a tradition in programming - the first program you write in any language should print "Hello, World!" to the screen.

## Creating a Project

First, let's create a new Rust project using Cargo:

\`\`\`bash
cargo new hello_world
cd hello_world
\`\`\`

This creates a new directory called \`hello_world\` with a basic Rust project structure.

## The main.rs File

Open \`src/main.rs\` and you'll see:

\`\`\`rust
fn main() {
    println!("Hello, world!");
}
\`\`\`

Let's break this down:
- \`fn main()\` declares a function named \`main\`
- \`main\` is special - it's the entry point of every Rust program
- \`println!\` is a macro that prints text to the console
- The exclamation mark indicates it's a macro, not a function

## Running the Program

To run your program:

\`\`\`bash
cargo run
\`\`\`

You should see "Hello, world!" printed to your terminal.`,
        order: 2,
        type: 'tutorial',
        estimatedTime: 20,
        codeExamples: [
          {
            id: 'hello-world',
            title: 'Hello World Program',
            code: `fn main() {
    println!("Hello, world!");
}`,
            language: 'rust',
            explanation: 'This is the classic "Hello, World!" program in Rust.',
            runnable: true,
            expectedOutput: 'Hello, world!'
          }
        ],
        exercises: [
          {
            id: 'hello-exercise',
            title: 'Personalized Greeting',
            description: 'Modify the hello world program to print a personalized greeting with your name.',
            starterCode: `fn main() {
    // TODO: Print "Hello, [Your Name]!" instead of "Hello, world!"
    println!("Hello, world!");
}`,
            solution: `fn main() {
    println!("Hello, Alice!");
}`,
            tests: [
              {
                id: 'test-1',
                input: '',
                expectedOutput: 'Hello, Alice!',
                description: 'Should print personalized greeting'
              }
            ],
            hints: [
              'Replace "world" with your name in the println! macro',
              'Make sure to keep the exclamation mark and semicolon'
            ],
            difficulty: 'easy'
          }
        ]
      }
    ]
  },
  {
    id: 'ownership',
    title: 'Understanding Ownership',
    description: 'Master Rust\'s unique ownership system for memory safety without garbage collection.',
    order: 2,
    estimatedTime: 180,
    difficulty: 'intermediate',
    prerequisites: ['getting-started'],
    learningObjectives: [
      'Understand ownership rules and how they prevent memory errors',
      'Learn about borrowing and references',
      'Master the slice type and string slices',
      'Apply ownership concepts in real code'
    ],
    lessons: [
      {
        id: 'what-is-ownership',
        title: 'What is Ownership?',
        description: 'Learn the fundamental concept of ownership in Rust',
        content: `# What is Ownership?

Ownership is Rust's most unique feature and has deep implications for the rest of the language. It enables Rust to make memory safety guarantees without needing a garbage collector.

## The Stack and the Heap

Before diving into ownership, let's understand memory management:

- **Stack**: Stores values in LIFO order, fast access, fixed size data
- **Heap**: Stores data of unknown size at compile time, slower access

## Ownership Rules

Rust's ownership system follows three main rules:

1. Each value in Rust has an owner
2. There can only be one owner at a time  
3. When the owner goes out of scope, the value will be dropped

## Variable Scope

A scope is the range within a program for which an item is valid:

\`\`\`rust
{                      // s is not valid here, it's not yet declared
    let s = "hello";   // s is valid from this point forward
    
    // do stuff with s
}                      // this scope is now over, and s is no longer valid
\`\`\`

## The String Type

Let's look at a more complex example with the \`String\` type:

\`\`\`rust
let s1 = String::from("hello");
let s2 = s1;  // s1 is moved to s2

println!("{}", s1);  // This would cause an error!
\`\`\`

This is different from languages with garbage collection - Rust moves the value instead of copying it.`,
        order: 1,
        type: 'tutorial',
        estimatedTime: 45,
        codeExamples: [
          {
            id: 'ownership-move',
            title: 'Ownership and Move',
            code: `fn main() {
    let s1 = String::from("hello");
    let s2 = s1;  // s1 is moved to s2
    
    // println!("{}", s1);  // This would error!
    println!("{}", s2);     // This works
}`,
            language: 'rust',
            explanation: 'When s1 is assigned to s2, ownership is transferred (moved). s1 is no longer valid.',
            runnable: true,
            expectedOutput: 'hello'
          }
        ],
        exercises: [
          {
            id: 'ownership-exercise',
            title: 'Fix the Ownership Error',
            description: 'Fix the code so that both variables can be used without causing ownership errors.',
            starterCode: `fn main() {
    let s1 = String::from("hello");
    let s2 = s1;
    
    println!("s1: {}", s1);
    println!("s2: {}", s2);
}`,
            solution: `fn main() {
    let s1 = String::from("hello");
    let s2 = s1.clone();  // Clone instead of move
    
    println!("s1: {}", s1);
    println!("s2: {}", s2);
}`,
            tests: [
              {
                id: 'test-1',
                input: '',
                expectedOutput: 's1: hello\ns2: hello',
                description: 'Should print both strings without ownership errors'
              }
            ],
            hints: [
              'Use the clone() method to create a deep copy',
              'Alternatively, you could use references (&)'
            ],
            difficulty: 'medium'
          }
        ]
      }
    ]
  },
  {
    id: 'structs-enums',
    title: 'Structs and Enums',
    description: 'Learn to create custom data types with structs and enums.',
    order: 3,
    estimatedTime: 150,
    difficulty: 'intermediate',
    prerequisites: ['getting-started', 'ownership'],
    learningObjectives: [
      'Define and instantiate structs',
      'Implement methods on structs',
      'Create and use enums with pattern matching',
      'Understand when to use structs vs enums'
    ],
    lessons: [
      {
        id: 'defining-structs',
        title: 'Defining and Instantiating Structs',
        description: 'Learn how to create custom data types with structs',
        content: `# Defining and Instantiating Structs

Structs are a way to create custom data types that group related values together. They're similar to objects in other languages but without methods (we'll add those later).

## Defining a Struct

Here's how to define a struct:

\`\`\`rust
struct User {
    username: String,
    email: String,
    sign_in_count: u64,
    active: bool,
}
\`\`\`

## Creating Instances

To create an instance of a struct:

\`\`\`rust
let user1 = User {
    email: String::from("someone@example.com"),
    username: String::from("someusername123"),
    active: true,
    sign_in_count: 1,
};
\`\`\`

## Accessing Fields

Use dot notation to access struct fields:

\`\`\`rust
println!("User email: {}", user1.email);
\`\`\`

## Mutable Structs

To modify a struct, the entire instance must be mutable:

\`\`\`rust
let mut user1 = User {
    email: String::from("someone@example.com"),
    username: String::from("someusername123"),
    active: true,
    sign_in_count: 1,
};

user1.email = String::from("anotheremail@example.com");
\`\`\``,
        order: 1,
        type: 'tutorial',
        estimatedTime: 30,
        codeExamples: [
          {
            id: 'struct-example',
            title: 'User Struct Example',
            code: `struct User {
    username: String,
    email: String,
    sign_in_count: u64,
    active: bool,
}

fn main() {
    let user1 = User {
        email: String::from("someone@example.com"),
        username: String::from("someusername123"),
        active: true,
        sign_in_count: 1,
    };
    
    println!("User: {} ({})", user1.username, user1.email);
}`,
            language: 'rust',
            explanation: 'This example shows how to define a struct and create an instance of it.',
            runnable: true,
            expectedOutput: 'User: someusername123 (someone@example.com)'
          }
        ],
        exercises: []
      }
    ]
  }
]