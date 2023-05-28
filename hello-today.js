export default function helloToday(name = "World") {
  const date = new Date();
  const day = date.getDay();
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  
  return `Hello ${name} today is ${days[day]}!`;
}
