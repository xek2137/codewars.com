function greet(name){
  return (
    name === "Johnny" ? `Hello, my love!` : `Hello, ${name}!`
  )
}

// or like that:

const greet = (name) => `Hello, ${name === "Johny" ? "my love" : name}!`