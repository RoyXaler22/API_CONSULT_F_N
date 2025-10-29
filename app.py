from fastapi import FastAPI
import pandas as pd

app = FastAPI()

@app.get("/")
def read_root():
    df = pd.read_parquet("Funnel_Exportado.parquet")
    return {"rows": len(df)}
