from flask import Flask, request, jsonify
import pandas as pd

app = Flask(__name__)
df = pd.read_parquet("Funnel_Exportado.parquet")

@app.route("/consulta", methods=["GET"])
def consulta():
    filtros = request.args
    resultado = df.copy()
    for col, val in filtros.items():
        if col in resultado.columns:
            resultado = resultado[resultado[col].astype(str) == val]
    return jsonify(resultado.to_dict(orient="records"))