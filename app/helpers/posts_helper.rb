module PostsHelper

 # extracts first paragraph of article and returns text
 def extract_paragraph(text)
  return text.scan(/<p>(.*)<\/p>/)[0][0].html_safe + '..'
 end

end
