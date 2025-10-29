import pandas as pd
import json

def handler(event, context):
    try:
        # Cargar el archivo local
        df = pd.read_parquet("data/Funnel_Exportado.parquet")

        # Obtener parámetros de consulta desde la URL
        params = event.get("queryStringParameters", {}) or {}

        # Aplicar filtros dinámicos por cada columna
        for col, val in params.items():
            if col in df.columns:
                df = df[df[col].astype(str) == val]

        # Convertir el resultado a JSON
        resultado = df.to_dict(orient="records")

        return {
            "statusCode": 200,
            "body": json.dumps(resultado),
            "headers": {
                "Content-Type": "application/json"
            }
        }

    except Exception as e:
        return {
            "statusCode": 500,
            "body": json.dumps({"error": str(e)})
        }