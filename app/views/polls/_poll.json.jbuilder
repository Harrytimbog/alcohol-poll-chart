json.extract! poll, :id, :name, :alcohol, :created_at, :updated_at
json.url poll_url(poll, format: :json)
