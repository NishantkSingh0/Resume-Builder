from transformers import AutoModelForCausalLM, AutoTokenizer

model_name = "deepseek-ai/deepseek-llm"
tokenizer = AutoTokenizer.from_pretrained(model_name)
model = AutoModelForCausalLM.from_pretrained(model_name)

inputs = tokenizer("Hello, how are you?", return_tensors="pt")
outputs = model.generate(**inputs)
print(tokenizer.decode(outputs[0]))