class Url < ApplicationRecord
  validates :full_url, presence: true,uniqueness: true
  validates :slug, presence: true, uniqueness: true, length: {is: 8 }
  validates :clicked, presence: true

def assign_random_string_for_slug
  self.slug = generate_random_string
end

def generate_random_string
  loop do
    random_string = SecureRandom.alphanumeric(8)
    break random_string unless Url.where(slug: random_string).exists?
  end
end
end