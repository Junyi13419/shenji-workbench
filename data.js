/* 神机 · SHENJI | SHENJI · GOD AI 数据源
 * 由每日自动化任务更新。请勿在此文件存放个人注册资料（个人数据保存在浏览器本地存储）。
 * 字段说明：
 *   id           唯一英文标识，更新时保持一致以便保留用户标记
 *   provider     平台名称
 *   title        活动标题
 *   quota        免费额度原文描述
 *   quotaTier    量级（用于排序）：100=1亿以上, 50=千万级, 20=百万级, 10=其他
 *   cadence      频次：每日 / 每月 / 一次性 / 永久 / 按量
 *   claimMethod  领取/注册方式
 *   url          官方注册或活动入口
 *   deadline     截止日期 YYYY-MM-DD，无截止填 null
 *   deadlineText 截止日期展示文案
 *   requirements 前置条件数组
 *   region       国内 / 海外
 *   source       来源：原文 / 网络补充
 *   sourceUrl    信息来源链接
 *   tags         标签数组
 *   notes        补充说明
 *   discoveredAt 收录日期
 *   statusTag    active / ending / expired
 *
 * skills 字段（Skill 大集合）：
 *   id, name, repo, category, desc, install, url, sourceUrl, installs,
 *   tier, tags, notes, discoveredAt, status
 *   category 限定为：文档办公 / 开发工程 / 前端设计 / 浏览器自动化 / 数据科研 /
 *                   营销增长 / 多媒体创作 / 效率记忆 / 安全审计 / 资源目录 /
 *                   「游戏开发 / 游戏特效」（独立分类，名称含空格与斜杠）
 *   tier 100=官方或头部精选, 50=高口碑推荐, 20=实用, 10=待观察（优先淘汰）
 *   status active / removed；低质项直接移出数组，并在 updateLog 写明清理原因
 *
 * tutorials 字段（AI 教程大全）：
 *   id, title, category, org, level, format, lang, duration, desc, url,
 *   sourceUrl, tags, tier, discoveredAt, status
 *   category 限定六类：大模型应用与开发 / AIGC创意与视觉设计 / 具身智能与硬件AI /
 *                    AI工作流与自动化 / AI安全、治理与伦理 / AI商业战略与产品
 *   tier 100=权威首选, 50=推荐, 20=实用
 *
 * monetization 字段（AI变现方式与赛道分类全景图）：
 *   id, group, track, tagline, way, logic, source, sourceUrl, level,
 *   resources（对象数组：{name, url}）, tools（对象数组：{name, url, kind, note}）,
 *   tags（数组）, tier, discoveredAt, status
 *   group 限定四类：一、C端轻资产变现 / 二、B端重服务与解决方案 /
 *                  三、主流商业化收费模式 / 四、核心破局建议
 *   tools.kind 限定：下载安装 / 网页入口 / 开源自托管；note 写明免费范围
 *   tools 链接只允许官网下载页、官方入口或官方开源仓库，禁止破解/聚合下载站
 *   tier 100=权威, 50=推荐, 20=实用
 */
window.TOKEN_WORKBENCH_DATA = {
  "lastUpdated": "2026-11-25T09:48:26+08:00",
  "nextCheck": "每日 09:00 自动搜索更新",
  "offers": [
    {
      "id": "qiniu-conatus",
      "provider": "七牛云 Conatus",
      "title": "每天免费 1 亿 Token，充值后最高 10 亿/天",
      "quota": "每天 1 亿 Token；单笔充值满 100 元后每日上限升至 10 亿 Token",
      "quotaTier": 100,
      "cadence": "每日",
      "claimMethod": "完成实名认证后，调用模型 qiniu/conatus-free",
      "url": "https://www.qiniu.com/ai/free-models/conatus-2026",
      "deadline": "2026-11-30",
      "deadlineText": "2026-11-30 截止",
      "requirements": [
        "实名认证",
        "七牛云账号"
      ],
      "region": "国内",
      "source": "原文",
      "sourceUrl": "https://mp.weixin.qq.com/s/6YO6uWC0mW0q-AOEzBCObA",
      "tags": [
        "超大额度",
        "实名认证",
        "限时"
      ],
      "notes": "本期额度最大的国内活动。另有常规注册礼约 300 万 Token，可一并领取。",
      "discoveredAt": "2026-11-23",
      "statusTag": "active"
    },
    {
      "id": "scnet",
      "provider": "超算互联网",
      "title": "新用户领 1 亿 Token 科学计算智能体额度",
      "quota": "新用户 1 亿 Token（科学计算智能体应用额度）",
      "quotaTier": 100,
      "cadence": "一次性",
      "claimMethod": "下载最新版客户端，登录后领取；仅客户端内使用",
      "url": "https://www.scnet.cn",
      "deadline": "2026-11-30",
      "deadlineText": "2026-11-30 截止",
      "requirements": [
        "下载客户端",
        "新用户"
      ],
      "region": "国内",
      "source": "原文",
      "sourceUrl": "https://mp.weixin.qq.com/s/6YO6uWC0mW0q-AOEzBCObA",
      "tags": [
        "超大额度",
        "仅限客户端",
        "限时"
      ],
      "notes": "额度只能在客户端内使用，不能通过标准 API 调用。",
      "discoveredAt": "2026-11-23",
      "statusTag": "active"
    },
    {
      "id": "autoclaw",
      "provider": "AutoClaw",
      "title": "登录即领 50M Tokens，国际站 100M",
      "quota": "国内部 5000 万 Token；国际站 1 亿 Token；每账号限领一次",
      "quotaTier": 100,
      "cadence": "一次性",
      "claimMethod": "登录官网/客户端即可领取",
      "url": "https://autoclaw.zhipuai.cn/download/",
      "deadline": "2026-11-23",
      "deadlineText": "已于 2026-11-23 到期",
      "requirements": [
        "账号登录"
      ],
      "region": "国内/国际",
      "source": "原文",
      "sourceUrl": "https://mp.weixin.qq.com/s/6YO6uWC0mW0q-AOEzBCObA",
      "tags": [
        "已过期",
        "无需绑卡",
        "一次性"
      ],
      "notes": "2026-11-24 复核：deadline=2026-11-23 已早于今天；官方每周福利（11/16-11/22 登录领 100M Tokens）窗口亦已结束，应标记 expired。可用同类替代见新条目 zcode-nightly-tokens。",
      "discoveredAt": "2026-11-23",
      "statusTag": "expired"
    },
    {
      "id": "ifm-k2-horizon",
      "provider": "IFM K2 Horizon",
      "title": "每个 API Key 每天免费 1000 万 Token",
      "quota": "每个 API Key 每天 1000 万 Token（输入+输出合计）",
      "quotaTier": 100,
      "cadence": "每日",
      "claimMethod": "注册账号后在控制台创建 API Key",
      "url": "https://platform.ifm.ai/",
      "deadline": null,
      "deadlineText": "长期有效（以官方为准）",
      "requirements": [
        "注册账号"
      ],
      "region": "海外",
      "source": "原文",
      "sourceUrl": "https://mp.weixin.qq.com/s/6YO6uWC0mW0q-AOEzBCObA",
      "tags": [
        "每日重置",
        "大额度"
      ],
      "notes": "每日 08:00（北京时间）重置额度；超额请求返回 429。",
      "discoveredAt": "2026-11-23",
      "statusTag": "active"
    },
    {
      "id": "iteracompute",
      "provider": "IteraCompute",
      "title": "每月免费 3000 万 Token",
      "quota": "每月 3000 万 Token，Auto 模型按 0 美元计价",
      "quotaTier": 50,
      "cadence": "每月",
      "claimMethod": "邮箱验证或 Google 登录即解锁，免绑卡",
      "url": "https://iteracompute.com/free/",
      "deadline": "2026-11-24",
      "deadlineText": "2026-11-24 已结束",
      "requirements": [
        "邮箱验证 或 Google 账号"
      ],
      "region": "海外",
      "source": "原文",
      "sourceUrl": "https://mp.weixin.qq.com/s/6YO6uWC0mW0q-AOEzBCObA",
      "tags": [
        "已结束",
        "免绑卡",
        "历史活动"
      ],
      "notes": "官网公告「The Free promotion has ended」：3000 万/月 Auto 额度于 2026-11-24 终止，Qwen3.8-27B 下线；仅推广前充值且退款后仍为正的账户保留原档位。",
      "discoveredAt": "2026-11-23",
      "statusTag": "expired"
    },
    {
      "id": "baidu-qianfan",
      "provider": "百度千帆",
      "title": "17 个指定模型各送 100 万 Token",
      "quota": "新用户首次开通，17 个指定模型各 100 万 Token，合计 1700 万",
      "quotaTier": 50,
      "cadence": "一次性",
      "claimMethod": "注册百度智能云账号，首次开通千帆大模型平台",
      "url": "https://qianfan.cloud.baidu.com/",
      "deadline": null,
      "deadlineText": "开通后 3 个月有效",
      "requirements": [
        "百度智能云账号",
        "首次开通"
      ],
      "region": "国内",
      "source": "原文",
      "sourceUrl": "https://mp.weixin.qq.com/s/6YO6uWC0mW0q-AOEzBCObA",
      "tags": [
        "国内大厂",
        "模型多"
      ],
      "notes": "额度需在开通后 3 个月内使用完毕。",
      "discoveredAt": "2026-11-23",
      "statusTag": "active"
    },
    {
      "id": "zhipu-bigmodel",
      "provider": "智谱 AI BigModel",
      "title": "GLM-4-Flash 永久免费 + 新用户 2000 万 Token",
      "quota": "GLM-4-Flash 永久免费；新用户另有约 2000 万 Token 体验额度",
      "quotaTier": 50,
      "cadence": "永久 + 一次性",
      "claimMethod": "手机号注册 open.bigmodel.cn，控制台创建 API Key",
      "url": "https://open.bigmodel.cn/",
      "deadline": null,
      "deadlineText": "长期有效",
      "requirements": [
        "手机号注册"
      ],
      "region": "国内",
      "source": "网络补充",
      "sourceUrl": "http://www.hqwc.cn/a/946730.html",
      "tags": [
        "永久免费",
        "国内大厂",
        "中文写作"
      ],
      "notes": "聚合网关配置时渠道类型需选 type 16，type 1 会返回 404。",
      "discoveredAt": "2026-11-23",
      "statusTag": "active"
    },
    {
      "id": "volcengine-ark",
      "provider": "火山引擎 Ark",
      "title": "每日 200 万免费 Token",
      "quota": "每天 200 万 Token 免费额度",
      "quotaTier": 20,
      "cadence": "每日",
      "claimMethod": "手机号注册后，到方舟控制台手动开通模型",
      "url": "https://console.volcengine.com/ark",
      "deadline": null,
      "deadlineText": "长期有效",
      "requirements": [
        "手机号注册",
        "控制台手动开通"
      ],
      "region": "国内",
      "source": "网络补充",
      "sourceUrl": "http://www.hqwc.cn/a/946730.html",
      "tags": [
        "每日重置",
        "高并发"
      ],
      "notes": "注册后必须去控制台手动开通模型，否则无法调用。",
      "discoveredAt": "2026-11-23",
      "statusTag": "active"
    },
    {
      "id": "siliconflow",
      "provider": "硅基流动 SiliconFlow",
      "title": "注册送约 2000 万 Token / 16 元余额",
      "quota": "注册赠送约 14 元余额（约 2000 万 Token，视模型而定）",
      "quotaTier": 50,
      "cadence": "一次性",
      "claimMethod": "手机号注册并完成实名认证",
      "url": "https://cloud.siliconflow.cn/",
      "deadline": null,
      "deadlineText": "长期有效",
      "requirements": [
        "手机号",
        "实名认证"
      ],
      "region": "国内",
      "source": "网络更新",
      "sourceUrl": "https://aitujian.cn/free-ai-api.html",
      "tags": [
        "模型种类多",
        "实名认证"
      ],
      "notes": "Base URL 不要带 /v1 后缀（部分客户端会自动拼接）；近期资料显示新用户券为约 14 元，以控制台实际显示为准。",
      "discoveredAt": "2026-11-23",
      "statusTag": "active"
    },
    {
      "id": "deepseek",
      "provider": "DeepSeek",
      "title": "新用户 300 万 Token",
      "quota": "新用户赠送 300 万 Token",
      "quotaTier": 20,
      "cadence": "一次性",
      "claimMethod": "手机号注册 platform.deepseek.com",
      "url": "https://platform.deepseek.com/",
      "deadline": null,
      "deadlineText": "长期有效",
      "requirements": [
        "手机号注册"
      ],
      "region": "国内",
      "source": "网络补充",
      "sourceUrl": "http://www.hqwc.cn/a/946730.html",
      "tags": [
        "写代码",
        "国内大厂"
      ],
      "notes": "额度用完需充值，适合代码场景验证。",
      "discoveredAt": "2026-11-23",
      "statusTag": "active"
    },
    {
      "id": "chinamobile-moma",
      "provider": "移动云 MoMA",
      "title": "新用户 2500 万 Token 免费试用 30 天",
      "quota": "2500 万 Token，领取后 30 天有效",
      "quotaTier": 50,
      "cadence": "一次性",
      "claimMethod": "进入 MoMA 控制台 → 模型广场 → 点击「新用户 2500w Tokens 免费体验」",
      "url": "https://ecloud.10086.cn/op-help-center/doc/article/92837",
      "deadline": "2026-12-31",
      "deadlineText": "活动至 2026-12-31，领取后 30 天有效",
      "requirements": [
        "未领取过该额度的新/老用户",
        "限流 3000 token/分钟"
      ],
      "region": "国内",
      "source": "网络补充",
      "sourceUrl": "https://ecloud.10086.cn/op-help-center/doc/article/92837",
      "tags": [
        "运营商",
        "大额度",
        "限流"
      ],
      "notes": "同一身份信息下所有账户仅能领取一次；部分自营/合作模型不支持该额度。",
      "discoveredAt": "2026-11-23",
      "statusTag": "active"
    },
    {
      "id": "google-ai-studio",
      "provider": "Google AI Studio",
      "title": "Gemini 永久免费层",
      "quota": "免费层按请求计数：约 15 RPM / 1500 RPD，最高 1M 上下文",
      "quotaTier": 20,
      "cadence": "永久",
      "claimMethod": "Google 账号登录 aistudio.google.com 创建 API Key",
      "url": "https://aistudio.google.com/",
      "deadline": null,
      "deadlineText": "长期有效",
      "requirements": [
        "Google 账号"
      ],
      "region": "海外",
      "source": "网络补充",
      "sourceUrl": "https://free-llm.com/guides/free-llm-apis-november-2026-what-changed",
      "tags": [
        "永久免费",
        "多模态",
        "1M 上下文"
      ],
      "notes": "免费层请求可能被用于改进模型，敏感数据请勿使用；Gemini 2.5 Flash/Pro 于 2026-12-01 重定向至 3.x。另：Google Cloud $300 试用金自 2026-11-16 起不再覆盖 Gemini 平台。",
      "discoveredAt": "2026-11-23",
      "statusTag": "active"
    },
    {
      "id": "groq",
      "provider": "Groq Cloud",
      "title": "永久免费层，响应极快",
      "quota": "约 30 RPM / 1000–14400 RPD（按模型不同）",
      "quotaTier": 20,
      "cadence": "永久",
      "claimMethod": "注册 console.groq.com，创建 API Key",
      "url": "https://console.groq.com/",
      "deadline": null,
      "deadlineText": "长期有效",
      "requirements": [
        "邮箱/Google 账号"
      ],
      "region": "海外",
      "source": "网络补充",
      "sourceUrl": "https://toolstrategyhub.com/guides/best-free-llm-apis",
      "tags": [
        "永久免费",
        "低延迟",
        "不训练数据"
      ],
      "notes": "适合实时对话与语音转写原型。",
      "discoveredAt": "2026-11-23",
      "statusTag": "active"
    },
    {
      "id": "cloudflare-workers-ai",
      "provider": "Cloudflare Workers AI",
      "title": "每天 10000 Neurons 免费额度",
      "quota": "每天 10000 Neurons，UTC 零点重置",
      "quotaTier": 10,
      "cadence": "每日",
      "claimMethod": "Cloudflare 账号登录 Dash → Workers AI",
      "url": "https://dash.cloudflare.com/",
      "deadline": null,
      "deadlineText": "长期有效",
      "requirements": [
        "Cloudflare 账号"
      ],
      "region": "海外",
      "source": "网络补充",
      "sourceUrl": "https://free-llm.com/guides/free-llm-apis-november-2026-what-changed",
      "tags": [
        "永久免费",
        "边缘推理"
      ],
      "notes": "2026-11-25 复核：每天 10000 Neurons 免费额度不变；GLM、Kimi、DeepSeek 等较大模型需绑定付费账户，免费额度主要覆盖 GPT-OSS、Qwen、Llama、Gemma 等开放模型。",
      "discoveredAt": "2026-11-23",
      "statusTag": "active"
    },
    {
      "id": "openrouter",
      "provider": "OpenRouter",
      "title": ":free 标记模型免费调用",
      "quota": "免费模型 20 RPM / 50–200 请求每天；充 $10 后 1000 请求/天",
      "quotaTier": 10,
      "cadence": "永久",
      "claimMethod": "注册后在 Models 页筛选 :free 模型",
      "url": "https://openrouter.ai/",
      "deadline": null,
      "deadlineText": "长期有效（免费模型会变动）",
      "requirements": [
        "注册账号"
      ],
      "region": "海外",
      "source": "网络补充",
      "sourceUrl": "https://onlinepixelz.xyz/blogs/free-ai-api-credits",
      "tags": [
        "模型聚合",
        "免费模型"
      ],
      "notes": "2026-11-25 复核：:free 模型 20 RPM / 50 RPD，账户累计充值满 $10 后升至 1000 RPD；免费模型集合每周变动，请从 API 动态读取而非硬编码。",
      "discoveredAt": "2026-11-23",
      "statusTag": "active"
    },
    {
      "id": "nvidia-nim",
      "provider": "NVIDIA NIM",
      "title": "开发者计划免费额度",
      "quota": "免费开发者额度（动态配额），含 DeepSeek V4.1-Flash / GLM-5.3-Flash 等",
      "quotaTier": 20,
      "cadence": "按量",
      "claimMethod": "注册 build.nvidia.com 开发者账号生成 Key",
      "url": "https://build.nvidia.com/",
      "deadline": null,
      "deadlineText": "长期有效",
      "requirements": [
        "NVIDIA 开发者账号"
      ],
      "region": "海外",
      "source": "网络补充",
      "sourceUrl": "https://app.myzaker.com/news/article.php?pk=6af1ee868e9f09469b69edc9",
      "tags": [
        "开源模型",
        "免绑卡"
      ],
      "notes": "2026-11-25 复核：免费原型额度以控制台为准，模型池持续轮换（含 GLM、Kimi、Mistral、Step 系列）；条款限内部评测，不建议直接用于生产。",
      "discoveredAt": "2026-11-23",
      "statusTag": "active"
    },
    {
      "id": "mistral",
      "provider": "Mistral La Plateforme",
      "title": "Free 模式含每月免费用量",
      "quota": "Free 模式：每月包含一定免费用量，128K 上下文",
      "quotaTier": 10,
      "cadence": "每月",
      "claimMethod": "注册 console.mistral.ai 创建 API Key",
      "url": "https://console.mistral.ai/",
      "deadline": null,
      "deadlineText": "免费 API 已取消",
      "requirements": [
        "邮箱注册"
      ],
      "region": "海外",
      "source": "网络补充",
      "sourceUrl": "https://docs.mistral.ai/deployment/laplateforme/usage/",
      "tags": [
        "已停免",
        "欧洲厂商",
        "转付费"
      ],
      "notes": "2026-11-25 复核：官方用量与限额文档明确 Free 模式仅含 Vibe/Studio 用量，不含 API 访问；创建 API Key 需激活计费与预付费。开放权重模型可改用 NVIDIA NIM、OVHcloud AI Endpoints 或 Cloudflare Workers AI。",
      "discoveredAt": "2026-11-23",
      "statusTag": "expired"
    },
    {
      "id": "github-models",
      "provider": "GitHub Models",
      "title": "免费体验 GPT / Claude 等模型",
      "quota": "约 10 RPM / 150 请求每天（按模型不同）",
      "quotaTier": 10,
      "cadence": "永久",
      "claimMethod": "GitHub 账号登录 Marketplace → Models，生成免费 Token",
      "url": "https://github.com/marketplace/models",
      "deadline": null,
      "deadlineText": "2026-07-30 已停服",
      "requirements": [
        "GitHub 账号"
      ],
      "region": "海外",
      "source": "网络补充",
      "sourceUrl": "https://docs.github.com/en/github-models",
      "tags": [
        "已停服",
        "历史活动"
      ],
      "notes": "GitHub 官方文档：2026-07-30 起 GitHub Models 全面退役，Playground、模型目录、推理 API 与 BYOK 均不可用；与 GitHub Copilot 无关。替代路线见 zai-glm-flash-free / google-ai-studio。",
      "discoveredAt": "2026-11-23",
      "statusTag": "expired"
    },
    {
      "id": "modelscope",
      "provider": "魔搭 ModelScope",
      "title": "每日登录领 250 积分",
      "quota": "手机号登录每天可领 250 积分，用于模型调用",
      "quotaTier": 10,
      "cadence": "每日",
      "claimMethod": "手机号登录魔搭社区，完成实名认证后领取积分",
      "url": "https://modelscope.cn/",
      "deadline": null,
      "deadlineText": "长期有效",
      "requirements": [
        "手机号",
        "实名认证"
      ],
      "region": "国内",
      "source": "网络补充",
      "sourceUrl": "https://g.itadn.com/repos/swufe-xiongmin/free_premium_ai",
      "tags": [
        "国内",
        "需实名",
        "积分制"
      ],
      "notes": "相比此前额度有缩减，请以积分规则文档为准。",
      "discoveredAt": "2026-11-23",
      "statusTag": "active"
    },
    {
      "id": "aihubmix",
      "provider": "AIHubMix",
      "title": "16 个模型 $0 计价，注册即得 Key",
      "quota": "16 个免费模型（GLM-4.7-Flash / Nemotron 3 Ultra / Qwen3.8 Max 等）",
      "quotaTier": 20,
      "cadence": "按量",
      "claimMethod": "注册账号后控制台直接生成 API Key，无需绑卡",
      "url": "https://aihubmix.com/",
      "deadline": null,
      "deadlineText": "促销期内免费，以官方为准",
      "requirements": [
        "邮箱注册"
      ],
      "region": "海外/国内可用",
      "source": "网络补充",
      "sourceUrl": "https://freeinference.dev/providers/aihubmix",
      "tags": [
        "模型多",
        "免绑卡",
        "OpenAI 兼容"
      ],
      "notes": "OpenAI 兼容端点 https://api.aihubmix.com/v1，免费模型可能随时调整。",
      "discoveredAt": "2026-11-23",
      "statusTag": "active"
    },
    {
      "id": "freeinference",
      "provider": "FreeInference (Harvard MadSys Lab)",
      "title": "高校实验室免费推理，免绑卡",
      "quota": "额度官方描述为「generous」，含 GLM-5.3 Flash / DeepSeek V4 Flash / MiniMax M3",
      "quotaTier": 20,
      "cadence": "按量",
      "claimMethod": "邮箱注册，无银行卡要求；支持 OpenAI 与 Anthropic 两种端点",
      "url": "https://freeinference.dev/",
      "deadline": null,
      "deadlineText": "长期有效（以官方为准）",
      "requirements": [
        "邮箱注册"
      ],
      "region": "海外",
      "source": "网络补充",
      "sourceUrl": "https://free-llm.com/guides/free-llm-apis-november-2026-what-changed",
      "tags": [
        "高校背景",
        "免绑卡",
        "1M 上下文"
      ],
      "notes": "实验室会研究 agent 流量，请勿发送隐私数据。",
      "discoveredAt": "2026-11-23",
      "statusTag": "active"
    },
    {
      "id": "joingonka",
      "provider": "JoinGonka Gateway",
      "title": "邮箱验证送 300 万 Token",
      "quota": "确认邮箱后到账 300 万 Token（一次性启动额度）",
      "quotaTier": 20,
      "cadence": "一次性",
      "claimMethod": "邮箱注册验证，或用 Google / GitHub / Discord 登录（邮箱已验证）",
      "url": "https://joingonka.ai/",
      "deadline": null,
      "deadlineText": "长期有效",
      "requirements": [
        "邮箱验证"
      ],
      "region": "海外",
      "source": "网络补充",
      "sourceUrl": "https://joingonka.ai/en/knowledge/free-ai-api",
      "tags": [
        "免绑卡",
        "一个 Key 多模型"
      ],
      "notes": "额度按输入 token 价格折算，实际任务消耗会略快于标称数量。",
      "discoveredAt": "2026-11-23",
      "statusTag": "active"
    },
    {
      "id": "regolo-ai",
      "provider": "Regolo.ai",
      "title": "30 天每天 100 万 Token",
      "quota": "新用户 30 天内每天 100 万 Token，欧盟托管、零留存",
      "quotaTier": 20,
      "cadence": "每日",
      "claimMethod": "注册账号，无需银行卡",
      "url": "https://regolo.ai/",
      "deadline": null,
      "deadlineText": "开通后 30 天",
      "requirements": [
        "注册账号"
      ],
      "region": "海外",
      "source": "网络补充",
      "sourceUrl": "https://free-llm.com/guides/free-llm-apis-november-2026-what-changed",
      "tags": [
        "零留存",
        "免绑卡",
        "限时试用"
      ],
      "notes": "30 天试用结束后需付费。",
      "discoveredAt": "2026-11-23",
      "statusTag": "active"
    },
    {
      "id": "tencent-tokenhub",
      "provider": "腾讯云 TokenHub",
      "title": "新用户每个模型免费 100 万 Token，活动至 12-31",
      "quota": "语言/多模态模型每个 100 万 Token，领取后有效期 1 年",
      "quotaTier": 20,
      "cadence": "一次性",
      "claimMethod": "开通 TokenHub 后进入模型广场点「新用户福利免费体验」勾选模型领取；首次调用也可自动领取",
      "url": "https://cloud.tencent.com.cn/document/product/297/130053",
      "deadline": "2026-12-31",
      "deadlineText": "活动至 2026-12-31，额度领取后 1 年有效",
      "requirements": [
        "腾讯云账号",
        "实名认证",
        "需冻结 $10 预授权（混元 $30）"
      ],
      "region": "国内",
      "source": "网络更新",
      "sourceUrl": "https://www.tencentcloud.com/zh/document/product/1300/80423",
      "tags": [
        "国内大厂",
        "多模型",
        "官方"
      ],
      "notes": "每账号每模型限领一次；调用优先扣免费额度，未开后付费用完自动停。只领近期会用的模型，避免一年后过期浪费。",
      "discoveredAt": "2026-11-23",
      "statusTag": "active"
    },
    {
      "id": "baichuan-ai",
      "provider": "百川智能 Baichuan AI",
      "title": "新用户 ¥80 注册额度，约 1000 万 Token",
      "quota": "一次性 ¥80 注册额度，约 1000 万 Baichuan2-Turbo Token，有效期 3 个月",
      "quotaTier": 20,
      "cadence": "一次性",
      "claimMethod": "在百川智能开放平台注册账号，无需银行卡",
      "url": "https://www.baichuan-ai.com/",
      "deadline": null,
      "deadlineText": "开通后 3 个月有效",
      "requirements": [
        "注册账号"
      ],
      "region": "国内",
      "source": "网络更新",
      "sourceUrl": "https://dev.to/shiva_prasad_cc614c6ee026/new-free-llm-api-credits-added-in-mid-november-2026-4fbh",
      "tags": [
        "免绑卡",
        "新用户",
        "3个月"
      ],
      "notes": "官方端点 https://api.baichuan-ai.com/v1；未公布每日 Token 上限与速率限制，以控制台为准。",
      "discoveredAt": "2026-11-23",
      "statusTag": "active"
    },
    {
      "id": "amd-token-lab",
      "provider": "AMD Token Lab",
      "title": "AI 开发者计划送 10 点免费额度（30 天）",
      "quota": "10 Token Lab 点数，30 天访问期，可延长 15 天一次；约 20 请求/分钟/Key",
      "quotaTier": 10,
      "cadence": "一次性",
      "claimMethod": "加入 AMD AI Developer Program 免费会员，在 Token Lab 生成 API Key",
      "url": "https://api.tokenlab.amd.com/v1",
      "deadline": null,
      "deadlineText": "开通后 30 天，可延长 15 天",
      "requirements": [
        "AMD 开发者账号",
        "免费会员"
      ],
      "region": "海外",
      "source": "网络更新",
      "sourceUrl": "https://dev.to/shiva_prasad_cc614c6ee026/new-free-llm-api-credits-added-in-mid-november-2026-4fbh",
      "tags": [
        "免绑卡",
        "开源模型",
        "限时试用"
      ],
      "notes": "点数按模型速率扣除，可选 DeepSeek V4 / Qwen3.8 / Gemma 4 / GLM-5.3；AMD 官方页未公布确切点数，以控制台为准。",
      "discoveredAt": "2026-11-23",
      "statusTag": "active"
    },
    {
      "id": "jina-ai",
      "provider": "Jina AI",
      "title": "一次性 1000 万 Token + 免密钥 Reader",
      "quota": "全模型 1000 万 Token 一次性赠送（embeddings / rerank / classifier）；r.jina.ai 免密钥基础读取",
      "quotaTier": 20,
      "cadence": "一次性",
      "claimMethod": "注册 Jina AI 账号获取 Token，或用 r.jina.ai 免密钥读取网页",
      "url": "https://jina.ai/",
      "deadline": null,
      "deadlineText": "一次性赠送，用完即止",
      "requirements": [
        "注册账号（Reader 免注册）"
      ],
      "region": "海外",
      "source": "网络更新",
      "sourceUrl": "https://freellmapihub.com/collections/free-signup-credit",
      "tags": [
        "免绑卡",
        "可商用",
        "检索增强"
      ],
      "notes": "1000 万 Token 不续期；数据不用于训练，适合 RAG 与网页读取场景。",
      "discoveredAt": "2026-11-23",
      "statusTag": "active"
    },
    {
      "id": "deepgram",
      "provider": "Deepgram",
      "title": "新用户 $200 语音 API 额度，不过期",
      "quota": "注册即送 $200 额度，Nova 语音转写 / Aura 语音合成按量扣费，无有效期",
      "quotaTier": 20,
      "cadence": "一次性",
      "claimMethod": "注册 Deepgram 控制台账号，额度自动到账",
      "url": "https://console.deepgram.com/",
      "deadline": null,
      "deadlineText": "额度不过期，用完即止",
      "requirements": [
        "注册账号"
      ],
      "region": "海外",
      "source": "网络更新",
      "sourceUrl": "https://freellmapihub.com/collections/free-signup-credit",
      "tags": [
        "免绑卡",
        "语音",
        "大额"
      ],
      "notes": "默认加入数据改进计划，需每次请求带 mip_opt_out=true 退出；原生 REST/WebSocket，非 OpenAI 兼容。",
      "discoveredAt": "2026-11-23",
      "statusTag": "active"
    },
    {
      "id": "anyapi-ai",
      "provider": "AnyAPI.ai",
      "title": "每天免费约 1 亿 Tokens，免绑卡免费模型",
      "quota": "免费档每天给 10 万 AnyTokens，按官方口径约合 1 亿 Tokens，免费模型不花钱",
      "quotaTier": 100,
      "cadence": "每日",
      "claimMethod": "注册账号，免绑卡，直接调用免费模型",
      "url": "https://anyapi.ai/",
      "deadline": null,
      "deadlineText": "无公布结束日",
      "requirements": [
        "注册账号",
        "免绑卡"
      ],
      "region": "海外",
      "source": "原文",
      "sourceUrl": "https://mp.weixin.qq.com/s/9Yo7_yKd1XGg5A6FiQY9CQ",
      "tags": [
        "超大额度",
        "免绑卡",
        "每日"
      ],
      "notes": "官方口径每天 10 万 AnyTokens 约合 1 亿 Tokens，免费模型不花钱，免绑卡，无公布结束日。",
      "discoveredAt": "2026-11-24",
      "statusTag": "active"
    },
    {
      "id": "rusherai",
      "provider": "RusherAI",
      "title": "每周免费 5000 万 Tokens，9 款模型通用",
      "quota": "每周免费 5000 万 Tokens，9 款模型通用",
      "quotaTier": 50,
      "cadence": "每周",
      "claimMethod": "注册账号，免绑卡，网页端使用",
      "url": "https://rusherai.com/signup?ref=RUSHDTXH74",
      "deadline": null,
      "deadlineText": "无公布结束日",
      "requirements": [
        "注册账号",
        "免绑卡",
        "网页端使用"
      ],
      "region": "海外",
      "source": "原文",
      "sourceUrl": "https://mp.weixin.qq.com/s/9Yo7_yKd1XGg5A6FiQY9CQ",
      "tags": [
        "千万级",
        "免绑卡",
        "多模型"
      ],
      "notes": "每周免费 5000 万 Tokens，9 款模型通用，免绑卡，只能在网页上聊，无公布结束日。",
      "discoveredAt": "2026-11-24",
      "statusTag": "active"
    },
    {
      "id": "apisfreellm",
      "provider": "APIsFreeLLM",
      "title": "每天免费 10000 次或 1000 万 Tokens，免注册免 Key",
      "quota": "每天免费调 10000 次或 1000 万 Tokens，先到为准",
      "quotaTier": 20,
      "cadence": "每日",
      "claimMethod": "不用注册、不用 Key、不用绑卡，直接调用",
      "url": "https://apisfreellm.com/",
      "deadline": null,
      "deadlineText": "无公布结束日",
      "requirements": [
        "免注册",
        "免 Key",
        "免绑卡"
      ],
      "region": "海外",
      "source": "原文",
      "sourceUrl": "https://mp.weixin.qq.com/s/9Yo7_yKd1XGg5A6FiQY9CQ",
      "tags": [
        "百万级",
        "免注册",
        "免Key"
      ],
      "notes": "不用注册、不用 Key、不用绑卡，每天 10000 次或 1000 万 Tokens 先到为准，无公布结束日。",
      "discoveredAt": "2026-11-24",
      "statusTag": "active"
    },
    {
      "id": "one-ai-api-key",
      "provider": "One AI API Key",
      "title": "每天免费 100 次请求和 500 万 Tokens，注册得 $10 额度",
      "quota": "每天免费 100 次请求和 500 万 Tokens，注册得 10 美元额度",
      "quotaTier": 20,
      "cadence": "每日",
      "claimMethod": "注册账号，免绑卡",
      "url": "https://oneaiapikey.com/",
      "deadline": null,
      "deadlineText": "无公布结束日",
      "requirements": [
        "注册账号",
        "免绑卡"
      ],
      "region": "海外",
      "source": "原文",
      "sourceUrl": "https://mp.weixin.qq.com/s/9Yo7_yKd1XGg5A6FiQY9CQ",
      "tags": [
        "百万级",
        "免绑卡",
        "注册礼金"
      ],
      "notes": "每天免费 100 次请求和 500 万 Tokens，注册得 10 美元额度，免绑卡，无公布结束日。",
      "discoveredAt": "2026-11-24",
      "statusTag": "active"
    },
    {
      "id": "packet-ai",
      "provider": "Packet AI",
      "title": "DeepSeek 等 3 款模型输入输出全免费（至 12 月 16 日）",
      "quota": "DeepSeek 等 3 款模型输入输出全免费，免费到 12 月 16 日，之后按量计费",
      "quotaTier": 20,
      "cadence": "一次性",
      "claimMethod": "注册账号，在 token-factory-free 页面使用",
      "url": "https://packet.ai/token-factory-free",
      "deadline": "2026-12-16",
      "deadlineText": "2026-12-16 截止，之后按量计费",
      "requirements": [
        "注册账号"
      ],
      "region": "海外",
      "source": "原文",
      "sourceUrl": "https://mp.weixin.qq.com/s/9Yo7_yKd1XGg5A6FiQY9CQ",
      "tags": [
        "限时",
        "全免费",
        "DeepSeek"
      ],
      "notes": "DeepSeek 等 3 款模型输入输出全免费，免费到 2026-12-16，之后按量计费。",
      "discoveredAt": "2026-11-24",
      "statusTag": "ending"
    },
    {
      "id": "inferbase",
      "provider": "Inferbase",
      "title": "免费档每月 5000 次请求 + 每日托管请求与 $0.50 额度",
      "quota": "免费档每月 5000 次请求，每天再给 100 次托管请求和 $0.50 模型额度",
      "quotaTier": 10,
      "cadence": "每月",
      "claimMethod": "注册账号，免绑卡",
      "url": "https://inferbase.ai/",
      "deadline": null,
      "deadlineText": "无公布结束日",
      "requirements": [
        "注册账号",
        "免绑卡"
      ],
      "region": "海外",
      "source": "原文",
      "sourceUrl": "https://mp.weixin.qq.com/s/9Yo7_yKd1XGg5A6FiQY9CQ",
      "tags": [
        "免绑卡",
        "托管",
        "按月"
      ],
      "notes": "免费档每月 5000 次请求，免绑卡，每天再给 100 次托管请求和 $0.50 模型额度，无公布结束日。",
      "discoveredAt": "2026-11-24",
      "statusTag": "active"
    },
    {
      "id": "agnes-ai",
      "provider": "Agnes AI",
      "title": "免费生图，三款模型 1K-4K 全部 0 元",
      "quota": "三款生图模型现行价 0 元，1K 到 4K 每一档都是 0 元",
      "quotaTier": 20,
      "cadence": "按量",
      "claimMethod": "注册账号，网页端生成",
      "url": "https://agnes-ai.com/",
      "deadline": null,
      "deadlineText": "无公布结束日",
      "requirements": [
        "注册账号",
        "按分钟限速"
      ],
      "region": "海外",
      "source": "原文",
      "sourceUrl": "https://mp.weixin.qq.com/s/aPuSyCJsFmU7qo382fUmug",
      "tags": [
        "生图",
        "免费额度",
        "多分辨率"
      ],
      "notes": "免费生图额度（非 Token 类），agnes-3.0-flash 支持文生图、图生图、多图合成；免费账号按分钟限速，官方未公布每日张数上限，无公布结束日。",
      "discoveredAt": "2026-11-24",
      "statusTag": "active"
    },
    {
      "id": "cerebras",
      "provider": "Cerebras",
      "title": "免费层极速推理，$5 试用额度",
      "quota": "$5 试用额度（30 天有效）；GPT-OSS 120B 每分钟 5 次请求、每日 100 万 Token",
      "quotaTier": 20,
      "cadence": "一次性",
      "claimMethod": "注册 Cerebras 账号，绑定已验证支付方式后获得 $5 试用额度",
      "url": "https://inference.cerebras.ai/",
      "deadline": null,
      "deadlineText": "额度 30 天有效",
      "requirements": [
        "已验证支付方式",
        "Cerebras 账号"
      ],
      "region": "海外",
      "source": "网络补充",
      "sourceUrl": "https://decodethefuture.org/en/best-free-llm-apis-2026/",
      "tags": [
        "极速推理",
        "试用额度",
        "需绑卡"
      ],
      "notes": "2026-11-25 复核：已无常设免费层，仅新账户 $5 / 30 天试用且需已验证支付方式，按试用额度而非长期免费统计。",
      "discoveredAt": "2026-11-24",
      "statusTag": "active"
    },
    {
      "id": "sambanova",
      "provider": "SambaNova",
      "title": "免费层每日 20 次请求",
      "quota": "免费层每模型每日 20 次请求；现已要求绑定支付方式并购买额度",
      "quotaTier": 10,
      "cadence": "每日",
      "claimMethod": "注册 SambaNova 账号，绑定支付方式后使用免费层",
      "url": "https://cloud.sambanova.ai/",
      "deadline": null,
      "deadlineText": "免费层长期有效（需绑支付方式）",
      "requirements": [
        "已验证支付方式",
        "SambaNova 账号"
      ],
      "region": "海外",
      "source": "网络补充",
      "sourceUrl": "https://decodethefuture.org/en/best-free-llm-apis-2026/",
      "tags": [
        "每日额度",
        "需绑卡"
      ],
      "notes": "2026-11-24 复核：SambaNova 免费层现已要求绑定支付方式并购买额度，每日 20 次请求。",
      "discoveredAt": "2026-11-24",
      "statusTag": "active"
    },
    {
      "id": "xai-grok",
      "provider": "xAI",
      "title": "Grok API 注册赠送额度",
      "quota": "注册即送 Grok API 试用额度，可用于 Grok 4 Fast 等模型",
      "quotaTier": 20,
      "cadence": "一次性",
      "claimMethod": "注册 xAI 账号，在控制台获取 API Key 即可调用",
      "url": "https://console.x.ai/",
      "deadline": null,
      "deadlineText": "注册赠送额度，用完即止",
      "requirements": [
        "xAI 账号"
      ],
      "region": "海外",
      "source": "网络补充",
      "sourceUrl": "https://perkstack.co/blog/free-llm-api-keys",
      "tags": [
        "注册赠额",
        "Grok"
      ],
      "notes": "2026-11-24 收录：xAI 为注册赠送的一次性额度，无需绑卡即可评估 Grok 4 Fast。",
      "discoveredAt": "2026-11-24",
      "statusTag": "active"
    },
    {
      "id": "novita",
      "provider": "Novita",
      "title": "注册与推荐赠送额度，海量开源模型",
      "quota": "$100 Sandbox 赠金（问卷后领取，仅抵扣 Agent Sandbox，不抵扣模型 API）",
      "quotaTier": 20,
      "cadence": "一次性",
      "claimMethod": "注册 Novita 账号获取 API Key，邀请好友可获额外额度",
      "url": "https://novita.ai/",
      "deadline": null,
      "deadlineText": "赠送额度，用完即止",
      "requirements": [
        "Novita 账号"
      ],
      "region": "海外",
      "source": "网络补充",
      "sourceUrl": "https://perkstack.co/blog/free-llm-api-keys",
      "tags": [
        "注册赠额",
        "开源模型",
        "推荐奖励"
      ],
      "notes": "2026-11-25 复核：Sandbox 赠金与模型 API 计费分离；Apodex 1.1 Mini 已下架，ToS 禁止未经许可商用。",
      "discoveredAt": "2026-11-24",
      "statusTag": "active"
    },
    {
      "id": "fireworks",
      "provider": "Fireworks",
      "title": "注册赠送起步额度",
      "quota": "注册赠送小额起步额度，可用于 Serverless 端点基准测试",
      "quotaTier": 10,
      "cadence": "一次性",
      "claimMethod": "注册 Fireworks 账号，在控制台获取 API Key",
      "url": "https://fireworks.ai/",
      "deadline": null,
      "deadlineText": "赠送额度，用完即止",
      "requirements": [
        "Fireworks 账号"
      ],
      "region": "海外",
      "source": "网络补充",
      "sourceUrl": "https://perkstack.co/blog/free-llm-api-keys",
      "tags": [
        "注册赠额",
        "Serverless"
      ],
      "notes": "2026-11-24 收录：Fireworks 提供小额起步额度，适合基准测试其 Serverless 端点。",
      "discoveredAt": "2026-11-24",
      "statusTag": "active"
    },
    {
      "id": "cohere",
      "provider": "Cohere",
      "title": "试用密钥每月 1000 次调用",
      "quota": "试用密钥每月 1000 次调用，单次 ≤ 4096 Token，覆盖 Command 系列模型",
      "quotaTier": 10,
      "cadence": "每月",
      "claimMethod": "注册 Cohere 账号，生成试用 API Key",
      "url": "https://cohere.com/",
      "deadline": null,
      "deadlineText": "每月刷新试用额度",
      "requirements": [
        "Cohere 账号"
      ],
      "region": "海外",
      "source": "网络补充",
      "sourceUrl": "https://decodethefuture.org/en/best-free-llm-apis-2026/",
      "tags": [
        "按月额度",
        "试用密钥"
      ],
      "notes": "2026-11-24 收录：Cohere 提供试用密钥，每月 1000 次调用，适合评估 Command 模型。",
      "discoveredAt": "2026-11-24",
      "statusTag": "active"
    },
    {
      "id": "kimi-moonshot",
      "provider": "Kimi（月之暗面）",
      "title": "长上下文中文模型开放试用 API",
      "quota": "长上下文（256K）中文模型开放试用 API，适合文档密集型中文场景",
      "quotaTier": 20,
      "cadence": "按量",
      "claimMethod": "注册 Moonshot 开放平台，获取 API Key 调用 Kimi 模型",
      "url": "https://platform.moonshot.cn/",
      "deadline": null,
      "deadlineText": "试用额度，按量赠送",
      "requirements": [
        "Moonshot 账号"
      ],
      "region": "国内",
      "source": "网络补充",
      "sourceUrl": "https://apishare.cc/article/ov-01/en",
      "tags": [
        "长上下文",
        "中文模型",
        "试用"
      ],
      "notes": "2026-11-24 收录：Kimi 提供长上下文中文模型的开放试用 API，适合长文档处理。",
      "discoveredAt": "2026-11-24",
      "statusTag": "active"
    },
    {
      "id": "aliyun-bailian",
      "provider": "阿里云百炼",
      "title": "新用户赠送 7000 万 Token（90 天有效）",
      "quota": "新用户注册赠送 7000 万 Token，90 天有效，覆盖通义千问等模型",
      "quotaTier": 50,
      "cadence": "一次性",
      "claimMethod": "注册阿里云百炼账号，完成实名认证后领取新用户额度",
      "url": "https://bailian.console.aliyun.com/",
      "deadline": null,
      "deadlineText": "赠送额度 90 天有效",
      "requirements": [
        "阿里云账号",
        "实名认证"
      ],
      "region": "国内",
      "source": "网络补充",
      "sourceUrl": "https://www.chooseai.io/news/7415",
      "tags": [
        "超大额度",
        "新户赠额",
        "限时"
      ],
      "notes": "2026-11-24 收录：阿里云百炼新用户赠送 7000 万 Token，90 天有效，国内主流大模型平台之一。",
      "discoveredAt": "2026-11-24",
      "statusTag": "active"
    },
    {
      "id": "zcode-nightly-tokens",
      "provider": "智谱 ZCode",
      "title": "每天免费 3 亿 GLM-5.3-Flash Token（夜间时段）",
      "quota": "每账号每天可领 3 亿（300M）GLM-5.3-Flash Token，仅限 ZCode 客户端内使用，当天有效、不累计",
      "quotaTier": 100,
      "cadence": "每日",
      "claimMethod": "更新 ZCode 客户端至最新版并登录，北京时间每日 19:00 起在客户端左下角领取卡片点击领取；23:00 后切换到 Start/Global Building 并选择 GLM-5.3-Flash 即可使用",
      "url": "https://zcode.z.ai/cn",
      "deadline": null,
      "deadlineText": "官方未公布截止日期，以客户端当日显示为准",
      "requirements": [
        "ZCode 最新版客户端",
        "账号登录",
        "仅限每日 23:00 至次日 09:00 使用"
      ],
      "region": "国内",
      "source": "网络更新",
      "sourceUrl": "https://x.com/zcode_ai/status/2114762939421139426",
      "tags": [
        "每日领取",
        "超大额度",
        "客户端内使用",
        "夜间限定",
        "替代 AutoClaw"
      ],
      "notes": "替代 AutoClaw。官方 X @zcode_ai 于 2026-10-27 公告的常态化每日福利，经多个来源交叉验证仍有效；AutoClaw 每周活动已于 11-22 结束。额度只在 ZCode 客户端内、仅 GLM-5.3-Flash、仅夜间窗口可用，不分发独立 API Key，免费账号也可领。",
      "discoveredAt": "2026-11-24",
      "statusTag": "active"
    },
    {
      "id": "scaleway-generative-apis",
      "provider": "Scaleway Generative APIs",
      "title": "新客赠送 100 万 Token，whisper 音频与部分模型免费",
      "quota": "每位新用户一次性免费 1,000,000 Token（第 1000001 个起计费）；whisper-large-v3 音频转录与 qwen3-embedding 等模型免费调用",
      "quotaTier": 10,
      "cadence": "一次性",
      "claimMethod": "注册 Scaleway 账户，在 Generative APIs 控制台直接调用，OpenAI 兼容接口",
      "url": "https://www.scaleway.com/en/generative-apis/",
      "deadline": null,
      "deadlineText": "长期有效（Beta 期间服务完全免费，正式计费后仍保留 100 万新客额度）",
      "requirements": [
        "注册 Scaleway 账户",
        "解除速率限制需完成 KYC 并绑定信用卡"
      ],
      "region": "海外",
      "source": "网络补充",
      "sourceUrl": "https://perq.sh/blog/free-llm-api-tiers-november-update",
      "tags": [
        "新客额度",
        "OpenAI兼容",
        "欧洲托管"
      ],
      "notes": "2026-11-25 复核：新客户 100 万 Token 仍有效；glm-5.2 于 11-16 退役转 glm-5.3，DeepSeek V4.1 Flash 模型 ID 调整为 deepseek-v4.1-flash-1017。",
      "discoveredAt": "2026-11-25",
      "statusTag": "active"
    },
    {
      "id": "maritaca-s5-free",
      "provider": "Maritaca AI",
      "title": "S5-free 模型限时不计费（文本）",
      "quota": "S5-free 模型 Token 限时不计费（仅文本；Batch API、Flex 与内置工具不参与）；官方未公布结束日，声明可能随时下线",
      "quotaTier": 10,
      "cadence": "限时",
      "claimMethod": "注册 Maritaca AI API 账户即可调用 S5-free 模型",
      "url": "https://maritaca.ai/",
      "deadline": null,
      "deadlineText": "无公布结束日，官方声明可能随时终止",
      "requirements": [
        "注册 Maritaca AI API 账户"
      ],
      "region": "海外",
      "source": "网络补充",
      "sourceUrl": "https://perq.sh/blog/free-llm-api-tiers-november-update",
      "tags": [
        "限时",
        "文本模型"
      ],
      "notes": "2026-11-25 官网复核：Maritaca 旗下 S5 / S5-nano 提供 API，S5-free 为限时免费档；推理 100% 在巴西境内，面向巴西数据场景。",
      "discoveredAt": "2026-11-25",
      "statusTag": "active"
    },
    {
      "id": "sensenova-token-plan",
      "provider": "商汤 SenseNova Token Plan",
      "title": "Token Plan 公测完全免费，多模型按量限速调用",
      "quota": "公测阶段完全免费：单模型每 5 小时 1500 次调用，双积分池每周 120 万积分，限速 60 RPM，OpenAI 兼容接口，支持多模态与对话",
      "quotaTier": 10,
      "cadence": "每日",
      "claimMethod": "注册商汤 SenseNova 开放平台账号，开通 Token Plan 后直接调用",
      "url": "https://www.sensenova.cn/token-plan",
      "deadline": null,
      "deadlineText": "公测期，无公布结束日",
      "requirements": [
        "注册商汤 SenseNova 开放平台账号",
        "按国内平台要求完成实名认证"
      ],
      "region": "国内",
      "source": "网络补充",
      "sourceUrl": "https://aitujian.cn/free-ai-api.html",
      "tags": [
        "公测免费",
        "OpenAI兼容",
        "多模态",
        "国内"
      ],
      "notes": "2026-11-25 官网复核：platform.sensenova.cn 提供 Token Plan 入口，公测免费按限速调用。",
      "discoveredAt": "2026-11-25",
      "statusTag": "active"
    },
    {
      "id": "workbuddy-invite-points",
      "provider": "WorkBuddy 邀请送积分",
      "title": "邀请好友双方得积分：新用户注册即得 2,000，邀请方最高 650/人",
      "quota": "活动一·邀请好友：每邀 1 位好友最高得 650 积分——好友首次注册并完成一次对话或任务得 50 积分，好友活跃满 3 天（注册后 7 天内）再得 100 积分，好友 30 天内首次付费升级再得 500 积分；受邀新用户注册即得 2,000 积分，首次付费升级好友再得 500 积分。活动二·分享产物：分享 WorkBuddy 生成的产物，同一链接有 3 位用户查看即得 30 积分，每个账号限领一次。",
      "quotaTier": 10,
      "cadence": "一次性",
      "claimMethod": "通过邀请链接注册 WorkBuddy 账号（受邀方即得 2,000 积分）；或在自己的 WorkBuddy PC 客户端获取邀请链接/分享产物页参与活动",
      "url": "https://www.workbuddy.cn/events/invite?inviteCode=myy5gfl52zbt8o9",
      "deadline": null,
      "deadlineText": "长期活动，暂无公布结束日",
      "requirements": [
        "注册 WorkBuddy 账号（PC 客户端 / 移动端 / 小程序均可）",
        "受邀方需完成一次对话或任务才算「开始使用」",
        "分享产物需同一链接被 3 位用户查看才计入"
      ],
      "region": "国内",
      "source": "原文",
      "sourceUrl": "https://www.workbuddy.cn/events/invite?inviteCode=myy5gfl52zbt8o9",
      "tags": [
        "积分奖励",
        "邀请有礼",
        "新用户福利",
        "国内",
        "长期活动"
      ],
      "notes": "积分即 WorkBuddy 内生成额度（图生图约 5-10 积分/张），可直接抵扣图片/视频/3D 生成消耗。邀请活跃与付费奖励可累计。",
      "discoveredAt": "2026-11-25",
      "statusTag": "active"
    },
    {
      "id": "qiniu-conatus-free",
      "provider": "七牛云 Conatus Free",
      "title": "认证用户每日 1 亿 Token 免费（充值后最高 10 亿）",
      "quota": "活动期间完成实名认证，每日 1 亿 Token 免费额度（每日 00:00 重置，不结转）；任意一笔大于 100 元且已到账的充值后提升至每日 10 亿 Token（多笔不累计）。模型 ID qiniu/conatus-free，支持深度思考、工具调用、图像理解、结构化输出，1M 上下文、最大 128K 输出",
      "quotaTier": 100,
      "cadence": "每日",
      "claimMethod": "登录七牛云账号并完成实名认证，控制台创建 API Key，以模型 ID qiniu/conatus-free 发起请求（兼容 Completions 与 Messages 协议）",
      "url": "https://www.qiniu.com/ai/free-models/conatus-2026",
      "deadline": "2026-11-30",
      "deadlineText": "活动至 2026-11-30 23:59（北京时间），结束后免费模型停止调用",
      "requirements": [
        "七牛云账号并完成实名认证",
        "未受风控限制",
        "仅活动免费额度可用，额度用完即拒绝、不扣费"
      ],
      "region": "国内",
      "source": "网络补充",
      "sourceUrl": "https://www.qiniu.com/ai/free-models/conatus-2026",
      "tags": [
        "限时免费",
        "每日重置",
        "工具调用",
        "多模态",
        "国内"
      ],
      "notes": "2026-11-25 官网活动页复核：活动 2026-10-24 至 11-30，认证用户每日 1 亿 Token，充值后 10 亿；免费额度不结转、活动结束即停。",
      "discoveredAt": "2026-11-25",
      "statusTag": "active"
    },
    {
      "id": "articul8-bivia",
      "provider": "Articul8 Bivia",
      "title": "早期用户免费 10 亿 Token（System One API）",
      "quota": "Bivia 早期采用者计划：前 10,000 名早期用户免费获得 10 亿 Token，作为 Jev（或任意 System One API）的替代品",
      "quotaTier": 80,
      "cadence": "一次性",
      "claimMethod": "访问 articul8.ai/bivia 注册并申请早期采用者资格，领取 10 亿 Token 额度",
      "url": "https://articul8.ai/bivia",
      "deadline": null,
      "deadlineText": "早期采用者活动，名额（前 10,000 名）用完即止",
      "requirements": [
        "注册 Articul8 账号并申请 Bivia 早期采用者资格",
        "名额有限，先到先得"
      ],
      "region": "海外",
      "source": "网络补充",
      "sourceUrl": "https://articul8.ai/bivia",
      "tags": [
        "早期采用者",
        "一次性额度",
        "10亿Token"
      ],
      "notes": "2026-11-25 官网复核：首页 LIVE 公告「Bivia is here — A billion tokens free for early adopters」，为 Intel 分拆的领域专属 GenAI 平台。",
      "discoveredAt": "2026-11-25",
      "statusTag": "active"
    },
    {
      "id": "llm-kiwi",
      "provider": "LLM.kiwi",
      "title": "免卡免费 OpenAI 兼容 API，智能路由自动选模型",
      "quota": "免费计划：无需信用卡，注册即得 API Key，model=auto 由路由自动选择最优模型（GPT-OSS-120B、Gemma 4、Nemotron 3、MiniMax M3 等），OpenAI 兼容 chat completions 接口",
      "quotaTier": 60,
      "cadence": "长期",
      "claimMethod": "访问 llm.kiwi 注册账号，控制台创建 API Key，将 base URL 指向 api.llm.kiwi/v1 即可调用",
      "url": "https://llm.kiwi/",
      "deadline": null,
      "deadlineText": "免费计划长期有效，具体额度以官网为准",
      "requirements": [
        "注册 LLM.kiwi 账号",
        "无需信用卡"
      ],
      "region": "海外",
      "source": "网络补充",
      "sourceUrl": "https://llm.kiwi/",
      "tags": [
        "免信用卡",
        "OpenAI兼容",
        "智能路由",
        "长期免费"
      ],
      "notes": "2026-11-25 官网复核：明确「Free to start / No credit card / Smart routing」，OpenAI 兼容端点 api.llm.kiwi/v1。",
      "discoveredAt": "2026-11-25",
      "statusTag": "active"
    },
    {
      "id": "opentyphoon-api",
      "provider": "OpenTyphoon（SCB 10X）",
      "title": "泰国 SCB 10X 免费泰语/英语研究展示 API",
      "quota": "免费研究展示 API：泰语与英语（Typhoon 2.5 等模型），200 requests/minute，面向泰语用户的开源 LLM 研究展示",
      "quotaTier": 50,
      "cadence": "长期",
      "claimMethod": "访问 opentyphoon.ai 申请研究展示 API 访问权限，按文档接入 OpenAI 兼容接口",
      "url": "https://opentyphoon.ai/",
      "deadline": null,
      "deadlineText": "研究展示（research showcase）免费，长期开放",
      "requirements": [
        "申请 OpenTyphoon 研究展示 API 访问",
        "面向泰语/英语场景"
      ],
      "region": "海外（泰国）",
      "source": "网络补充",
      "sourceUrl": "https://opentyphoon.ai/",
      "tags": [
        "研究展示",
        "泰语",
        "免费API",
        "多语言"
      ],
      "notes": "2026-11-25 官网复核：泰国前沿 AI 研究实验室（SCB 10X），开源泰语 LLM，官网提供 Typhoon 系列模型与研究展示 API；第三方报道 200 rpm 免费额度。",
      "discoveredAt": "2026-11-25",
      "statusTag": "active"
    },
    {
      "id": "stepfun-step5-preview",
      "provider": "阶跃星辰 Step 5 Preview",
      "title": "Model Lab 推理模型长期免费（0 元不限量，并发 1）",
      "quota": "阶跃星辰推理模型 step-5-preview 在 Model Lab 长期 0 元、不限量调用，并发 1，1M 上下文",
      "quotaTier": 70,
      "cadence": "长期",
      "claimMethod": "访问 stepfun.com 阶跃 Model Lab，登录后在 Model Lab 内直接调用 step-5-preview 模型",
      "url": "https://www.stepfun.com/step-5-preview",
      "deadline": null,
      "deadlineText": "长期免费（0 元不限量），以官网当期显示为准",
      "requirements": [
        "阶跃星辰账号",
        "在 Model Lab 内调用"
      ],
      "region": "国内",
      "source": "网络补充",
      "sourceUrl": "https://www.stepfun.com/step-5-preview",
      "tags": [
        "长期免费",
        "推理模型",
        "1M上下文",
        "国内"
      ],
      "notes": "2026-11-25 官网复核：阶跃官网确认 Step 5 Preview 为面向真实任务的新一代旗舰基模；第三方报道其在 Model Lab 长期 0 元、不限量、并发 1。",
      "discoveredAt": "2026-11-25",
      "statusTag": "active"
    },
    {
      "id": "ovh-ai-endpoints",
      "provider": "OVHcloud AI Endpoints",
      "title": "EU 托管 Serverless 开源模型 API，匿名免注册免 Key",
      "quota": "EU 托管的 Serverless 开源模型 API，匿名 OpenAI 兼容访问，无需注册、无需 API Key、无需信用卡；模型含 Qwen3.8-27B、GPT-OSS-120B、Qwen3.6 等",
      "quotaTier": 70,
      "cadence": "长期",
      "claimMethod": "直接以匿名方式访问端点 oai.endpoints.kepler.ai.cloud.ovh.net/v1，无需注册与 Key 即可调用（OpenAI 兼容）",
      "url": "https://www.ovhcloud.com/ai-endpoints/",
      "deadline": null,
      "deadlineText": "长期免费档，以官网配额说明为准",
      "requirements": [
        "无需注册 / 无需 API Key / 无需信用卡",
        "匿名 OpenAI 兼容访问"
      ],
      "region": "海外（EU）",
      "source": "网络补充",
      "sourceUrl": "https://www.ovhcloud.com/ai-endpoints/",
      "tags": [
        "匿名访问",
        "免注册",
        "免Key",
        "EU托管",
        "Serverless"
      ],
      "notes": "2026-11-25 官网导航确认 AI Endpoints 为 OVHcloud 正式产品；第三方 awesome-free-ai-coding（2026-11-19 验证）确认匿名 OpenAI 兼容访问、免注册/Key/卡。",
      "discoveredAt": "2026-11-25",
      "statusTag": "active"
    },
    {
      "id": "gonka-broker",
      "provider": "Gonka Broker",
      "title": "去中心化算力网络，验证手机号领每月免费 Token",
      "quota": "去中心化 AI 算力网络的 Broker 网关：验证真实手机号后可领取每月免费 Token，OpenAI 兼容 API，以 GNK 结算",
      "quotaTier": 50,
      "cadence": "每月",
      "claimMethod": "访问 gonka.ai 注册并验证真实手机号，通过 Gonka Broker 网关接入 OpenAI 兼容 API",
      "url": "https://gonka.ai/",
      "deadline": null,
      "deadlineText": "每月免费 Token 额度，长期活动（以官网为准）",
      "requirements": [
        "注册 Gonka 账号并验证真实手机号",
        "通过 Broker 网关接入"
      ],
      "region": "海外",
      "source": "网络补充",
      "sourceUrl": "https://gonka.ai/",
      "tags": [
        "去中心化",
        "每月免费",
        "验证手机号",
        "OpenAI兼容"
      ],
      "notes": "2026-11-25 官网复核：Gonka 为去中心化 AI 算力网络（OpenAI 兼容 API、GNK 结算）；每月免费 Token 额度来自第三方 free-llm.com 报道，官网首页未直接展示，使用前以官方文档为准。",
      "discoveredAt": "2026-11-25",
      "statusTag": "active"
    },
    {
      "id": "assemblyai",
      "provider": "AssemblyAI",
      "title": "注册送 $50 语音 API 赠金",
      "quota": "$50 一次性赠金，覆盖预录制/实时 STT 与语音理解；LLM Gateway 不在赠金范围",
      "quotaTier": 10,
      "cadence": "一次性",
      "claimMethod": "官网注册即送，免绑卡",
      "url": "https://www.assemblyai.com/pricing",
      "deadline": null,
      "deadlineText": "赠金不过期",
      "requirements": [
        "注册账号",
        "仅限语音类 API"
      ],
      "region": "海外",
      "source": "网络补充",
      "sourceUrl": "https://freellmapihub.com/collections/free-signup-credit",
      "tags": [
        "语音API",
        "$50赠金",
        "免绑卡"
      ],
      "notes": "官方定价页 2026-11-25 复核；免费用户可能被用于模型改进，敏感音频请先确认数据条款。",
      "discoveredAt": "2026-11-25",
      "statusTag": null
    },
    {
      "id": "mixedbread",
      "provider": "Mixedbread",
      "title": "Starter $5 一次性额度",
      "quota": "$5 一次性：mxbai-embed-large-v1 嵌入、rerank 与多模态检索",
      "quotaTier": 10,
      "cadence": "一次性",
      "claimMethod": "官网注册，免绑卡",
      "url": "https://www.mixedbread.com/pricing",
      "deadline": null,
      "deadlineText": "用尽即止",
      "requirements": [
        "注册账号"
      ],
      "region": "海外",
      "source": "网络补充",
      "sourceUrl": "https://www.mixedbread.com/pricing",
      "tags": [
        "Embedding",
        "Rerank",
        "免绑卡"
      ],
      "notes": "2026-11-25 官网定价页实测可访问；原生 REST 接口，非 OpenAI 兼容。",
      "discoveredAt": "2026-11-25",
      "statusTag": null
    },
    {
      "id": "braintrust",
      "provider": "Braintrust",
      "title": "$0 Starter 每月模型与评测额度",
      "quota": "每月 10 Braintrust credits（内置模型）+ 1GB 数据 + 1 万次评分",
      "quotaTier": 10,
      "cadence": "每月",
      "claimMethod": "官网注册，免绑卡",
      "url": "https://www.braintrust.dev/pricing",
      "deadline": null,
      "deadlineText": "长期有效，额度不结转",
      "requirements": [
        "注册账号",
        "额度不累积"
      ],
      "region": "海外",
      "source": "网络补充",
      "sourceUrl": "https://www.braintrust.dev/pricing",
      "tags": [
        "评测平台",
        "每月额度",
        "免绑卡"
      ],
      "notes": "2026-11-25 官方定价页实测；适合 LLM 评测与实验跟踪。",
      "discoveredAt": "2026-11-25",
      "statusTag": null
    },
    {
      "id": "vectoree",
      "provider": "Vectoree",
      "title": "新用户 $5 欢迎额度",
      "quota": "$5 一次性，覆盖 36+ 模型网关（vectoree/auto 等）",
      "quotaTier": 10,
      "cadence": "一次性",
      "claimMethod": "CLI 登录并关联项目，免绑卡",
      "url": "https://vectoree.ai/pricing",
      "deadline": null,
      "deadlineText": "用尽即止",
      "requirements": [
        "CLI 登录",
        "关联项目"
      ],
      "region": "海外",
      "source": "网络补充",
      "sourceUrl": "https://dev.to/shiva_prasad_cc614c6ee026/new-free-llm-api-credits-added-in-mid-november-2026-4fbh",
      "tags": [
        "Agent网关",
        "$5赠金",
        "一次性"
      ],
      "notes": "2026-11-25 官网实测可访问；中转网关有隐私风险，勿传敏感数据。",
      "discoveredAt": "2026-11-25",
      "statusTag": null
    },
    {
      "id": "gonkarouter",
      "provider": "GonkaRouter",
      "title": "新用户 100 万 Token",
      "quota": "一次性 100 万 Token：GLM-5.3-Flash / DeepSeek-V4-Flash 等",
      "quotaTier": 20,
      "cadence": "一次性",
      "claimMethod": "邮箱或 Google 登录即领，免绑卡",
      "url": "https://gonkarouter.io/pricing",
      "deadline": null,
      "deadlineText": "一次性 grant",
      "requirements": [
        "邮箱或 Google 账号"
      ],
      "region": "海外",
      "source": "网络补充",
      "sourceUrl": "https://dev.to/shiva_prasad_cc614c6ee026/new-free-llm-api-credits-added-in-mid-november-2026-4fbh",
      "tags": [
        "百万Token",
        "网关",
        "免绑卡"
      ],
      "notes": "仅采信定价页可证实的 100 万 Token；博客提到的 $20 活动未获官方证实。",
      "discoveredAt": "2026-11-25",
      "statusTag": null
    },
    {
      "id": "synap-free-tokens",
      "provider": "Synap by Linkrra",
      "title": "每天 10 万 Token 永久免费层",
      "quota": "qwen3-coder-30b：每天 100,000 Token / 50 次请求，10 次/分钟",
      "quotaTier": 20,
      "cadence": "每日",
      "claimMethod": "Google 或邮箱登录官网账户页，免绑卡",
      "url": "https://synap402.com/ai/account.html",
      "deadline": null,
      "deadlineText": "每日 00:00 UTC 重置",
      "requirements": [
        "Google 或邮箱账号"
      ],
      "region": "海外",
      "source": "网络补充",
      "sourceUrl": "https://freeinference.dev/",
      "tags": [
        "免绑卡",
        "每日额度",
        "OpenAI兼容"
      ],
      "notes": "FreeInference 目录 2026-11-24 夜间实测：不存储提示词、不用于训练；按账户与网络地址限流。",
      "discoveredAt": "2026-11-25",
      "statusTag": null
    },
    {
      "id": "ibm-watsonx-free",
      "provider": "IBM watsonx.ai",
      "title": "Free Toolbox 每月免费 Token",
      "quota": "Foundation Models 每月最多 30 万 Token，另含 20 CUH/月、100 文档/月",
      "quotaTier": 10,
      "cadence": "每月",
      "claimMethod": "官网注册 IBM ID 后进入 Free Toolbox",
      "url": "https://www.ibm.com/products/watsonx-ai/pricing",
      "deadline": null,
      "deadlineText": "官方免费层长期提供",
      "requirements": [
        "注册 IBM ID"
      ],
      "region": "海外",
      "source": "网络更新",
      "sourceUrl": "https://www.ibm.com/products/watsonx-ai/pricing",
      "tags": [
        "月度Token",
        "官方免费层",
        "免绑卡"
      ],
      "notes": "替代 IteraCompute（3000 万/月推广 2026-11-24 结束）；同为月度免费 Token 但额度较小，高需求可叠加已有智谱 2000 万 Token 活动。",
      "discoveredAt": "2026-11-25",
      "statusTag": null
    },
    {
      "id": "zai-glm-flash-free",
      "provider": "Z.ai（智谱 GLM 免费模型）",
      "title": "GLM Flash 系列免费 API",
      "quota": "GLM-4.7-Flash / GLM-4.6V-Flash 等免费模型，速率以控制台为准",
      "quotaTier": 20,
      "cadence": "按量",
      "claimMethod": "注册 Z.ai / 智谱开放平台，创建 API Key",
      "url": "https://docs.z.ai/guides/overview/pricing",
      "deadline": null,
      "deadlineText": "免费模型目录，长期有效（模型会调整）",
      "requirements": [
        "注册账号"
      ],
      "region": "国内",
      "source": "网络更新",
      "sourceUrl": "https://github.com/CYBIRD-D/FREE-LLM-API-Provider/blob/main/README.zh-CN.md",
      "tags": [
        "GLM",
        "免费模型",
        "中文友好"
      ],
      "notes": "替代 GitHub Models（2026-07-30 全面停服）；官方价格页 2026-11-25 实测可访问，GLM-4.5-Flash 已下线并路由至 4.7-Flash。",
      "discoveredAt": "2026-11-25",
      "statusTag": null
    }
  ],
  "resources": [
    {
      "id": "oracle-always-free",
      "provider": "Oracle Cloud Always Free",
      "title": "永久免费 ARM 云服务器 + 2 台 AMD 微实例",
      "type": "云服务器",
      "quota": "ARM Ampere A1：2 OCPU / 12GB 内存（1500 OCPU·时 + 9000 GB·时/月）；另可开 2 台 AMD 1/8 OCPU / 1GB；200GB 块存储，10TB/月出流量",
      "quotaTier": 100,
      "cadence": "永久",
      "claimMethod": "注册 Oracle Cloud 账号，选择归属地区（Home Region），创建 Ampere A1 实例；需信用卡做身份验证",
      "url": "https://www.oracle.com/cloud/free/",
      "deadline": null,
      "deadlineText": "Always Free 长期有效（条款可能调整）",
      "requirements": [
        "信用卡验证",
        "归属地区有库存",
        "避免长期闲置（7天 CPU/网络/内存低于 20% 可能被回收）"
      ],
      "region": "海外",
      "source": "网络更新",
      "sourceUrl": "https://redu.cloud/blog/free-cloud-vm-providers",
      "tags": [
        "永久免费",
        "配置最强",
        "需信用卡",
        "ARM"
      ],
      "notes": "2026-11-23 复核：当前 Always Free 为 2 OCPU / 12GB（2026 年 6 月由 4 OCPU / 24GB 减半），另 2 台 AMD 1/8 OCPU / 1GB，200GB 块存储、10TB/月出流量。免费资源只在归属地区可用；闲置实例可能被回收，重要数据请另做备份。",
      "discoveredAt": "2026-11-23",
      "statusTag": "active"
    },
    {
      "id": "gcp-free-tier",
      "provider": "Google Cloud Free Tier",
      "title": "e2-micro 永久免费实例 + 新用户试用金",
      "type": "云服务器",
      "quota": "e2-micro（2 共享 vCPU / 1GB），每月 30GB·月磁盘、1GB/月出流量（北美）；另有新用户试用额度",
      "quotaTier": 50,
      "cadence": "永久",
      "claimMethod": "注册 Google Cloud，绑定付款方式，在三个指定美国区域之一创建 e2-micro",
      "url": "https://cloud.google.com/free",
      "deadline": null,
      "deadlineText": "Free Tier 长期有效",
      "requirements": [
        "Google 账号",
        "付款方式验证",
        "仅限美国指定区域"
      ],
      "region": "海外",
      "source": "网络更新",
      "sourceUrl": "https://redu.cloud/blog/free-cloud-vm-providers",
      "tags": [
        "永久免费",
        "需绑卡",
        "美国区域"
      ],
      "notes": "2026-11-25 复核：e2-micro 永久免费层与 30GB·月磁盘、1GB/月出流量不变；新账户 $300 试用金自 2026-11-16 起不能用于 Gemini 平台/Vertex AI，务必区分二者。",
      "discoveredAt": "2026-11-23",
      "statusTag": "active"
    },
    {
      "id": "azure-free-account",
      "provider": "Microsoft Azure 免费账户",
      "title": "750 小时/月虚拟机 12 个月 + 65 项以上永久免费服务",
      "type": "云服务器",
      "quota": "B1s / B2pts v2(ARM) / B2ats v2(AMD) 各 750 小时/月，新客 12 个月；另含 65+ 永久免费服务（如 Functions 100 万次请求/月）",
      "quotaTier": 100,
      "cadence": "12个月 + 永久",
      "claimMethod": "注册 Azure 免费账户，需非预付卡与手机号；30 天内需升级到即用即付，否则服务暂停",
      "url": "https://azure.microsoft.com/free/",
      "deadline": null,
      "deadlineText": "12 个月（永久免费服务除外）",
      "requirements": [
        "非预付信用卡",
        "手机号验证",
        "30 天内升级账户"
      ],
      "region": "海外",
      "source": "网络更新",
      "sourceUrl": "https://www.lilachbullock.com/free-vps-providers",
      "tags": [
        "12个月",
        "需绑卡",
        "大厂"
      ],
      "notes": "第 13 个月起虚拟机按量计费（B1s 约 $7.59/月）。设置预算告警避免意外账单。",
      "discoveredAt": "2026-11-23",
      "statusTag": "active"
    },
    {
      "id": "azure-students",
      "provider": "Azure for Students",
      "title": "学生认证免信用卡领 $100 云资源",
      "type": "云服务器",
      "quota": "$100 Azure 额度 + 12 个月免费服务，无需信用卡",
      "quotaTier": 100,
      "cadence": "12个月",
      "claimMethod": "使用学校邮箱注册并完成学生身份验证",
      "url": "https://azure.microsoft.com/free/students/",
      "deadline": null,
      "deadlineText": "12 个月，学生资格需每年重新验证",
      "requirements": [
        "有效学校邮箱",
        "学生身份验证"
      ],
      "region": "海外",
      "source": "网络更新",
      "sourceUrl": "https://www.kd.cn/ask/581507.html",
      "tags": [
        "学生专享",
        "免信用卡",
        "额度高"
      ],
      "notes": "适合做实验环境；资格每年需重新验证。",
      "discoveredAt": "2026-11-23",
      "statusTag": "active"
    },
    {
      "id": "aws-free-plan",
      "provider": "AWS Free Plan",
      "title": "新账户 $100 起步额度，最高可拿 $200",
      "type": "云服务器",
      "quota": "注册即得 $100 credits，体验关键服务最多再得 $100；6 个月或额度用完自动关闭账户",
      "quotaTier": 100,
      "cadence": "6个月",
      "claimMethod": "注册 AWS 新账户，选择 Free Plan",
      "url": "https://aws.amazon.com/free/",
      "deadline": null,
      "deadlineText": "账户开通后 6 个月或额度用尽",
      "requirements": [
        "新账户",
        "身份验证"
      ],
      "region": "海外",
      "source": "网络更新",
      "sourceUrl": "https://redu.cloud/blog/free-cloud-vm-providers",
      "tags": [
        "6个月",
        "额度制",
        "学习用途"
      ],
      "notes": "2026-11-23 复核：2025-07-15 后开户已取消 12 个月免费 EC2，改为新账户 $100 起步、最高 $200 的 6 个月额度制，到期或额度用尽自动关闭账户。学习用途合适，不适合长期托管。",
      "discoveredAt": "2026-11-23",
      "statusTag": "active"
    },
    {
      "id": "aliyun-free-trial",
      "provider": "阿里云免费试用中心",
      "title": "新用户免费试用 ECS / 轻量应用服务器",
      "type": "云服务器",
      "quota": "新用户可申请多款云产品免费试用，ECS/轻量服务器通常 1–3 个月，配置约 1核2G 起",
      "quotaTier": 20,
      "cadence": "1-3个月",
      "claimMethod": "注册阿里云账号并完成实名认证，进入免费试用中心申请对应产品",
      "url": "https://free.aliyun.com/",
      "deadline": null,
      "deadlineText": "以试用中心当期活动为准",
      "requirements": [
        "阿里云账号",
        "实名认证",
        "新用户资格"
      ],
      "region": "国内",
      "source": "网络更新",
      "sourceUrl": "https://matrixidc.net/help/getting-started/free-cloud-server-vps-2026",
      "tags": [
        "国内速度快",
        "需实名",
        "中文文档"
      ],
      "notes": "试用到期可能自动转付费，创建时看清续费规则；绑定域名对外提供 Web 服务需备案。",
      "discoveredAt": "2026-11-23",
      "statusTag": "active"
    },
    {
      "id": "tencent-cloud-trial",
      "provider": "腾讯云免费试用",
      "title": "新用户轻量应用服务器免费试用",
      "type": "云服务器",
      "quota": "新用户试用轻量应用服务器 / CVM，期限与配置以控制台当期活动为准",
      "quotaTier": 20,
      "cadence": "1-3个月",
      "claimMethod": "注册腾讯云账号实名认证后，在控制台搜索「免费试用」申请",
      "url": "https://cloud.tencent.com/",
      "deadline": null,
      "deadlineText": "以控制台当期活动为准",
      "requirements": [
        "腾讯云账号",
        "实名认证",
        "新用户资格"
      ],
      "region": "国内",
      "source": "网络更新",
      "sourceUrl": "https://www.sng.cn/pt/zj/628477.html",
      "tags": [
        "国内速度快",
        "需实名",
        "中文文档"
      ],
      "notes": "注意到期续费规则；国内机器建站需备案。",
      "discoveredAt": "2026-11-23",
      "statusTag": "active"
    },
    {
      "id": "huaweicloud-trial",
      "provider": "华为云免费试用",
      "title": "新用户 ECS 免费试用与开发者活动",
      "type": "云服务器",
      "quota": "新用户可申请 ECS 等云产品免费试用，期限与配置以活动页为准",
      "quotaTier": 20,
      "cadence": "1-3个月",
      "claimMethod": "注册华为云账号实名认证，进入免费试用/开发者活动页申请",
      "url": "https://www.huaweicloud.com/",
      "deadline": null,
      "deadlineText": "以活动页为准",
      "requirements": [
        "华为云账号",
        "实名认证",
        "新用户资格"
      ],
      "region": "国内",
      "source": "网络更新",
      "sourceUrl": "https://idctop.com/article/801006.html",
      "tags": [
        "国内",
        "需实名",
        "中文文档"
      ],
      "notes": "适合短期测试与学习，到期前做好数据迁移。",
      "discoveredAt": "2026-11-23",
      "statusTag": "active"
    },
    {
      "id": "railway-free-vm",
      "provider": "Railway 免费 VM",
      "title": "免信用卡的 2vCPU / 2GB 免费虚拟机",
      "type": "云服务器",
      "quota": "2 vCPU / 2GB 内存，预装 coding agent；前 30 天 $5 试用额度，免费计划无月费",
      "quotaTier": 50,
      "cadence": "永久",
      "claimMethod": "无需信用卡或账号即可启动，60 分钟内构建，24 小时内认领，否则被删除",
      "url": "https://railway.com/",
      "deadline": null,
      "deadlineText": "需在 24 小时内认领",
      "requirements": [
        "24 小时内认领实例"
      ],
      "region": "海外",
      "source": "网络更新",
      "sourceUrl": "https://redu.cloud/blog/free-cloud-vm-providers",
      "tags": [
        "免信用卡",
        "限时认领",
        "预装工具"
      ],
      "notes": "不是传统 VPS，属于应用托管式 VM。不及时认领会直接删除。",
      "discoveredAt": "2026-11-23",
      "statusTag": "active"
    },
    {
      "id": "alwaysdata-free",
      "provider": "alwaysdata",
      "title": "终身免费小型应用主机",
      "type": "云主机",
      "quota": "1GB SSD / 256MB 内存 / 1/4 CPU，3 天备份，无广告，终身免费",
      "quotaTier": 10,
      "cadence": "永久",
      "claimMethod": "注册 alwaysdata 免费套餐（Free offer for life）",
      "url": "https://www.alwaysdata.com/",
      "deadline": null,
      "deadlineText": "终身免费",
      "requirements": [
        "注册账号",
        "个人非商业用途"
      ],
      "region": "海外",
      "source": "网络更新",
      "sourceUrl": "https://www.lilachbullock.com/free-vps-providers",
      "tags": [
        "终身免费",
        "免广告",
        "小配置"
      ],
      "notes": "配置很小，适合静态站和轻量脚本，不是完整 VPS。",
      "discoveredAt": "2026-11-23",
      "statusTag": "active"
    },
    {
      "id": "redu-cloud",
      "provider": "redu.cloud",
      "title": "免费常驻服务器 + 私有 Postgres",
      "type": "云主机",
      "quota": "1 vCPU / 2GB 内存 / 10GB 磁盘 + 私有 Postgres，5GB/月出流量，闲置不暂停",
      "quotaTier": 20,
      "cadence": "永久",
      "claimMethod": "注册即可创建；7 天后需绑定信用卡，否则删除",
      "url": "https://redu.cloud/",
      "deadline": null,
      "deadlineText": "7 天后需绑卡保留",
      "requirements": [
        "注册账号",
        "7 天后绑卡"
      ],
      "region": "海外",
      "source": "网络更新",
      "sourceUrl": "https://redu.cloud/blog/free-cloud-vm-providers",
      "tags": [
        "带数据库",
        "免卡起步",
        "7天时限"
      ],
      "notes": "该信息来自服务商自有博客，规则以官网 Free tier FAQ 为准。",
      "discoveredAt": "2026-11-23",
      "statusTag": "active"
    },
    {
      "id": "cloudflare-workers-pages",
      "provider": "Cloudflare Workers / Pages",
      "title": "免费边缘 Serverless 与静态托管",
      "type": "Serverless",
      "quota": "Workers 免费请求额度 + Pages 无限静态托管与自定义域名，每日 10000 Neurons AI 推理",
      "quotaTier": 50,
      "cadence": "永久",
      "claimMethod": "注册 Cloudflare 账号 → Workers & Pages 创建项目",
      "url": "https://dash.cloudflare.com/",
      "deadline": null,
      "deadlineText": "长期免费",
      "requirements": [
        "Cloudflare 账号"
      ],
      "region": "海外/国内可用",
      "source": "网络更新",
      "sourceUrl": "https://idctop.com/article/801006.html",
      "tags": [
        "永久免费",
        "边缘计算",
        "免服务器"
      ],
      "notes": "不是 VPS，适合 API、Webhook 和静态站。免费额度按请求数计。",
      "discoveredAt": "2026-11-23",
      "statusTag": "active"
    },
    {
      "id": "vercel-hobby",
      "provider": "Vercel Hobby",
      "title": "免费前端托管与边缘函数",
      "type": "托管平台",
      "quota": "Hobby 计划免费，含自定义域名、边缘函数与自动 HTTPS",
      "quotaTier": 20,
      "cadence": "永久",
      "claimMethod": "用 GitHub / GitLab 账号注册并导入仓库",
      "url": "https://vercel.com/",
      "deadline": null,
      "deadlineText": "长期免费（个人非商业）",
      "requirements": [
        "GitHub / GitLab 账号"
      ],
      "region": "海外/国内可用",
      "source": "网络更新",
      "sourceUrl": "https://idctop.com/article/801006.html",
      "tags": [
        "永久免费",
        "前端托管",
        "自动部署"
      ],
      "notes": "非商业用途免费；商用需升级付费计划。",
      "discoveredAt": "2026-11-23",
      "statusTag": "active"
    },
    {
      "id": "github-pages",
      "provider": "GitHub Pages",
      "title": "免费静态站点 + username.github.io 域名",
      "type": "托管平台",
      "quota": "免费静态站点托管，自带 yourname.github.io 子域名，支持自定义域名与 HTTPS",
      "quotaTier": 20,
      "cadence": "永久",
      "claimMethod": "GitHub 仓库 → Settings → Pages，选择分支发布",
      "url": "https://pages.github.com/",
      "deadline": null,
      "deadlineText": "长期免费",
      "requirements": [
        "GitHub 账号",
        "公开仓库（免费版）"
      ],
      "region": "海外/国内可用",
      "source": "网络更新",
      "sourceUrl": "https://www.itechguides.com/how-to-get-a-free-domain-name-five-easy-methods-in-2026/",
      "tags": [
        "永久免费",
        "自带子域",
        "作品集"
      ],
      "notes": "平台子域名归 GitHub 所有，离开平台无法带走。",
      "discoveredAt": "2026-11-23",
      "statusTag": "active"
    },
    {
      "id": "eu-org",
      "provider": "EU.org",
      "title": "老牌公益免费二级域名 yourname.eu.org",
      "type": "域名",
      "quota": "免费 yourname.eu.org（或国家子域），无续费年费，长期有效",
      "quotaTier": 50,
      "cadence": "永久",
      "claimMethod": "在 eu.org 提交申请，人工审核，需自备 DNS 托管",
      "url": "https://nic.eu.org/",
      "deadline": null,
      "deadlineText": "长期有效，人工审核可能需数周",
      "requirements": [
        "自备 DNS 托管",
        "人工审核",
        "个人/非营利用途"
      ],
      "region": "海外",
      "source": "网络更新",
      "sourceUrl": "https://scienceofapps.com/blog/freenom-alternatives",
      "tags": [
        "免费域名",
        "人工审核",
        "公益项目"
      ],
      "notes": "1996 年运营至今，与欧盟无关；无技术支持，仅邮件列表。不适合商业站点。",
      "discoveredAt": "2026-11-23",
      "statusTag": "active"
    },
    {
      "id": "is-a-dev",
      "provider": "is-a.dev",
      "title": "开发者专属免费子域名 yourname.is-a.dev",
      "type": "域名",
      "quota": "免费 yourname.is-a.dev 子域名，长期有效",
      "quotaTier": 20,
      "cadence": "永久",
      "claimMethod": "Fork 官方 register 仓库，按文档添加配置文件并提交 Pull Request，人工合并后生效",
      "url": "https://is-a.dev/",
      "deadline": null,
      "deadlineText": "长期有效",
      "requirements": [
        "GitHub 账号",
        "域名需与软件开发相关",
        "PR 审核"
      ],
      "region": "海外",
      "source": "网络更新",
      "sourceUrl": "https://scienceofapps.com/blog/freenom-alternatives",
      "tags": [
        "免费域名",
        "开发者",
        "GitHub PR"
      ],
      "notes": "适合个人作品集与开源项目主页；内容需符合规则。",
      "discoveredAt": "2026-11-23",
      "statusTag": "active"
    },
    {
      "id": "js-org",
      "provider": "js.org",
      "title": "JavaScript 项目免费子域名",
      "type": "域名",
      "quota": "免费 yourproject.js.org 子域名，长期有效",
      "quotaTier": 10,
      "cadence": "永久",
      "claimMethod": "按项目文档提交 GitHub PR 申请，要求站点与 JavaScript 明显相关",
      "url": "https://js.org/",
      "deadline": null,
      "deadlineText": "长期有效",
      "requirements": [
        "GitHub 账号",
        "项目需与 JavaScript 相关"
      ],
      "region": "海外",
      "source": "网络更新",
      "sourceUrl": "https://www.altftool.com/lookouts/free-domain-hosting/guides/renewal-trap",
      "tags": [
        "免费域名",
        "开源项目",
        "JS 生态"
      ],
      "notes": "审核较严格，非 JS 项目会被拒绝。",
      "discoveredAt": "2026-11-23",
      "statusTag": "active"
    },
    {
      "id": "digitalplat-freedomain",
      "provider": "DigitalPlat FreeDomain",
      "title": "多后缀免费子域名 dpdns.org / us.kg / qzz.io",
      "type": "域名",
      "quota": "免费 yourname.dpdns.org、.us.kg、.qzz.io 等公共后缀子域名",
      "quotaTier": 20,
      "cadence": "永久",
      "claimMethod": "在 DigitalPlat FreeDomain 面板注册账号并申请子域名",
      "url": "https://freedomain.one/",
      "deadline": null,
      "deadlineText": "长期有效（条款可能变更）",
      "requirements": [
        "注册账号",
        "遵守使用条款"
      ],
      "region": "海外",
      "source": "网络更新",
      "sourceUrl": "https://scienceofapps.com/blog/freenom-alternatives",
      "tags": [
        "免费域名",
        "多后缀",
        "Freenom 替代"
      ],
      "notes": "属于共享父域名下的子域，所有权不归你；条款变更时可收回。",
      "discoveredAt": "2026-11-23",
      "statusTag": "active"
    },
    {
      "id": "pp-ua",
      "provider": "NIC.UA .pp.ua",
      "title": "可免费续期的乌克兰国家二级域名",
      "type": "域名",
      "quota": "yourname.pp.ua 免费注册，每次免费续期一年，可无限续期",
      "quotaTier": 20,
      "cadence": "每年续期",
      "claimMethod": "NIC.UA 注册并通过手机激活，到期前 60 天内续期",
      "url": "https://nic.pp.ua/",
      "deadline": null,
      "deadlineText": "每次续期 1 年免费",
      "requirements": [
        "手机激活",
        "WHOIS 信息永久公开"
      ],
      "region": "海外",
      "source": "网络更新",
      "sourceUrl": "https://scienceofapps.com/blog/free-domain-name",
      "tags": [
        "免费域名",
        "可续期",
        "WHOIS 公开"
      ],
      "notes": "所有者信息在 WHOIS 中完全公开，介意隐私请勿使用。",
      "discoveredAt": "2026-11-23",
      "statusTag": "active"
    },
    {
      "id": "github-student-domain",
      "provider": "GitHub Student Developer Pack 域名权益",
      "title": "学生免费领 .me / .TECH / Name.com 域名一年",
      "type": "域名",
      "quota": "Namecheap .me 一年免费、一个标准 .TECH 一年免费、Name.com 25+ 后缀任选一个一年免费",
      "quotaTier": 50,
      "cadence": "一年",
      "claimMethod": "完成 GitHub 学生认证后，在 Student Pack 中领取各合作方权益",
      "url": "https://education.github.com/pack",
      "deadline": null,
      "deadlineText": "领取后 1 年，续费按正常价",
      "requirements": [
        "有效学生身份",
        "学校邮箱或在读证明"
      ],
      "region": "海外",
      "source": "网络更新",
      "sourceUrl": "https://scienceofapps.com/blog/free-domain-name",
      "tags": [
        "学生专享",
        "真顶级域名",
        "一年免费"
      ],
      "notes": "这是少数能拿到真正顶级域名的正规渠道，第二年续费按注册商正常价格。",
      "discoveredAt": "2026-11-23",
      "statusTag": "active"
    },
    {
      "id": "freenom-expired",
      "provider": "Freenom（.tk/.ml/.ga/.cf/.gq）",
      "title": "⚠ 已停服：免费 .tk 域名不再开放注册",
      "type": "域名",
      "quota": "已停止新注册；2023 年 3 月停注册，2023 年 11 月 ICANN 终止认证，2024 年 2 月退出域名业务",
      "quotaTier": 10,
      "cadence": "已失效",
      "claimMethod": "无法注册。现在仍宣称提供免费 .tk 域名的站点均非 Freenom，请避开",
      "url": "https://www.altftool.com/lookouts/free-domain-hosting/guides/renewal-trap",
      "deadline": "2024-02-01",
      "deadlineText": "2024-02 已退出域名业务",
      "requirements": [],
      "region": "海外",
      "source": "网络更新",
      "sourceUrl": "https://www.altftool.com/lookouts/free-domain-hosting/guides/renewal-trap",
      "tags": [
        "已失效",
        "避坑提醒"
      ],
      "notes": "收录仅作避坑提示。2026-11 复核：仍宣称可注册免费 .tk 的站点均非 Freenom。替代方案见 eu.org、is-a.dev、DigitalPlat、.pp.ua、does.software。",
      "discoveredAt": "2026-11-23",
      "statusTag": "expired"
    },
    {
      "id": "baidu-aistudio",
      "provider": "百度飞桨 AI Studio",
      "title": "每天 8 点算力积分 + 新人约 100 积分",
      "type": "托管平台",
      "quota": "每天 8 个算力点（约 16 小时 V100 16/32GB 或 A100），新用户完成任务另得约 100 点，有效期 90 天",
      "quotaTier": 50,
      "cadence": "每日",
      "claimMethod": "注册百度 AI Studio 并完成实名认证，在项目中领取每日算力点",
      "url": "https://aistudio.baidu.com/",
      "deadline": null,
      "deadlineText": "每日刷新",
      "requirements": [
        "百度账号",
        "实名认证"
      ],
      "region": "国内",
      "source": "网络更新",
      "sourceUrl": "https://aitujian.cn/free-ai-api.html",
      "tags": [
        "免费GPU",
        "每日刷新",
        "国产平台"
      ],
      "notes": "免费额度主要服务飞桨生态，PyTorch 任务可能受限；积分 90 天有效。",
      "discoveredAt": "2026-11-23",
      "statusTag": "active"
    },
    {
      "id": "modelscope-notebooks",
      "provider": "魔搭 ModelScope Notebooks",
      "title": "免费 8 核/32GB CPU + 每月 36 小时 A10 GPU",
      "type": "托管平台",
      "quota": "CPU 实例 8 核/32GB 长期免费；绑定阿里云账号后 A10 24GB GPU（8 核/32GB）每月 36 小时；另有每天 2000 次免费 API 推理",
      "quotaTier": 50,
      "cadence": "每月",
      "claimMethod": "登录魔搭社区 → Notebook → 创建免费实例，绑定阿里云账号解锁 GPU 时长",
      "url": "https://modelscope.cn/",
      "deadline": null,
      "deadlineText": "长期有效（GPU 时长按月重置）",
      "requirements": [
        "手机号登录",
        "绑定阿里云账号（GPU）"
      ],
      "region": "国内",
      "source": "网络更新",
      "sourceUrl": "https://aitujian.cn/free-ai-api.html",
      "tags": [
        "免费GPU",
        "中文生态",
        "每月额度"
      ],
      "notes": "CPU 实例长期免费，GPU 时长每月 36 小时；与 offers 中的积分活动是不同权益。",
      "discoveredAt": "2026-11-23",
      "statusTag": "active"
    },
    {
      "id": "tencent-cloud-studio",
      "provider": "腾讯云 Cloud Studio",
      "title": "每月 10000 分钟 T4 GPU 免费算力",
      "type": "托管平台",
      "quota": "标准计划每月 10000 开发分钟 + 10000 GPU 分钟（T4 16GB / 8 CPU / 32GB RAM），预装 Ollama 与 DeepSeek",
      "quotaTier": 50,
      "cadence": "每月",
      "claimMethod": "注册腾讯云账号实名认证后进入 Cloud Studio 创建 GPU 工作空间",
      "url": "https://cloudstudio.net/",
      "deadline": null,
      "deadlineText": "每月额度重置",
      "requirements": [
        "腾讯云账号",
        "实名认证"
      ],
      "region": "国内",
      "source": "网络更新",
      "sourceUrl": "https://aitujian.cn/free-ai-api.html",
      "tags": [
        "免费GPU",
        "浏览器IDE",
        "国内速度"
      ],
      "notes": "空闲约 10 分钟自动关闭；免费空间同时最多运行 2 个，无框架限制。",
      "discoveredAt": "2026-11-23",
      "statusTag": "active"
    },
    {
      "id": "render-free",
      "provider": "Render 免费层",
      "title": "免费 Web 服务 / Cron / Postgres",
      "type": "托管平台",
      "quota": "免费 Web Service 与 Cron Job，闲置 15 分钟后休眠；免费 Postgres 30 天后删除",
      "quotaTier": 20,
      "cadence": "永久",
      "claimMethod": "用 GitHub / GitLab 账号注册并连接仓库部署",
      "url": "https://render.com/",
      "deadline": null,
      "deadlineText": "免费层长期提供（有限额）",
      "requirements": [
        "GitHub / GitLab 账号"
      ],
      "region": "海外",
      "source": "网络更新",
      "sourceUrl": "https://www.masaischool.com/resources/tools/free-cloud-credits-for-students",
      "tags": [
        "免服务器",
        "会休眠",
        "数据库限时"
      ],
      "notes": "适合 API 与 Demo；免费数据库 30 天后删除，重要数据请自行备份。",
      "discoveredAt": "2026-11-23",
      "statusTag": "active"
    },
    {
      "id": "supabase-free",
      "provider": "Supabase 免费层",
      "title": "托管 Postgres + 认证 + 存储免费额度",
      "type": "Serverless",
      "quota": "免费 Postgres 数据库、认证、文件存储与边缘函数，超出额度后暂停",
      "quotaTier": 20,
      "cadence": "永久",
      "claimMethod": "用 GitHub 账号注册 Supabase 并创建免费项目",
      "url": "https://supabase.com/",
      "deadline": null,
      "deadlineText": "免费层长期提供（有额度）",
      "requirements": [
        "GitHub 账号"
      ],
      "region": "海外",
      "source": "网络更新",
      "sourceUrl": "https://www.masaischool.com/resources/tools/free-cloud-credits-for-students",
      "tags": [
        "免费数据库",
        "开源",
        "Auth"
      ],
      "notes": "项目长期无访问会被暂停，登录控制台即可恢复；适合作为免费后端的数据库层。",
      "discoveredAt": "2026-11-23",
      "statusTag": "active"
    },
    {
      "id": "does-software-domain",
      "provider": "does.software",
      "title": "学生/个人免费子域名 yourname.does.software",
      "type": "域名",
      "quota": "免费 1 个子域名 + 1 个邮箱转发 + 2 个路径；每 45 天点击一次免费续期",
      "quotaTier": 10,
      "cadence": "每45天续期",
      "claimMethod": "在 does.software 注册并领取子域名，设置每 45 天邮件提醒续期",
      "url": "https://does.software/",
      "deadline": null,
      "deadlineText": "每 45 天需手动免费续期",
      "requirements": [
        "注册账号",
        "45 天内续期"
      ],
      "region": "海外",
      "source": "网络更新",
      "sourceUrl": "https://does.software/guides/free-domain-for-students",
      "tags": [
        "免费域名",
        "学生友好",
        "需续期"
      ],
      "notes": "访客打开链接会先看到 3.5 秒平台提示；不含主机，需把域名指向其他托管平台。",
      "discoveredAt": "2026-11-23",
      "statusTag": "active"
    },
    {
      "id": "altare-always-free",
      "provider": "Altare",
      "title": "永久免费云平台：6GB 内存 / 1.5 核 / 最多 4 台服务器，无需绑卡",
      "type": "云服务器",
      "quota": "Always Free 档：6GB 内存（团队共享池）、150% CPU（1.5 核）、10GB 磁盘、最多 4 台服务器槽位；另含 10GB U3 S3 兼容对象存储（5 个桶、无出网费）、1GB KV（每月 300 万次读）、1 个 Postgres / 1 个 MySQL / 1 个 Valkey、3 个队列、10 个 Edge Functions、5 个 DNS 区域、3 个快照位",
      "quotaTier": 50,
      "cadence": "永久",
      "claimMethod": "打开 console.altare.gg 注册账号，免费档默认生效，选择模板（Minecraft / Discord 机器人 / Node.js 等）直接开服务器；无需绑定支付方式",
      "url": "https://console.altare.gg/account",
      "deadline": null,
      "deadlineText": "Always Free 无试用期、无到期日，长期有效",
      "requirements": [
        "年满 13 岁（未成年人需监护人同意）",
        "一人一个账号",
        "6GB 内存为团队共享池，非每台独享",
        "伦敦等部分机房需付费 Altare Plus 档"
      ],
      "region": "海外",
      "source": "网络补充",
      "sourceUrl": "https://altare.gg",
      "tags": [
        "永久免费",
        "无需绑卡",
        "共享内存池",
        "游戏服",
        "机器人托管",
        "独立小厂"
      ],
      "notes": "2026-11-23 收录：Altare 为 AG Inc 独立运营的小型云厂商，Always Free 明确「无试用期、不过期、不需要付款信息」，服务器不会因空闲休眠，适合跑 Minecraft 服、Discord/Telegram 机器人或带数据库的小项目。注意：6GB 内存是团队共享一个池，开满 4 台时平均每台约 1.5GB；sandbox 共享内核、无 systemd、跑不了 Docker（完整 VM 需申请 Workstations Beta，仅前 30 名）；AI 模型不在免费档，需另购 API 额度或 Token Plan（$10/月起）；无中国大陆机房（最近为曼谷/雅加达），无 SLA，重要数据请自行备份，勿当生产环境。",
      "discoveredAt": "2026-11-23",
      "statusTag": "active"
    },
    {
      "id": "neon-postgres",
      "provider": "Neon",
      "title": "免费 Serverless Postgres，可缩容到零",
      "type": "数据库",
      "quota": "512MB Postgres，Serverless 按需启停，空闲自动缩容到 0，支持数据库分支",
      "quotaTier": 20,
      "cadence": "永久",
      "claimMethod": "注册 Neon 账号，创建项目获取 Postgres 连接串",
      "url": "https://neon.tech/",
      "deadline": null,
      "deadlineText": "免费层长期有效",
      "requirements": [
        "Neon 账号"
      ],
      "region": "海外",
      "source": "网络补充",
      "sourceUrl": "https://hpx07.me/blog/best-free-web-hosting",
      "tags": [
        "数据库",
        "Postgres",
        "Serverless"
      ],
      "notes": "2026-11-24 收录：Neon 提供 512MB 免费 Serverless Postgres，空闲自动缩容，适合个人项目。",
      "discoveredAt": "2026-11-24",
      "statusTag": "active"
    },
    {
      "id": "mongodb-atlas",
      "provider": "MongoDB Atlas",
      "title": "免费 512MB NoSQL 数据库（M0 集群）",
      "type": "数据库",
      "quota": "512MB 免费共享集群（M0），100 次读写/秒，10GB/周流量",
      "quotaTier": 20,
      "cadence": "永久",
      "claimMethod": "注册 MongoDB Atlas 账号，创建 M0 免费集群",
      "url": "https://cloud.mongodb.com/",
      "deadline": null,
      "deadlineText": "免费层长期有效（30 天无连接会暂停，不删数据）",
      "requirements": [
        "MongoDB 账号"
      ],
      "region": "海外",
      "source": "网络补充",
      "sourceUrl": "http://mp.weixin.qq.com/s?__biz=MzIwNTE5NTI1MA==&mid=2651243217",
      "tags": [
        "数据库",
        "NoSQL",
        "免费层"
      ],
      "notes": "2026-11-24 收录：MongoDB Atlas M0 提供 512MB 免费集群，30 天无连接自动暂停但保留数据。",
      "discoveredAt": "2026-11-24",
      "statusTag": "active"
    },
    {
      "id": "sqlpub-mysql",
      "provider": "SQLPub",
      "title": "免费 500MB MySQL 8.0 Serverless 数据库",
      "type": "数据库",
      "quota": "500MB MySQL 8.0 Serverless 实例，最多 30 并发连接，36000 次/小时请求",
      "quotaTier": 20,
      "cadence": "永久",
      "claimMethod": "访问 SQLPub，填写数据库名、用户、邮箱即可申请",
      "url": "http://mysql.sqlpub.com/",
      "deadline": null,
      "deadlineText": "永久免费",
      "requirements": [
        "邮箱"
      ],
      "region": "海外",
      "source": "网络补充",
      "sourceUrl": "http://mp.weixin.qq.com/s?__biz=MzIwNTE5NTI1MA==&mid=2651243217",
      "tags": [
        "数据库",
        "MySQL",
        "免费"
      ],
      "notes": "2026-11-24 收录：SQLPub 提供永久免费 MySQL 8.0 Serverless 实例，无需绑卡。",
      "discoveredAt": "2026-11-24",
      "statusTag": "active"
    },
    {
      "id": "upstash-redis",
      "provider": "Upstash",
      "title": "免费 256MB Serverless Redis",
      "type": "数据库",
      "quota": "256MB 存储，50 万 commands/月，10GB 带宽，提供 HTTP API",
      "quotaTier": 20,
      "cadence": "永久",
      "claimMethod": "注册 Upstash 账号，创建免费 Redis 数据库",
      "url": "https://upstash.com/",
      "deadline": null,
      "deadlineText": "免费层长期有效",
      "requirements": [
        "Upstash 账号"
      ],
      "region": "海外",
      "source": "网络补充",
      "sourceUrl": "http://mp.weixin.qq.com/s?__biz=MzIwNTE5NTI1MA==&mid=2651243217",
      "tags": [
        "数据库",
        "Redis",
        "Serverless"
      ],
      "notes": "2026-11-24 收录：Upstash 提供免费 Serverless Redis，适合 Lambda/Cloudflare Workers 等无长连接场景。",
      "discoveredAt": "2026-11-24",
      "statusTag": "active"
    },
    {
      "id": "turso-sqlite",
      "provider": "Turso",
      "title": "免费边缘 SQLite，读多写少场景",
      "type": "数据库",
      "quota": "免费边缘 SQLite，适合读多写少的边缘应用",
      "quotaTier": 20,
      "cadence": "永久",
      "claimMethod": "注册 Turso 账号，创建边缘 SQLite 数据库",
      "url": "https://turso.tech/",
      "deadline": null,
      "deadlineText": "免费层长期有效",
      "requirements": [
        "Turso 账号"
      ],
      "region": "海外",
      "source": "网络补充",
      "sourceUrl": "https://hpx07.me/blog/best-free-web-hosting",
      "tags": [
        "数据库",
        "SQLite",
        "边缘"
      ],
      "notes": "2026-11-24 收录：Turso 提供边缘 SQLite，适合读多写少的边缘应用场景。",
      "discoveredAt": "2026-11-24",
      "statusTag": "active"
    },
    {
      "id": "duckdns",
      "provider": "DuckDNS",
      "title": "免费动态 DNS，5 个子域",
      "type": "域名/DNS",
      "quota": "免费动态 DNS，5 个子域，适合家庭 NAS、内网穿透",
      "quotaTier": 20,
      "cadence": "永久",
      "claimMethod": "注册 DuckDNS，绑定域名并配置动态解析",
      "url": "https://www.duckdns.org/",
      "deadline": null,
      "deadlineText": "永久免费",
      "requirements": [
        "DuckDNS 账号"
      ],
      "region": "海外",
      "source": "网络补充",
      "sourceUrl": "http://mp.weixin.qq.com/s?__biz=MzIwNTE5NTI1MA==&mid=2651243217",
      "tags": [
        "DNS",
        "动态DNS",
        "免费"
      ],
      "notes": "2026-11-24 收录：DuckDNS 提供免费动态 DNS，适合家庭 NAS 与内网穿透场景。",
      "discoveredAt": "2026-11-24",
      "statusTag": "active"
    },
    {
      "id": "infinityfree",
      "provider": "InfinityFree",
      "title": "免费无广告虚拟主机，无限带宽",
      "type": "虚拟主机",
      "quota": "免费虚拟主机，无广告、无限带宽，支持 PHP+MySQL",
      "quotaTier": 20,
      "cadence": "永久",
      "claimMethod": "注册 InfinityFree 账号，开通免费虚拟主机",
      "url": "https://www.infinityfree.com/",
      "deadline": null,
      "deadlineText": "永久免费",
      "requirements": [
        "InfinityFree 账号"
      ],
      "region": "海外",
      "source": "网络补充",
      "sourceUrl": "http://mp.weixin.qq.com/s?__biz=MzIwNTE5NTI1MA==&mid=2651243217",
      "tags": [
        "虚拟主机",
        "免费",
        "无广告"
      ],
      "notes": "2026-11-24 收录：InfinityFree 提供免费无广告虚拟主机，适合个人博客与静态站。",
      "discoveredAt": "2026-11-24",
      "statusTag": "active"
    },
    {
      "id": "koyeb",
      "provider": "Koyeb",
      "title": "免费应用托管，一键部署",
      "type": "云服务器/托管",
      "quota": "免费应用托管层，支持一键部署 Web 应用与定时任务",
      "quotaTier": 20,
      "cadence": "永久",
      "claimMethod": "注册 Koyeb 账号，创建免费应用实例",
      "url": "https://koyeb.com/",
      "deadline": null,
      "deadlineText": "免费层长期有效",
      "requirements": [
        "Koyeb 账号"
      ],
      "region": "海外",
      "source": "网络补充",
      "sourceUrl": "https://hpx07.me/blog/best-free-web-hosting",
      "tags": [
        "应用托管",
        "一键部署",
        "免费层"
      ],
      "notes": "2026-11-24 收录：Koyeb 提供免费应用托管，适合快速部署 Web 应用与小型服务。",
      "discoveredAt": "2026-11-24",
      "statusTag": "active"
    },
    {
      "id": "is-a-bot",
      "provider": "is-a.bot（free-domains）",
      "title": "免费 .is-a.bot 开发者子域名",
      "type": "域名",
      "quota": "免费 1 个 .is-a.bot 子域名，DNS 记录可自定义（A/AAAA/CNAME/MX/TXT），可指向任意托管平台",
      "quotaTier": 10,
      "cadence": "永久",
      "claimMethod": "Fork GitHub 仓库 free-domains/is-a.bot，按官方文档提交含 DNS 记录的 JSON 文件 Pull Request，审核合并后数分钟生效",
      "url": "https://github.com/free-domains/is-a.bot",
      "deadline": null,
      "deadlineText": "长期开放（以仓库公告为准）",
      "requirements": [
        "GitHub 账号",
        "了解 DNS 记录配置",
        "遵守服务条款"
      ],
      "region": "海外",
      "source": "网络更新",
      "sourceUrl": "https://github.com/is-a-dev/register",
      "tags": [
        "免费子域名",
        "GitHub PR",
        "开发者",
        "长期免费"
      ],
      "notes": "由 is-a.dev 官方团队推出的姊妹服务，官方 README 明确注册流程与 is-a.dev 相同，当前正常接受 PR（第三方博客称 is-a.dev 暂停新申请与官方仓库现状不符）。由 Cloudflare Project Alexandria 提供 DNS；官方提示部分用户 Vercel 验证存在问题正在修复。",
      "discoveredAt": "2026-11-24",
      "statusTag": "active"
    },
    {
      "id": "prisma-free-tier",
      "provider": "Prisma",
      "title": "Prisma 永久免费套餐（Compute + Postgres）",
      "type": "Serverless",
      "quota": "免费 $0/月、无需信用卡：Prisma Compute 100 万请求/月、360 GB·小时内存/月、4 活跃 vCPU·小时/月、10 GB 出流量/月；Prisma Postgres 20 万次操作/月、2 GB 存储、50 个数据库，空闲自动缩容至零",
      "quotaTier": 20,
      "cadence": "永久",
      "claimMethod": "注册 Prisma 账号，在控制台创建免费项目即可，无需绑定信用卡",
      "url": "https://www.prisma.io/pricing",
      "deadline": null,
      "deadlineText": "永久免费（Free tier with no time limit）",
      "requirements": [
        "Prisma 账号",
        "无需信用卡"
      ],
      "region": "海外",
      "source": "网络更新",
      "sourceUrl": "https://www.prisma.io/pricing",
      "tags": [
        "永久免费",
        "免绑卡",
        "Serverless",
        "自带数据库",
        "国内可申请"
      ],
      "notes": "官方定价页明确写明 'Free forever. No credit card required.' 与 'Free tier with no time limit'；计算与 Postgres 同机房部署，适合学习项目、接口测试与小型 Demo。按用量计费，免费层支出固定 $0，当月资源耗尽后应用暂停、下月重置。",
      "discoveredAt": "2026-11-24",
      "statusTag": "active"
    },
    {
      "id": "instabox-free",
      "provider": "InstaBox",
      "title": "面向 AI Agent 的云端执行环境免费套餐",
      "type": "托管平台",
      "quota": "免费 $0：1 台机器 4 vCPU / 8 GiB 内存、20 GiB 固定磁盘、5 个快照、100 GiB/月出流量",
      "quotaTier": 20,
      "cadence": "永久",
      "claimMethod": "访问官网注册账号并登录控制台，直接创建 Free 套餐机器",
      "url": "https://instabox.sh/pricing",
      "deadline": null,
      "deadlineText": "免费套餐长期有效（规则可能调整）",
      "requirements": [
        "账号注册",
        "了解空闲自动暂停机制"
      ],
      "region": "海外",
      "source": "网络更新",
      "sourceUrl": "https://instabox.sh/pricing",
      "tags": [
        "AI Agent",
        "云端执行环境",
        "免费套餐",
        "自动暂停"
      ],
      "notes": "官方定价页确认 Free 套餐为 1 machine / 4 vCPU / 8 GiB / 20 GiB disk / 100 GiB egress。更偏向按需使用的云端工作环境，空闲会自动暂停，不适合替代全天候在线的 Web 服务；服务器免费不代表模型 API 免费。",
      "discoveredAt": "2026-11-24",
      "statusTag": "active"
    },
    {
      "id": "glitch-free",
      "provider": "Glitch",
      "title": "免费托管 Node.js 应用与静态站点",
      "type": "托管",
      "quota": "免费账户可创建多个项目，支持 Node.js 应用与静态站点；无访问时项目休眠，唤醒需数秒到十几秒；项目默认公开",
      "quotaTier": 10,
      "cadence": "永久",
      "claimMethod": "注册 Glitch 账号即可创建项目并在线部署",
      "url": "https://glitch.com/",
      "deadline": null,
      "deadlineText": "免费层长期有效",
      "requirements": [
        "注册 Glitch 账号",
        "适合原型、教学与展示，不适合高并发生产环境"
      ],
      "region": "海外",
      "source": "网络补充",
      "sourceUrl": "https://www.ipipp.com/html/20260928/62876.html",
      "tags": [
        "免费托管",
        "Node.js",
        "静态站点"
      ],
      "notes": "存储与内存限制较严格；适合验证想法与教学场景。",
      "discoveredAt": "2026-11-25",
      "statusTag": "active"
    },
    {
      "id": "pythonanywhere-free",
      "provider": "PythonAnywhere",
      "title": "免费运行 Python Web 应用（Flask/Django + MySQL/SQLite）",
      "type": "托管",
      "quota": "免费账户可运行 1 个 Python Web 应用，支持 Flask、Django 等框架，提供 MySQL 与 SQLite；仅能通过 username.pythonanywhere.com 子域名访问，出站访问有白名单限制",
      "quotaTier": 10,
      "cadence": "永久",
      "claimMethod": "注册 PythonAnywhere 免费账户，在线创建并部署 Python 应用",
      "url": "https://www.pythonanywhere.com/",
      "deadline": null,
      "deadlineText": "免费层长期有效",
      "requirements": [
        "注册 PythonAnywhere 账号",
        "无法绑定自定义域名，出站请求受白名单限制"
      ],
      "region": "海外",
      "source": "网络补充",
      "sourceUrl": "https://www.ipipp.com/html/20260928/62876.html",
      "tags": [
        "免费托管",
        "Python",
        "数据库"
      ],
      "notes": "适合学习 Python Web 开发与运行轻量脚本，不适合面向大量用户的公开网站。",
      "discoveredAt": "2026-11-25",
      "statusTag": "active"
    },
    {
      "id": "spacefast-personal",
      "provider": "Spacefast",
      "title": "Automattic 推出的 AI 应用托管平台，Personal 永久免费",
      "type": "托管 / 应用部署",
      "quota": "Personal 免费套餐 $0/月、免信用卡：每月 $1 资源额度、20 个 Spaces、20 个自定义域名、每 Space 1GB 磁盘、每月 100 万次动态请求、100 分钟构建、托管 HTTPS + 数据库 + 文件存储，支持 Git/CLI/API 及 AI 助手部署",
      "quotaTier": 80,
      "cadence": "永久",
      "claimMethod": "访问 spacefast.com 注册账号（无需信用卡），通过 AI 助手、Git 推送、drop.fast 拖拽或 CLI 部署应用",
      "url": "https://spacefast.com/",
      "deadline": null,
      "deadlineText": "Personal 套餐永久免费（以官方现行定价为准）",
      "requirements": [
        "注册 Spacefast 账号",
        "无需信用卡",
        "超出 $1 月度额度可能影响构建与运行"
      ],
      "region": "海外",
      "source": "网络补充",
      "sourceUrl": "https://spacefast.com/",
      "tags": [
        "永久免费",
        "免信用卡",
        "AI部署",
        "数据库",
        "自定义域名"
      ],
      "notes": "2026-11-25 官网复核：Spacefast 由 Automattic（WordPress.com/Jetpack 母公司）于 2026-11-09 推出，Personal $0/月、20 Spaces、20 自定义域名、免卡，含数据库与自动 HTTPS。",
      "discoveredAt": "2026-11-25",
      "statusTag": "active"
    },
    {
      "id": "netlify",
      "provider": "Netlify",
      "title": "Netlify $0 永久静态托管（积分制）",
      "type": "托管平台",
      "quota": "每月 300 积分（2025-09 起），带宽 20 积分/GB；超额暂停而非扣费",
      "quotaTier": 20,
      "cadence": "每月",
      "claimMethod": "官网注册，无需绑卡",
      "url": "https://www.netlify.com/pricing",
      "deadline": null,
      "deadlineText": "$0 长期有效，超额暂停",
      "requirements": [
        "接受积分制",
        "单项目超限可能暂停全账户"
      ],
      "region": "海外",
      "source": "网络更新",
      "sourceUrl": "https://www.netlify.com/pricing",
      "tags": [
        "静态托管",
        "免绑卡",
        "积分制"
      ],
      "notes": "2026-11-25 官网实测：不再公布固定带宽/构建分钟数，改为积分硬上限，不会产生意外账单。",
      "discoveredAt": "2026-11-25",
      "statusTag": null
    },
    {
      "id": "firebase-spark",
      "provider": "Firebase Spark",
      "title": "Firebase 免费层（Spark）",
      "type": "托管平台",
      "quota": "Firestore 1GiB / 每天 5 万次读；Hosting 360MB/天；函数与部分存储需 Blaze",
      "quotaTier": 20,
      "cadence": "每月",
      "claimMethod": "创建 Firebase 项目，Spark 方案无需支付方式",
      "url": "https://firebase.google.com/pricing",
      "deadline": null,
      "deadlineText": "长期免费层",
      "requirements": [
        "Google 账号",
        "函数需 Blaze"
      ],
      "region": "海外",
      "source": "网络补充",
      "sourceUrl": "https://dev.to/lightcloud/free-hosting-without-a-credit-card-5h43",
      "tags": [
        "静态托管",
        "Firestore",
        "免绑卡"
      ],
      "notes": "2026-11 第三方逐项核对官方定价页； Hosting/Firestore 免费额度可用，2026-02-03 起部分 App Hosting 与 Storage 功能需 Blaze。",
      "discoveredAt": "2026-11-25",
      "statusTag": null
    },
    {
      "id": "register-us-kg",
      "provider": "US.KG",
      "title": "永久免费 .us.kg 二级域名",
      "type": "域名",
      "quota": "免费 yourname.us.kg，终身免费，默认 1 个/账户，可托管 Cloudflare",
      "quotaTier": 50,
      "cadence": "永久",
      "claimMethod": "官网注册、邮箱激活后添加域名",
      "url": "https://register.us.kg",
      "deadline": null,
      "deadlineText": "终身免费，需按期续期",
      "requirements": [
        "邮箱激活",
        "外部 DNS 托管",
        "部分流程需身份信息"
      ],
      "region": "海外",
      "source": "网络补充",
      "sourceUrl": "https://www.vivozhijia.com/wz/943091.html",
      "tags": [
        "免费域名",
        "Cloudflare",
        "非Freenom"
      ],
      "notes": "2026-11-25 官网实测可访问；非 Freenom .tk。部分教程要求虚拟身份完成 KYC，隐私敏感者慎用。",
      "discoveredAt": "2026-11-25",
      "statusTag": null
    }
  ],
  "githubTrending": [
    {
      "id": "daily-elementalsouls-claude-bughunter",
      "rank": 1,
      "period": "today",
      "fullName": "elementalsouls/Claude-BugHunter",
      "language": "Python",
      "stars": 21512,
      "forks": 2236,
      "gain": 1826,
      "description": "Claude Code 漏洞挖掘技能包：84 个技能、15 个斜杠命令、覆盖 24 类漏洞的 681 份公开报告模式，并含企业身份与基础设施攻击矩阵。",
      "url": "https://github.com/elementalsouls/Claude-BugHunter",
      "discoveredAt": "2026-11-23",
      "tags": [
        "AI Agent",
        "安全",
        "Claude Code"
      ]
    },
    {
      "id": "daily-obra-superpowers",
      "rank": 2,
      "period": "today",
      "fullName": "obra/superpowers",
      "language": "Shell",
      "stars": 325843,
      "forks": 28910,
      "gain": 1003,
      "description": "智能体技能框架与软件开发方法论，提供可组合技能与规范化工作流，帮助编码代理按流程完成工程任务。",
      "url": "https://github.com/obra/superpowers",
      "discoveredAt": "2026-11-23",
      "tags": [
        "AI Agent",
        "开发方法论",
        "超热门"
      ]
    },
    {
      "id": "daily-hkuds-cli-anything",
      "rank": 3,
      "period": "today",
      "fullName": "HKUDS/CLI-Anything",
      "language": "Python",
      "stars": 64828,
      "forks": 5908,
      "gain": 1074,
      "description": "让所有软件原生支持智能体的命令行框架，通过 CLI-Hub 将桌面与专业软件封装为可调用工具。",
      "url": "https://github.com/HKUDS/CLI-Anything",
      "discoveredAt": "2026-11-23",
      "tags": [
        "AI Agent",
        "CLI",
        "港大"
      ]
    },
    {
      "id": "daily-jingyaogong-minimind",
      "rank": 4,
      "period": "today",
      "fullName": "jingyaogong/minimind",
      "language": "Python",
      "stars": 70236,
      "forks": 9140,
      "gain": 727,
      "description": "两小时从零训练 64M 参数小模型的完整教程与代码，覆盖数据、预训练、监督微调与评估。",
      "url": "https://github.com/jingyaogong/minimind",
      "discoveredAt": "2026-11-23",
      "tags": [
        "大模型",
        "深度学习",
        "中文项目"
      ]
    },
    {
      "id": "daily-cursor-plugins",
      "rank": 5,
      "period": "today",
      "fullName": "cursor/plugins",
      "language": "TypeScript",
      "stars": 19231,
      "forks": 2079,
      "gain": 360,
      "description": "Cursor 插件规范与官方插件集合，展示如何为编辑器扩展智能体能力。",
      "url": "https://github.com/cursor/plugins",
      "discoveredAt": "2026-11-23",
      "tags": [
        "开发工具",
        "Cursor",
        "插件"
      ]
    },
    {
      "id": "daily-firecrawl-firecrawl",
      "rank": 6,
      "period": "today",
      "fullName": "firecrawl/firecrawl",
      "language": "TypeScript",
      "stars": 208963,
      "forks": 10917,
      "gain": 991,
      "description": "为智能体提供搜索、抓取与结构化抽取的知识基础设施，把网页转成 LLM 可用的数据。",
      "url": "https://github.com/firecrawl/firecrawl",
      "discoveredAt": "2026-11-23",
      "tags": [
        "AI Agent",
        "爬虫",
        "数据"
      ]
    },
    {
      "id": "daily-nginx-nginx",
      "rank": 7,
      "period": "today",
      "fullName": "nginx/nginx",
      "language": "C",
      "stars": 33225,
      "forks": 8394,
      "gain": 158,
      "description": "NGINX 开源官方仓库，高性能 Web 服务器与反向代理。",
      "url": "https://github.com/nginx/nginx",
      "discoveredAt": "2026-11-23",
      "tags": [
        "基础设施",
        "Web 服务器"
      ]
    },
    {
      "id": "daily-openvinotoolkit-openvino",
      "rank": 8,
      "period": "today",
      "fullName": "openvinotoolkit/openvino",
      "language": "C++",
      "stars": 12471,
      "forks": 3693,
      "gain": 185,
      "description": "英特尔开源 AI 推理优化与部署工具套件，支持跨硬件加速。",
      "url": "https://github.com/openvinotoolkit/openvino",
      "discoveredAt": "2026-11-23",
      "tags": [
        "AI 推理",
        "Intel",
        "边缘计算"
      ]
    },
    {
      "id": "daily-cathrynlavery-diagram-design",
      "rank": 9,
      "period": "today",
      "fullName": "cathrynlavery/diagram-design",
      "language": "HTML",
      "stars": 72072,
      "forks": 4808,
      "gain": 802,
      "description": "面向 Claude Code、Codex 等编码助手的编辑级图表设计技能，生成更专业的架构与流程示意图。",
      "url": "https://github.com/cathrynlavery/diagram-design",
      "discoveredAt": "2026-11-23",
      "tags": [
        "可视化",
        "AI Agent",
        "SVG"
      ]
    },
    {
      "id": "daily-mvanhorn-last30days-skill",
      "rank": 10,
      "period": "today",
      "fullName": "mvanhorn/last30days-skill",
      "language": "Python",
      "stars": 74236,
      "forks": 6545,
      "gain": 703,
      "description": "智能体技能：聚合 Reddit、X、YouTube、HN 等近 30 天内容，自动调研任意主题并生成报告。",
      "url": "https://github.com/mvanhorn/last30days-skill",
      "discoveredAt": "2026-11-23",
      "tags": [
        "AI Agent",
        "调研",
        "技能包"
      ]
    },
    {
      "id": "daily-google-stitch-skills",
      "rank": 11,
      "period": "today",
      "fullName": "google-labs-code/stitch-skills",
      "language": "TypeScript",
      "stars": 12663,
      "forks": 1525,
      "gain": 403,
      "description": "配合 Stitch MCP 服务器使用的 Agent Skills 库，用于生成和编辑界面设计稿。",
      "url": "https://github.com/google-labs-code/stitch-skills",
      "discoveredAt": "2026-11-23",
      "tags": [
        "Google",
        "MCP",
        "AI Agent"
      ]
    },
    {
      "id": "daily-mjmirza-app-store-compliance",
      "rank": 12,
      "period": "today",
      "fullName": "mjmirza/app-store-compliance",
      "language": "Shell",
      "stars": 5876,
      "forks": 379,
      "gain": 928,
      "description": "开源审核手册与技能，帮助应用规避 App Store 与 Google Play 常见拒绝理由。",
      "url": "https://github.com/mjmirza/app-store-compliance",
      "discoveredAt": "2026-11-23",
      "tags": [
        "移动开发",
        "合规",
        "AI Agent"
      ]
    },
    {
      "id": "daily-tracer-cloud-opensre",
      "rank": 13,
      "period": "today",
      "fullName": "Tracer-Cloud/opensre",
      "language": "Python",
      "stars": 15198,
      "forks": 2012,
      "gain": 398,
      "description": "面向 CI/CD 可靠性的开源智能体，自动诊断与修复流水线故障。",
      "url": "https://github.com/Tracer-Cloud/opensre",
      "discoveredAt": "2026-11-23",
      "tags": [
        "DevOps",
        "AI Agent",
        "SRE"
      ]
    },
    {
      "id": "daily-toeverything-affine",
      "rank": 14,
      "period": "today",
      "fullName": "toeverything/AFFiNE",
      "language": "TypeScript",
      "stars": 78008,
      "forks": 5698,
      "gain": 584,
      "description": "集文档、白板与数据库于一体的开源知识协作工具，可替代 Notion 与 Miro。",
      "url": "https://github.com/toeverything/AFFiNE",
      "discoveredAt": "2026-11-23",
      "tags": [
        "知识管理",
        "国产开源",
        "协作"
      ]
    },
    {
      "id": "daily-xiaoyouchr-ghost-downloader",
      "rank": 15,
      "period": "today",
      "fullName": "XiaoYouChR/Ghost-Downloader-3",
      "language": "Python",
      "stars": 17382,
      "forks": 1051,
      "gain": 1092,
      "description": "开源下载器集大成者，支持多站点、多协议与批量任务管理。",
      "url": "https://github.com/XiaoYouChR/Ghost-Downloader-3",
      "discoveredAt": "2026-11-23",
      "tags": [
        "下载工具",
        "国产开源"
      ]
    },
    {
      "id": "weekly-backnotprop-plannotator",
      "rank": 1,
      "period": "week",
      "fullName": "backnotprop/plannotator",
      "language": "TypeScript",
      "stars": 14897,
      "forks": 1437,
      "gain": 1956,
      "description": "智能体工作区：在同一界面规划、评审与跟踪多个编码代理任务，保持对进度的掌控。",
      "url": "https://github.com/backnotprop/plannotator",
      "discoveredAt": "2026-11-23",
      "tags": [
        "AI Agent",
        "代码评审",
        "协作"
      ]
    },
    {
      "id": "weekly-google-stitch-skills",
      "rank": 2,
      "period": "week",
      "fullName": "google-labs-code/stitch-skills",
      "language": "TypeScript",
      "stars": 12663,
      "forks": 1525,
      "gain": 2626,
      "description": "配合 Stitch MCP 服务器使用的 Agent Skills 库，用于生成和编辑界面设计稿。",
      "url": "https://github.com/google-labs-code/stitch-skills",
      "discoveredAt": "2026-11-23",
      "tags": [
        "Google",
        "MCP",
        "AI Agent"
      ]
    },
    {
      "id": "weekly-googlechrome-modern-web-guidance",
      "rank": 3,
      "period": "week",
      "fullName": "GoogleChrome/modern-web-guidance-src",
      "language": "TypeScript",
      "stars": 10825,
      "forks": 822,
      "gain": 2494,
      "description": "Chrome 团队维护的现代 Web 开发指南源，让编码代理持续遵循最新浏览器最佳实践。",
      "url": "https://github.com/GoogleChrome/modern-web-guidance-src",
      "discoveredAt": "2026-11-23",
      "tags": [
        "Web 开发",
        "Google",
        "AI Agent"
      ]
    },
    {
      "id": "weekly-alibaba-open-code-review",
      "rank": 4,
      "period": "week",
      "fullName": "alibaba/open-code-review",
      "language": "Go",
      "stars": 56056,
      "forks": 4632,
      "gain": 2638,
      "description": "阿里巴巴开源的混合架构代码审查智能体，强调安全、快速与大规模实战。",
      "url": "https://github.com/alibaba/open-code-review",
      "discoveredAt": "2026-11-23",
      "tags": [
        "代码评审",
        "阿里",
        "国产开源"
      ]
    },
    {
      "id": "weekly-mvanhorn-last30days-skill",
      "rank": 5,
      "period": "week",
      "fullName": "mvanhorn/last30days-skill",
      "language": "Python",
      "stars": 74236,
      "forks": 6545,
      "gain": 5369,
      "description": "智能体技能：聚合 Reddit、X、YouTube、HN 等近 30 天内容，自动调研任意主题并生成报告。",
      "url": "https://github.com/mvanhorn/last30days-skill",
      "discoveredAt": "2026-11-23",
      "tags": [
        "AI Agent",
        "调研",
        "技能包"
      ]
    },
    {
      "id": "weekly-chromedevtools-mcp",
      "rank": 6,
      "period": "week",
      "fullName": "ChromeDevTools/chrome-devtools-mcp",
      "language": "TypeScript",
      "stars": 59218,
      "forks": 4880,
      "gain": 1258,
      "description": "把 Chrome DevTools 暴露为 MCP 工具，供编码代理调试页面、检查网络与性能。",
      "url": "https://github.com/ChromeDevTools/chrome-devtools-mcp",
      "discoveredAt": "2026-11-23",
      "tags": [
        "MCP",
        "浏览器自动化",
        "Google"
      ]
    },
    {
      "id": "weekly-tradermonty-claude-trading-skills",
      "rank": 7,
      "period": "week",
      "fullName": "tradermonty/claude-trading-skills",
      "language": "Python",
      "stars": 8308,
      "forks": 1540,
      "gain": 1504,
      "description": "面向股票投资者与交易者的 Claude Code 技能集，涵盖市场分析、选股与风险管理。",
      "url": "https://github.com/tradermonty/claude-trading-skills",
      "discoveredAt": "2026-11-23",
      "tags": [
        "金融",
        "AI Agent",
        "技能包"
      ]
    },
    {
      "id": "weekly-ag-ui-protocol",
      "rank": 8,
      "period": "week",
      "fullName": "ag-ui-protocol/ag-ui",
      "language": "TypeScript",
      "stars": 21572,
      "forks": 2173,
      "gain": 1753,
      "description": "AG-UI 智能体与前端交互协议，标准化事件流与状态同步。",
      "url": "https://github.com/ag-ui-protocol/ag-ui",
      "discoveredAt": "2026-11-23",
      "tags": [
        "协议",
        "AI Agent",
        "前端"
      ]
    },
    {
      "id": "weekly-meta-astryx",
      "rank": 9,
      "period": "week",
      "fullName": "meta/astryx",
      "language": "TypeScript",
      "stars": 32884,
      "forks": 2576,
      "gain": 2890,
      "description": "Meta 开源的可完全定制、面向智能体的设计系统。",
      "url": "https://github.com/meta/astryx",
      "discoveredAt": "2026-11-23",
      "tags": [
        "设计系统",
        "Meta",
        "AI Agent"
      ]
    },
    {
      "id": "weekly-pookjw-hermes-enabler",
      "rank": 10,
      "period": "week",
      "fullName": "pookjw/HermesEnabler",
      "language": "Objective-C",
      "stars": 2489,
      "forks": 206,
      "gain": 328,
      "description": "让任意 Apple Watch 设备启用 Hermès 表盘的开源工具。",
      "url": "https://github.com/pookjw/HermesEnabler",
      "discoveredAt": "2026-11-23",
      "tags": [
        "Apple Watch",
        "有趣项目"
      ]
    },
    {
      "id": "weekly-we-promise-sure",
      "rank": 11,
      "period": "week",
      "fullName": "we-promise/sure",
      "language": "Ruby",
      "stars": 17780,
      "forks": 1543,
      "gain": 1567,
      "description": "面向所有人的开源个人理财应用，支持协作与多平台。",
      "url": "https://github.com/we-promise/sure",
      "discoveredAt": "2026-11-23",
      "tags": [
        "个人理财",
        "开源应用"
      ]
    },
    {
      "id": "weekly-dream-num-univer",
      "rank": 12,
      "period": "week",
      "fullName": "dream-num/univer",
      "language": "TypeScript",
      "stars": 31695,
      "forks": 2858,
      "gain": 3278,
      "description": "Univer Office SDK：用开源套件构建自己的 AI 办公应用，支持编辑、表格与协作。",
      "url": "https://github.com/dream-num/univer",
      "discoveredAt": "2026-11-23",
      "tags": [
        "办公套件",
        "国产开源",
        "AI"
      ]
    },
    {
      "id": "weekly-kajisho5-ffmpeg-skill",
      "rank": 13,
      "period": "week",
      "fullName": "kajisho5/ffmpeg-skill",
      "language": "Python",
      "stars": 10693,
      "forks": 920,
      "gain": 2993,
      "description": "本地视频编辑技能，为编码代理提供 42 个 FFmpeg 工具与机器可读接口。",
      "url": "https://github.com/kajisho5/ffmpeg-skill",
      "discoveredAt": "2026-11-23",
      "tags": [
        "视频处理",
        "MCP",
        "AI Agent"
      ]
    },
    {
      "id": "daily-zhouxiaoka-autoclip",
      "rank": 16,
      "period": "today",
      "fullName": "zhouxiaoka/autoclip",
      "language": "Python",
      "stars": 15378,
      "forks": 2268,
      "gain": 980,
      "description": "AutoClip：一个链接一键出片的开源 AI 视频剪辑桌面工具，自动切片长视频并生成字幕、封面与发布文案。",
      "url": "https://github.com/zhouxiaoka/autoclip",
      "discoveredAt": "2026-11-23",
      "tags": [
        "视频剪辑",
        "国产开源",
        "AI"
      ]
    },
    {
      "id": "trend-freellmapi",
      "rank": 1,
      "period": "month",
      "fullName": "tashfeenahmed/freellmapi",
      "language": "TypeScript",
      "stars": 45662,
      "forks": 0,
      "gain": 15643,
      "description": "每月 74 亿 Token、34 家免费 LLM 服务商、635 个免费模型端点，统一收口到一个 /v1 接口。",
      "url": "https://github.com/tashfeenahmed/freellmapi",
      "discoveredAt": "2026-11-24",
      "tags": [
        "AI Agent",
        "免费Token",
        "聚合API"
      ]
    },
    {
      "id": "trend-security-audit-skill",
      "rank": 2,
      "period": "month",
      "fullName": "cloudflare/security-audit-skill",
      "language": "JavaScript",
      "stars": 56273,
      "forks": 3670,
      "gain": 31731,
      "description": "面向编码 Agent 的多阶段安全审计技能，产出可独立验证、机器可读的审计结论。",
      "url": "https://github.com/cloudflare/security-audit-skill",
      "discoveredAt": "2026-11-24",
      "tags": [
        "AI Agent",
        "安全",
        "Skill"
      ]
    },
    {
      "id": "trend-hallmark",
      "rank": 3,
      "period": "month",
      "fullName": "Nutlope/hallmark",
      "language": "CSS",
      "stars": 44750,
      "forks": 0,
      "gain": 14378,
      "description": "为 Claude Code、Cursor、Codex 打造的反 AI 模板化设计技能。",
      "url": "https://github.com/Nutlope/hallmark",
      "discoveredAt": "2026-11-24",
      "tags": [
        "AI Agent",
        "设计",
        "Skill"
      ]
    },
    {
      "id": "trend-knowledge-work-plugins",
      "rank": 4,
      "period": "month",
      "fullName": "anthropics/knowledge-work-plugins",
      "language": "Python",
      "stars": 34347,
      "forks": 0,
      "gain": 8375,
      "description": "面向知识工作者的 Claude Cowork 开源插件仓库。",
      "url": "https://github.com/anthropics/knowledge-work-plugins",
      "discoveredAt": "2026-11-24",
      "tags": [
        "AI Agent",
        "插件",
        "Claude"
      ]
    },
    {
      "id": "trend-impeccable",
      "rank": 5,
      "period": "month",
      "fullName": "pbakaus/impeccable",
      "language": "Rust",
      "stars": 99229,
      "forks": 0,
      "gain": 25479,
      "description": "为编码 Agent 提供设计语汇：打磨风格、审查审计，在发布前识别 AI 味设计。",
      "url": "https://github.com/pbakaus/impeccable",
      "discoveredAt": "2026-11-24",
      "tags": [
        "AI Agent",
        "设计",
        "编码"
      ]
    },
    {
      "id": "trend-claude-seo",
      "rank": 6,
      "period": "month",
      "fullName": "AgriciDaniel/claude-seo",
      "language": "Python",
      "stars": 25479,
      "forks": 0,
      "gain": 6891,
      "description": "Claude Code 通用 SEO 技能：26 个子技能 + 19 个子代理，覆盖技术 SEO、E-E-A-T、结构化数据与 GEO。",
      "url": "https://github.com/AgriciDaniel/claude-seo",
      "discoveredAt": "2026-11-24",
      "tags": [
        "AI Agent",
        "SEO",
        "Skill"
      ]
    },
    {
      "id": "trend-vercel-skills",
      "rank": 7,
      "period": "month",
      "fullName": "vercel-labs/skills",
      "language": "TypeScript",
      "stars": 37590,
      "forks": 0,
      "gain": 4721,
      "description": "开源 Agent Skills 工具 npx skills，一行命令安装技能。",
      "url": "https://github.com/vercel-labs/skills",
      "discoveredAt": "2026-11-24",
      "tags": [
        "AI Agent",
        "Skill",
        "工具"
      ]
    },
    {
      "id": "trend-mattpocock-skills",
      "rank": 8,
      "period": "month",
      "fullName": "mattpocock/skills",
      "language": "Shell",
      "stars": 313500,
      "forks": 0,
      "gain": 9600,
      "description": "来自 Matt Pocock 本人 .agents 目录的实战工程师技能集。",
      "url": "https://github.com/mattpocock/skills",
      "discoveredAt": "2026-11-24",
      "tags": [
        "AI Agent",
        "Skill",
        "工程"
      ]
    },
    {
      "id": "trend-deepseek-harness",
      "rank": 9,
      "period": "month",
      "fullName": "deepseek-ai/deepseek-harness",
      "language": "TypeScript",
      "stars": 267000,
      "forks": 0,
      "gain": 7200,
      "description": "DeepSeek Harness：以插件为核心构建的 Agent 框架。",
      "url": "https://github.com/deepseek-ai/deepseek-harness",
      "discoveredAt": "2026-11-24",
      "tags": [
        "AI Agent",
        "DeepSeek",
        "插件"
      ]
    },
    {
      "id": "trend-agent-reach",
      "rank": 10,
      "period": "month",
      "fullName": "Panniantong/Agent-Reach",
      "language": "Python",
      "stars": 9500,
      "forks": 0,
      "gain": 5800,
      "description": "让 AI Agent 看遍全网：一个 CLI 读取与搜索 Twitter、Reddit、YouTube、GitHub、B站、小红书，零 API 费用。",
      "url": "https://github.com/Panniantong/Agent-Reach",
      "discoveredAt": "2026-11-24",
      "tags": [
        "AI Agent",
        "搜索",
        "CLI"
      ]
    },
    {
      "id": "trend-taste-skill",
      "rank": 11,
      "period": "month",
      "fullName": "Leonxlnx/taste-skill",
      "language": "JavaScript",
      "stars": 7400,
      "forks": 0,
      "gain": 2000,
      "description": "为编码 Agent 注入审美：艺术指导、参考图与浏览器校验，告别千篇一律的 AI 页面。",
      "url": "https://github.com/Leonxlnx/taste-skill",
      "discoveredAt": "2026-11-24",
      "tags": [
        "AI Agent",
        "设计",
        "Skill"
      ]
    },
    {
      "id": "trend-graphify",
      "rank": 12,
      "period": "month",
      "fullName": "Graphify-Labs/graphify",
      "language": "Python",
      "stars": 13300,
      "forks": 0,
      "gain": 4900,
      "description": "把代码库及其文档、SQL Schema、配置与 PDF 转成可查询知识图谱，支持 Claude Code、Cursor、Codex、Gemini CLI。",
      "url": "https://github.com/Graphify-Labs/graphify",
      "discoveredAt": "2026-11-24",
      "tags": [
        "AI Agent",
        "知识图谱",
        "Skill"
      ]
    },
    {
      "id": "trend-gstack",
      "rank": 13,
      "period": "month",
      "fullName": "garrytan/gstack",
      "language": "TypeScript",
      "stars": 139400,
      "forks": 0,
      "gain": 0,
      "description": "复刻 Garry Tan 的 Claude Code 配置：23 个工具分别充当 CEO、设计师、工程经理、发布经理、文档工程师与 QA。",
      "url": "https://github.com/garrytan/gstack",
      "discoveredAt": "2026-11-24",
      "tags": [
        "AI Agent",
        "Claude Code",
        "工具集"
      ]
    },
    {
      "id": "trend-google-skills",
      "rank": 14,
      "period": "month",
      "fullName": "google/skills",
      "language": "Python",
      "stars": 21800,
      "forks": 0,
      "gain": 0,
      "description": "面向 Google 产品与技术的 Agent Skills 集合。",
      "url": "https://github.com/google/skills",
      "discoveredAt": "2026-11-24",
      "tags": [
        "AI Agent",
        "Google",
        "Skill"
      ]
    },
    {
      "id": "trend-garden-skills",
      "rank": 15,
      "period": "month",
      "fullName": "ConardLi/garden-skills",
      "language": "JavaScript",
      "stars": 13300,
      "forks": 0,
      "gain": 0,
      "description": "ConardLi 开源技能合集，涵盖网页设计、知识检索、图像生成等方向。",
      "url": "https://github.com/ConardLi/garden-skills",
      "discoveredAt": "2026-11-24",
      "tags": [
        "AI Agent",
        "Skill",
        "合集"
      ]
    },
    {
      "id": "trend-vercel-labs-agent-desktop",
      "rank": null,
      "period": "2026-11-25",
      "fullName": "vercel-labs/agent-desktop",
      "language": "Rust",
      "stars": 8402,
      "forks": 590,
      "gain": 2243,
      "description": "让 AI Agent 可靠操作桌面：读取真实 OS 无障碍树（accessibility tree）替代像素猜测，refs 稳定、操作可安全重试；Apache 2.0 协议，Rust 实现。",
      "url": "https://github.com/vercel-labs/agent-desktop",
      "discoveredAt": "2026-11-25",
      "tags": [
        "AI Agent",
        "桌面自动化",
        "Rust"
      ]
    },
    {
      "id": "trend-d4vinci-scrapling",
      "rank": null,
      "period": "2026-11-25",
      "fullName": "D4Vinci/Scrapling",
      "language": "Python",
      "stars": 92367,
      "forks": 9748,
      "gain": null,
      "description": "AI 原生的网页抓取框架：智能选择器引擎、MCP server 集成、反检测绕过，从单次请求到全规模分布式爬取均可覆盖。",
      "url": "https://github.com/D4Vinci/Scrapling",
      "discoveredAt": "2026-11-25",
      "tags": [
        "AI Agent",
        "爬虫",
        "MCP"
      ]
    },
    {
      "id": "trend-karpathy-nanochat",
      "rank": null,
      "period": "2026-11-25",
      "fullName": "karpathy/nanochat",
      "language": "Python",
      "stars": 59690,
      "forks": 8394,
      "gain": null,
      "description": "「100 美元能买到的最好 ChatGPT」：极简、快速、本地优先的聊天界面，证明无需企业级基础设施也能获得高质量 AI 交互。",
      "url": "https://github.com/karpathy/nanochat",
      "discoveredAt": "2026-11-25",
      "tags": [
        "AI Agent",
        "本地推理",
        "极简"
      ]
    },
    {
      "id": "trend-justvugg-colibri",
      "rank": null,
      "period": "2026-11-25",
      "fullName": "JustVugg/colibri",
      "language": "C",
      "stars": 46263,
      "forks": 5344,
      "gain": null,
      "description": "在自有硬件上运行前沿 MoE 模型：纯 C 实现、零依赖，专家权重从磁盘流式加载，让大模型在消费级硬件上可跑。",
      "url": "https://github.com/JustVugg/colibri",
      "discoveredAt": "2026-11-25",
      "tags": [
        "本地推理",
        "MoE",
        "C"
      ]
    },
    {
      "id": "trend-pew-heretic",
      "rank": null,
      "period": "2026-11-25",
      "fullName": "p-e-w/heretic",
      "language": "Python",
      "stars": 37851,
      "forks": 4309,
      "gain": null,
      "description": "无需训练即可修改语言模型：去除审查、抑制 AI 套话、降低谄媚，无需微调即可部署行为定制。",
      "url": "https://github.com/p-e-w/heretic",
      "discoveredAt": "2026-11-25",
      "tags": [
        "AI Agent",
        "模型行为",
        "本地推理"
      ]
    },
    {
      "id": "trend-stablyai-orca",
      "rank": null,
      "period": "2026-11-25",
      "fullName": "stablyai/orca",
      "language": "TypeScript",
      "stars": 125600,
      "forks": 8000,
      "gain": null,
      "description": "用自己的订阅跑一整队编码 Agent（如 Claude Code、Codex），支持桌面、移动端与远程运行时。",
      "url": "https://github.com/stablyai/orca",
      "discoveredAt": "2026-11-25",
      "tags": [
        "AI Agent",
        "编码",
        "多Agent"
      ]
    },
    {
      "id": "gt-morluto-rea",
      "rank": null,
      "period": "week",
      "fullName": "morluto/rea",
      "language": "TypeScript",
      "stars": 476902,
      "forks": null,
      "gain": null,
      "description": "让 AI 编码 Agent 通过单一 MCP 服务器与 CLI 逆向工程应用、二进制与网站，返回带证据的发现，便于 Agent 解释功能或重建。",
      "url": "https://github.com/morluto/rea",
      "discoveredAt": "2026-11-25",
      "tags": [
        "AI Agent",
        "逆向工程"
      ],
      "notes": "Reverse engineer anything with agents, from app behavior down to native binaries."
    },
    {
      "id": "gt-deepseek-ai-dsh-superagent-prototype",
      "rank": null,
      "period": "week",
      "fullName": "deepseek-ai/dsh-superagent-prototype",
      "language": "TypeScript",
      "stars": 24466,
      "forks": null,
      "gain": null,
      "description": "DeepSeek 推出的主动式编码 Agent 原型：监听单个 GitHub 仓库（及可选飞书），自动开工作项、在自身 Agent 会话中开发改动并回复，常带 PR。",
      "url": "https://github.com/deepseek-ai/dsh-superagent-prototype",
      "discoveredAt": "2026-11-25",
      "tags": [
        "AI Agent",
        "DeepSeek"
      ],
      "notes": "Towards a More Autonomous Agent System"
    },
    {
      "id": "gt-nexu-io-open-design",
      "rank": null,
      "period": "week",
      "fullName": "nexu-io/open-design",
      "language": "TypeScript",
      "stars": 109302,
      "forks": null,
      "gain": null,
      "description": "首个协作式 AI 设计 Agent 工作区，本地优先开源：与团队和 AI Agent 一起创建动效、原型、网站、应用、仪表盘、演示、图片与视频。",
      "url": "https://github.com/nexu-io/open-design",
      "discoveredAt": "2026-11-25",
      "tags": [
        "AI Agent",
        "设计"
      ],
      "notes": "The 1st Collaborative AI Design Agent Workspace. Local-first and open source."
    },
    {
      "id": "gt-nexu-io-openmotion",
      "rank": null,
      "period": "week",
      "fullName": "nexu-io/openmotion",
      "language": "TypeScript",
      "stars": 15987,
      "forks": null,
      "gain": null,
      "description": "开源的 Claude Motion 与剪映替代品：将参考视频转为可编辑的动态图形，带品牌套件，可导出 MP4。",
      "url": "https://github.com/nexu-io/openmotion",
      "discoveredAt": "2026-11-25",
      "tags": [
        "AI Agent",
        "视频"
      ],
      "notes": "The open-source Claude Motion & CapCut alternative."
    },
    {
      "id": "gt-ebony-vinyl-dsh-our-free-model",
      "rank": null,
      "period": "week",
      "fullName": "Ebony-Vinyl/dsh-our-free-model",
      "language": "JavaScript",
      "stars": 85929,
      "forks": null,
      "gain": null,
      "description": "在 DeepSeek Harness（dsh）中安装该插件，无需登录、注册或填 API Key，即可使用 DeepSeek V4.1 Flash、Kimi K3 等前沿模型，完全免费不限量。",
      "url": "https://github.com/Ebony-Vinyl/dsh-our-free-model",
      "discoveredAt": "2026-11-25",
      "tags": [
        "AI Agent",
        "免费模型"
      ],
      "notes": "在 dsh 里装上插件即可免登录、免注册、免 API Key 使用前沿模型，完全免费不限量"
    },
    {
      "id": "gt-donchitos-claude-code-game-studios",
      "rank": null,
      "period": "week",
      "fullName": "Donchitos/Claude-Code-Game-Studios",
      "language": "Shell",
      "stars": 40817,
      "forks": null,
      "gain": null,
      "description": "将 Claude Code 变成完整游戏开发工作室：49 个 AI Agent、75 个工作流 Skill，模拟真实游戏工作室的协作层级与协调系统。",
      "url": "https://github.com/Donchitos/Claude-Code-Game-Studios",
      "discoveredAt": "2026-11-25",
      "tags": [
        "AI Agent",
        "游戏开发"
      ],
      "notes": "Turn Claude Code into a full game dev studio — 49 AI agents, 75 workflow skills"
    },
    {
      "id": "gt-pingdotgg-t3code",
      "rank": null,
      "period": "week",
      "fullName": "pingdotgg/t3code",
      "language": "TypeScript",
      "stars": 77126,
      "forks": null,
      "gain": null,
      "description": "从任意电脑或手机控制 Claude Code、Codex 等编码 Agent 的编排工具。",
      "url": "https://github.com/pingdotgg/t3code",
      "discoveredAt": "2026-11-25",
      "tags": [
        "AI Agent",
        "远程控制"
      ],
      "notes": "The best way to control Claude Code, Codex and more from any computer or phone"
    },
    {
      "id": "gt-heydamir-unslop",
      "rank": null,
      "period": "week",
      "fullName": "heydamir/unslop",
      "language": "JavaScript",
      "stars": 21235,
      "forks": null,
      "gain": null,
      "description": "Claude 技能：把「vibecoding」产出的 AI 味界面改造成有设计感的界面。",
      "url": "https://github.com/heydamir/unslop",
      "discoveredAt": "2026-11-25",
      "tags": [
        "AI Agent",
        "UI设计"
      ],
      "notes": "A Claude skill that turns vibecoded, AI-looking UI into a designed interface"
    },
    {
      "id": "gt-herdrdev-herdr",
      "rank": null,
      "period": "week",
      "fullName": "herdrdev/herdr",
      "language": "Rust",
      "stars": 52634,
      "forks": null,
      "gain": null,
      "description": "编码 Agent 运行的运行时（Rust 实现），为 Agent 提供执行环境。",
      "url": "https://github.com/herdrdev/herdr",
      "discoveredAt": "2026-11-25",
      "tags": [
        "AI Agent",
        "运行时"
      ],
      "notes": "the runtime your coding agents live on"
    },
    {
      "id": "gt-earendil-works-pi",
      "rank": null,
      "period": "week",
      "fullName": "earendil-works/pi",
      "language": "TypeScript",
      "stars": 123706,
      "forks": null,
      "gain": null,
      "description": "AI Agent 工具包：统一 LLM API、Agent 循环、终端 UI 与编码 Agent CLI。",
      "url": "https://github.com/earendil-works/pi",
      "discoveredAt": "2026-11-25",
      "tags": [
        "AI Agent",
        "工具包"
      ],
      "notes": "AI agent toolkit: unified LLM API, agent loop, TUI, coding agent CLI"
    },
    {
      "id": "gt-coreyhaines31-marketingskills",
      "rank": null,
      "period": "week",
      "fullName": "coreyhaines31/marketingskills",
      "language": "JavaScript",
      "stars": 62428,
      "forks": null,
      "gain": null,
      "description": "面向 Claude Code 与 AI Agent 的营销技能集：CRO、文案、SEO、数据分析与增长引擎。",
      "url": "https://github.com/coreyhaines31/marketingskills",
      "discoveredAt": "2026-11-25",
      "tags": [
        "AI Agent",
        "营销"
      ],
      "notes": "Marketing skills for Claude Code and AI agents (CRO, copywriting, SEO, analytics, growth)"
    },
    {
      "id": "gt-openmontageinc-openmontage",
      "rank": null,
      "period": "week",
      "fullName": "OpenMontageInc/OpenMontage",
      "language": "Python",
      "stars": 83039,
      "forks": null,
      "gain": null,
      "description": "全球首个开源 Agentic 视频制作系统：12 条制作流水线、100+ 工具，以 Agent 方式完成视频生产。",
      "url": "https://github.com/OpenMontageInc/OpenMontage",
      "discoveredAt": "2026-11-25",
      "tags": [
        "AI Agent",
        "视频"
      ],
      "notes": "World's first open-source, agentic video production system. 12 production pipelines, 100+ tools"
    },
    {
      "id": "gt-heygen-com-hyperframes",
      "rank": null,
      "period": "week",
      "fullName": "heygen-com/hyperframes",
      "language": "TypeScript",
      "stars": 89470,
      "forks": null,
      "gain": null,
      "description": "开源 AI 视频编辑器：编辑自有素材，或用 Claude Code 创建、重制任意视频，HTML 渲染为视频。",
      "url": "https://github.com/heygen-com/hyperframes",
      "discoveredAt": "2026-11-25",
      "tags": [
        "AI Agent",
        "视频"
      ],
      "notes": "Open-source AI video editor: edit your own footage, or create and remake any video with Claude Code"
    },
    {
      "id": "gt-lemomo-ai-lemo-opuscar",
      "rank": null,
      "period": "week",
      "fullName": "lemomo-ai/lemo-opuscar",
      "language": "JavaScript",
      "stars": 20631,
      "forks": null,
      "gain": null,
      "description": "用代码制作的电影风格工具箱（Claude Code 技能）：99 种现成风格，并可自定义。",
      "url": "https://github.com/lemomo-ai/lemo-opuscar",
      "discoveredAt": "2026-11-25",
      "tags": [
        "AI Agent",
        "视频"
      ],
      "notes": "A toolbox of film styles made in code for Claude Code: 99 ready to use, and your own"
    },
    {
      "id": "gt-nestjs-agent-skills",
      "rank": null,
      "period": "week",
      "fullName": "nestjs/agent-skills",
      "language": "TypeScript",
      "stars": 159,
      "forks": null,
      "gain": null,
      "description": "NestJS 框架专属的 Agent 技能，辅助高效编写规范的 Node.js 代码。",
      "url": "https://github.com/nestjs/agent-skills",
      "discoveredAt": "2026-11-25",
      "tags": [
        "AI Agent",
        "NestJS"
      ],
      "notes": "Agent skills for Nest framework (node.js)"
    },
    {
      "id": "gt-yibie-claude-best-practices-zh",
      "rank": null,
      "period": "week",
      "fullName": "yibie/claude-best-practices-zh",
      "language": "Markdown",
      "stars": 113,
      "forks": null,
      "gain": null,
      "description": "Claude 官方最佳实践全集中文译文（173 篇）+ 100 个概念的 LLM Wiki 知识图谱 + 交互式知识图谱/思维导图。",
      "url": "https://github.com/yibie/claude-best-practices-zh",
      "discoveredAt": "2026-11-25",
      "tags": [
        "AI Agent",
        "中文实践"
      ],
      "notes": "Claude 官方最佳实践全集：173 篇中文译文 + 100 个概念的 LLM Wiki 知识图谱"
    },
    {
      "id": "gt-datawhalechina-hello-agents",
      "rank": null,
      "period": "week",
      "fullName": "datawhalechina/hello-agents",
      "language": "Markdown",
      "stars": 87854,
      "forks": null,
      "gain": null,
      "description": "Datawhale 出品的智能体系统教程：从 Agent 原理到多智能体实战，全中文、配代码仓库与阶段作业。",
      "url": "https://github.com/datawhalechina/hello-agents",
      "discoveredAt": "2026-11-25",
      "tags": [
        "AI Agent",
        "教程"
      ],
      "notes": "《从零开始构建智能体》——从零开始的智能体原理与实践教程"
    },
    {
      "id": "gt-rasbt-llms-from-scratch",
      "rank": null,
      "period": "week",
      "fullName": "rasbt/LLMs-from-scratch",
      "language": "Jupyter Notebook",
      "stars": 108994,
      "forks": null,
      "gain": null,
      "description": "用 PyTorch 从零一步步实现类 ChatGPT 的大模型，覆盖分词到可训练 GPT 的完整流程。",
      "url": "https://github.com/rasbt/LLMs-from-scratch",
      "discoveredAt": "2026-11-25",
      "tags": [
        "AI Agent",
        "大模型"
      ],
      "notes": "Implement a ChatGPT-like LLM in PyTorch from scratch, step by step"
    }
  ],
  "skills": [
    {
      "id": "sk-pixelfx",
      "name": "pixelfx",
      "repo": "patch-gg/pixelfx",
      "category": "游戏开发 / 游戏特效",
      "desc": "244 个代码驱动的 2D 像素特效 + Claude Code 技能。让 Claude 按「草稿→渲染→看接触表→修正」流程生成火、冰、闪电、UI、天气等特效，支持换色带、镜像、seed、精灵表导出与 check.mjs 自动检查溢出/接缝/慢帧。",
      "install": "/plugin marketplace add patch-gg/pixelfx；/plugin install pixelfx@pixelfx；或复制 skills/pixelfx 到 ~/.claude/skills/",
      "url": "https://github.com/patch-gg/pixelfx/tree/main/skills/pixelfx",
      "sourceUrl": "https://mp.weixin.qq.com/s/XnKvRr0ktlPqZsJ43fKoIQ",
      "installs": "8.8K stars",
      "tier": 100,
      "tags": [
        "像素特效",
        "游戏开发",
        "Claude Code",
        "AIGC"
      ],
      "notes": "MIT 许可，代码与特效可商用；8,769 stars / 1,151 forks（2026-11-23 查询），仓库近期仍有提交。含 SKILL.md，可作为 Claude Code 插件安装。来源：微信公众号《做游戏特效别再囤素材包了，开源免费素材库》。",
      "discoveredAt": "2026-11-23",
      "status": "active"
    },
    {
      "id": "sk-docx",
      "name": "docx",
      "repo": "anthropics/skills",
      "category": "文档办公",
      "desc": "创建与编辑 Word 文档：排版、样式、表格、目录、批注与修订，官方生产级实现。",
      "install": "/plugin install document-skills@anthropic-agent-skills",
      "url": "https://github.com/anthropics/skills/tree/main/skills/docx",
      "sourceUrl": "https://github.com/anthropics/skills",
      "installs": "官方",
      "tier": 100,
      "tags": [
        "Word",
        "文档",
        "官方"
      ],
      "notes": "Apache 2.0，配合 Claude 文档能力。",
      "discoveredAt": "2026-11-23",
      "status": "active"
    },
    {
      "id": "sk-pdf",
      "name": "pdf",
      "repo": "anthropics/skills",
      "category": "文档办公",
      "desc": "PDF 全流程：提取文本与表格、表单填写、合并拆分、OCR 与重新排版。",
      "install": "/plugin install document-skills@anthropic-agent-skills",
      "url": "https://github.com/anthropics/skills/tree/main/skills/pdf",
      "sourceUrl": "https://github.com/anthropics/skills",
      "installs": "官方",
      "tier": 100,
      "tags": [
        "PDF",
        "提取",
        "官方"
      ],
      "notes": "2026-11 更新了表单字段与表单处理脚本。",
      "discoveredAt": "2026-11-23",
      "status": "active"
    },
    {
      "id": "sk-pptx",
      "name": "pptx",
      "repo": "anthropics/skills",
      "category": "文档办公",
      "desc": "生成和编辑 PowerPoint：版式、图表、模板复用与幻灯片内容校对。",
      "install": "/plugin install document-skills@anthropic-agent-skills",
      "url": "https://github.com/anthropics/skills/tree/main/skills/pptx",
      "sourceUrl": "https://github.com/anthropics/skills",
      "installs": "官方",
      "tier": 100,
      "tags": [
        "PPT",
        "演示",
        "官方"
      ],
      "notes": "复杂度较高，适合正式汇报材料。",
      "discoveredAt": "2026-11-23",
      "status": "active"
    },
    {
      "id": "sk-xlsx",
      "name": "xlsx",
      "repo": "anthropics/skills",
      "category": "文档办公",
      "desc": "读写 Excel：公式、数据清洗、透视表与可视化，带校验脚本避免破坏工作簿。",
      "install": "/plugin install document-skills@anthropic-agent-skills",
      "url": "https://github.com/anthropics/skills/tree/main/skills/xlsx",
      "sourceUrl": "https://github.com/anthropics/skills",
      "installs": "官方",
      "tier": 100,
      "tags": [
        "Excel",
        "数据",
        "官方"
      ],
      "notes": "处理复杂表格时优先用它，而不是手写 openpyxl。",
      "discoveredAt": "2026-11-23",
      "status": "active"
    },
    {
      "id": "sk-doc-coauthoring",
      "name": "doc-coauthoring",
      "repo": "anthropics/skills",
      "category": "文档办公",
      "desc": "结构化文档共创流程：需求澄清、大纲、分节写作与审阅修订。",
      "install": "/plugin install example-skills@anthropic-agent-skills",
      "url": "https://github.com/anthropics/skills/tree/main/skills/doc-coauthoring",
      "sourceUrl": "https://github.com/anthropics/skills",
      "installs": "官方",
      "tier": 50,
      "tags": [
        "写作",
        "协作",
        "规范"
      ],
      "notes": "适合规格说明书、提案类长文档。",
      "discoveredAt": "2026-11-23",
      "status": "active"
    },
    {
      "id": "sk-lark-doc",
      "name": "lark-doc",
      "repo": "open.feishu.cn",
      "category": "文档办公",
      "desc": "读写飞书云文档：创建、编辑、搜索与知识库归档，官方开放平台 skill。",
      "install": "见 https://open.feishu.cn 开放平台说明",
      "url": "https://www.skills.sh/site/open.feishu.cn/lark-doc",
      "sourceUrl": "https://skills.sh/",
      "installs": "938.9K（skills.sh，2026-11-25）",
      "tier": 50,
      "tags": [
        "飞书",
        "知识库",
        "国产"
      ],
      "notes": "安装量数据来自 skills.sh 榜单。",
      "discoveredAt": "2026-11-23",
      "status": "active"
    },
    {
      "id": "sk-internal-comms",
      "name": "internal-comms",
      "repo": "anthropics/skills",
      "category": "文档办公",
      "desc": "企业内部沟通模板：周报、状态同步、事故复盘与公告撰写。",
      "install": "/plugin install example-skills@anthropic-agent-skills",
      "url": "https://github.com/anthropics/skills/tree/main/skills/internal-comms",
      "sourceUrl": "https://github.com/anthropics/skills",
      "installs": "官方",
      "tier": 20,
      "tags": [
        "周报",
        "沟通",
        "企业"
      ],
      "notes": "示例型 skill，可按团队规范改写。",
      "discoveredAt": "2026-11-23",
      "status": "active"
    },
    {
      "id": "sk-skill-creator",
      "name": "skill-creator",
      "repo": "anthropics/skills",
      "category": "开发工程",
      "desc": "从零创建 Skill：生成 SKILL.md、编写触发描述、跑评测并调优触发率。",
      "install": "/plugin install example-skills@anthropic-agent-skills",
      "url": "https://github.com/anthropics/skills/tree/main/skills/skill-creator",
      "sourceUrl": "https://github.com/anthropics/skills",
      "installs": "官方",
      "tier": 100,
      "tags": [
        "Skill",
        "元技能",
        "评测"
      ],
      "notes": "想自制 skill 时第一个装它。",
      "discoveredAt": "2026-11-23",
      "status": "active"
    },
    {
      "id": "sk-mcp-builder",
      "name": "mcp-builder",
      "repo": "anthropics/skills",
      "category": "开发工程",
      "desc": "指导构建 MCP Server，覆盖 Python / TypeScript 实现、工具设计与调试。",
      "install": "/plugin install example-skills@anthropic-agent-skills",
      "url": "https://github.com/anthropics/skills/tree/main/skills/mcp-builder",
      "sourceUrl": "https://github.com/anthropics/skills",
      "installs": "官方",
      "tier": 100,
      "tags": [
        "MCP",
        "服务端",
        "官方"
      ],
      "notes": "接外部系统时很有用。",
      "discoveredAt": "2026-11-23",
      "status": "active"
    },
    {
      "id": "sk-claude-api",
      "name": "claude-api",
      "repo": "anthropics/skills",
      "category": "开发工程",
      "desc": "Claude API 与 SDK 最新参考：模型选择、工具调用、缓存与定价。",
      "install": "/plugin install example-skills@anthropic-agent-skills",
      "url": "https://github.com/anthropics/skills/tree/main/skills/claude-api",
      "sourceUrl": "https://github.com/anthropics/skills",
      "installs": "官方",
      "tier": 50,
      "tags": [
        "API",
        "SDK",
        "官方文档"
      ],
      "notes": "避免模型用过时知识。",
      "discoveredAt": "2026-11-23",
      "status": "active"
    },
    {
      "id": "sk-superpowers",
      "name": "superpowers",
      "repo": "obra/superpowers",
      "category": "开发工程",
      "desc": "完整开发方法论：头脑风暴→规格→计划→隔离工作树→TDD→ systematic debugging。",
      "install": "/plugin install superpowers@claude-plugins-official",
      "url": "https://github.com/obra/superpowers",
      "sourceUrl": "https://github.com/obra/superpowers",
      "installs": "4.0M（仓库合计）",
      "tier": 100,
      "tags": [
        "TDD",
        "调试",
        "方法论"
      ],
      "notes": "公认最值得装的单一技能包；mrtechking 2026-11-20 统计仓库累计约 400 万安装，注意与 101-skills 等蹭名克隆仓库区分。",
      "discoveredAt": "2026-11-23",
      "status": "active"
    },
    {
      "id": "sk-grill-me",
      "name": "grill-me",
      "repo": "mattpocock/skills",
      "category": "开发工程",
      "desc": "让 AI 连续追问你的方案直到逻辑闭环，专治没想清楚就开写。",
      "install": "npx skills add mattpocock/skills",
      "url": "https://www.skills.sh/mattpocock/skills/grill-me",
      "sourceUrl": "https://skills.sh/",
      "installs": "1.6M",
      "tier": 50,
      "tags": [
        "需求澄清",
        "评审",
        "高安装量"
      ],
      "notes": "skills.sh 总榜第 5。",
      "discoveredAt": "2026-11-23",
      "status": "active"
    },
    {
      "id": "sk-diagnosing-bugs",
      "name": "diagnosing-bugs",
      "repo": "mattpocock/skills",
      "category": "开发工程",
      "desc": "系统化定位 Bug：先复现、再缩小范围、最后改一处验一处，避免乱猜。",
      "install": "npx skills add mattpocock/skills",
      "url": "https://www.skills.sh/mattpocock/skills/diagnosing-bugs",
      "sourceUrl": "https://skills.sh/",
      "installs": "971.1K（skills.sh，2026-11-25）",
      "tier": 50,
      "tags": [
        "Debug",
        "排错"
      ],
      "notes": "适合反复修不好的问题。",
      "discoveredAt": "2026-11-23",
      "status": "active"
    },
    {
      "id": "sk-code-review",
      "name": "code-review",
      "repo": "mattpocock/skills",
      "category": "开发工程",
      "desc": "按严重程度分级的代码审查，给出可执行的修改建议而非泛泛而谈。",
      "install": "npx skills add mattpocock/skills",
      "url": "https://www.skills.sh/mattpocock/skills/code-review",
      "sourceUrl": "https://skills.sh/",
      "installs": "933.4K（skills.sh，2026-11-25）",
      "tier": 50,
      "tags": [
        "CodeReview",
        "质量"
      ],
      "notes": "提交前过一遍。",
      "discoveredAt": "2026-11-23",
      "status": "active"
    },
    {
      "id": "sk-codebase-design",
      "name": "codebase-design",
      "repo": "mattpocock/skills",
      "category": "开发工程",
      "desc": "从现有代码库归纳架构与设计约束，再据此做一致性的改造。",
      "install": "npx skills add mattpocock/skills",
      "url": "https://www.skills.sh/mattpocock/skills/codebase-design",
      "sourceUrl": "https://skills.sh/",
      "installs": "995.3K（skills.sh，2026-11-25）",
      "tier": 50,
      "tags": [
        "架构",
        "重构"
      ],
      "notes": "接手老项目时有用。",
      "discoveredAt": "2026-11-23",
      "status": "active"
    },
    {
      "id": "sk-planning-with-files",
      "name": "planning-with-files",
      "repo": "OthmanAdi/planning-with-files",
      "category": "开发工程",
      "desc": "把长任务计划写成磁盘上的 Markdown，崩溃或上下文重置后也可继续。",
      "install": "见仓库 README",
      "url": "https://github.com/OthmanAdi/planning-with-files",
      "sourceUrl": "https://github.com/OthmanAdi/planning-with-files",
      "installs": "高星",
      "tier": 50,
      "tags": [
        "计划",
        "长任务",
        "抗中断"
      ],
      "notes": "长会话必备。",
      "discoveredAt": "2026-11-23",
      "status": "active"
    },
    {
      "id": "sk-wshobson-agents",
      "name": "wshobson/agents",
      "repo": "wshobson/agents",
      "category": "开发工程",
      "desc": "跨 Claude Code / Codex / Cursor / Copilot 的 agents、skills 与命令插件市场。",
      "install": "/plugin marketplace add wshobson/agents",
      "url": "https://github.com/wshobson/agents",
      "sourceUrl": "https://github.com/wshobson/agents",
      "installs": "高星",
      "tier": 50,
      "tags": [
        "多Agent",
        "插件市场",
        "跨工具"
      ],
      "notes": "按需装单个插件，别全装。",
      "discoveredAt": "2026-11-23",
      "status": "active"
    },
    {
      "id": "sk-ecc",
      "name": "everything-claude-code",
      "repo": "affaan-m/everything-claude-code",
      "category": "开发工程",
      "desc": "大型 Agent harness：skills、instincts、记忆与安全检查，提升长任务稳定性。",
      "install": "见仓库 README",
      "url": "https://github.com/affaan-m/everything-claude-code",
      "sourceUrl": "https://github.com/affaan-m/everything-claude-code",
      "installs": "高星",
      "tier": 20,
      "tags": [
        "记忆",
        "安全",
        "大合集"
      ],
      "notes": "体积大，建议只启用需要的部分。",
      "discoveredAt": "2026-11-23",
      "status": "active"
    },
    {
      "id": "sk-alirezarezvani",
      "name": "claude-skills 400+",
      "repo": "alirezarezvani/claude-skills",
      "category": "开发工程",
      "desc": "400+ skills、120+ agents 与命令的大型库，适合按场景检索。",
      "install": "见仓库 README",
      "url": "https://github.com/alirezarezvani/claude-skills",
      "sourceUrl": "https://github.com/alirezarezvani/claude-skills",
      "installs": "高星",
      "tier": 20,
      "tags": [
        "大合集",
        "Agents"
      ],
      "notes": "作为目录浏览即可，不建议整体安装。",
      "discoveredAt": "2026-11-23",
      "status": "active"
    },
    {
      "id": "sk-frontend-design",
      "name": "frontend-design",
      "repo": "anthropics/skills",
      "category": "前端设计",
      "desc": "给 UI 工作明确设计方向，摆脱千篇一律的模板化审美。",
      "install": "/plugin install example-skills@anthropic-agent-skills",
      "url": "https://github.com/anthropics/skills/tree/main/skills/frontend-design",
      "sourceUrl": "https://skills.sh/",
      "installs": "1.2M（skills.sh 2026-11-24）",
      "tier": 100,
      "tags": [
        "UI",
        "审美",
        "官方"
      ],
      "notes": "skills.sh 全时段榜 frontend-design 安装量由 1.1M 增至 1.2M（2026-11-24 查询），其余字段不变。",
      "discoveredAt": "2026-11-23",
      "status": "active"
    },
    {
      "id": "sk-canvas-design",
      "name": "canvas-design",
      "repo": "anthropics/skills",
      "category": "前端设计",
      "desc": "用设计哲学生成海报、插画等视觉作品，导出 PNG / PDF。",
      "install": "/plugin install example-skills@anthropic-agent-skills",
      "url": "https://github.com/anthropics/skills/tree/main/skills/canvas-design",
      "sourceUrl": "https://github.com/anthropics/skills",
      "installs": "官方",
      "tier": 50,
      "tags": [
        "海报",
        "视觉"
      ],
      "notes": "适合静态视觉稿。",
      "discoveredAt": "2026-11-23",
      "status": "active"
    },
    {
      "id": "sk-theme-factory",
      "name": "theme-factory",
      "repo": "anthropics/skills",
      "category": "前端设计",
      "desc": "快速生成与切换主题配色、字体和视觉风格。",
      "install": "/plugin install example-skills@anthropic-agent-skills",
      "url": "https://github.com/anthropics/skills/tree/main/skills/theme-factory",
      "sourceUrl": "https://github.com/anthropics/skills",
      "installs": "官方",
      "tier": 20,
      "tags": [
        "主题",
        "配色"
      ],
      "notes": "配合前端设计 skill 使用。",
      "discoveredAt": "2026-11-23",
      "status": "active"
    },
    {
      "id": "sk-design-mobile-apps",
      "name": "design-mobile-apps",
      "repo": "designed-by-ai/skills",
      "category": "前端设计",
      "desc": "移动端 App 设计规范：布局、间距、字体配对与平台习惯。",
      "install": "npx skills add designed-by-ai/skills",
      "url": "https://www.skills.sh/designed-by-ai/skills/design-mobile-apps",
      "sourceUrl": "https://skills.sh/",
      "installs": "1.6M",
      "tier": 50,
      "tags": [
        "移动端",
        "设计系统"
      ],
      "notes": "总榜第 6。",
      "discoveredAt": "2026-11-23",
      "status": "active"
    },
    {
      "id": "sk-vercel-react",
      "name": "vercel-react-best-practices",
      "repo": "vercel-labs/agent-skills",
      "category": "前端设计",
      "desc": "Vercel 官方 React / Next.js 最佳实践，减少常见的性能与 hydration 错误。",
      "install": "npx skills add vercel-labs/agent-skills",
      "url": "https://www.skills.sh/vercel-labs/agent-skills/vercel-react-best-practices",
      "sourceUrl": "https://skills.sh/",
      "installs": "930.7K（skills.sh，2026-11-25）",
      "tier": 100,
      "tags": [
        "React",
        "Next.js",
        "官方"
      ],
      "notes": "做 Next.js 项目强烈推荐。",
      "discoveredAt": "2026-11-23",
      "status": "active"
    },
    {
      "id": "sk-ui-ux-pro-max",
      "name": "ui-ux-pro-max",
      "repo": "nextlevelbuilder/ui-ux-pro-max-skill",
      "category": "前端设计",
      "desc": "UI/UX 设计规范合集：风格、配色、字体搭配与交互规则。",
      "install": "见仓库 README",
      "url": "https://github.com/nextlevelbuilder/ui-ux-pro-max-skill",
      "sourceUrl": "https://github.com/nextlevelbuilder/ui-ux-pro-max-skill",
      "installs": "高星",
      "tier": 50,
      "tags": [
        "UI/UX",
        "规范"
      ],
      "notes": "用于生成一致的设计约束。",
      "discoveredAt": "2026-11-23",
      "status": "active"
    },
    {
      "id": "sk-ui-taste",
      "name": "ui-taste",
      "repo": "uizze.sh",
      "category": "前端设计",
      "desc": "判断 UI 好坏的审美准则与实时反馈，避免风格廉价感。",
      "install": "见 https://uizze.sh 说明",
      "url": "https://www.skills.sh/site/uizze.sh/ui-taste",
      "sourceUrl": "https://skills.sh/",
      "installs": "1.1M（skills.sh，2026-11-25）",
      "tier": 20,
      "tags": [
        "审美",
        "UI"
      ],
      "notes": "skills.sh 约 105 万安装，近 24 小时仍新增约 2.9 万；安装前先读 SKILL.md（mcpinstall 尚未审计）。",
      "discoveredAt": "2026-11-23",
      "status": "active"
    },
    {
      "id": "sk-addyosmani",
      "name": "agent-skills (Addy Osmani)",
      "repo": "addyosmani/agent-skills",
      "category": "前端设计",
      "desc": "生产级前端工程技能：性能、可访问性、代码质量与发布流程。",
      "install": "npx skills add addyosmani/agent-skills",
      "url": "https://github.com/addyosmani/agent-skills",
      "sourceUrl": "https://github.com/addyosmani/agent-skills",
      "installs": "高星",
      "tier": 100,
      "tags": [
        "性能",
        "前端",
        "实战"
      ],
      "notes": "作者是 Chrome 性能领域专家，质量稳定。",
      "discoveredAt": "2026-11-23",
      "status": "active"
    },
    {
      "id": "sk-agent-browser",
      "name": "agent-browser",
      "repo": "vercel-labs/agent-browser",
      "category": "浏览器自动化",
      "desc": "给编码 Agent 用的浏览器自动化 CLI：导航、点击、截图、表单填写与信息提取。",
      "install": "npx skills add vercel-labs/agent-browser",
      "url": "https://github.com/vercel-labs/agent-browser",
      "sourceUrl": "https://skills.sh/",
      "installs": "1.7M",
      "tier": 100,
      "tags": [
        "浏览器",
        "自动化",
        "Vercel"
      ],
      "notes": "总榜第 3，网页任务的利器。",
      "discoveredAt": "2026-11-23",
      "status": "active"
    },
    {
      "id": "sk-webapp-testing",
      "name": "webapp-testing",
      "repo": "anthropics/skills",
      "category": "浏览器自动化",
      "desc": "用 Playwright 测试本地 Web 应用，自动截图、抓取控制台日志。",
      "install": "/plugin install example-skills@anthropic-agent-skills",
      "url": "https://github.com/anthropics/skills/tree/main/skills/webapp-testing",
      "sourceUrl": "https://github.com/anthropics/skills",
      "installs": "官方",
      "tier": 50,
      "tags": [
        "Playwright",
        "测试",
        "官方"
      ],
      "notes": "前端开发自测闭环。",
      "discoveredAt": "2026-11-23",
      "status": "active"
    },
    {
      "id": "sk-scientific",
      "name": "claude-scientific-skills",
      "repo": "K-Dense-AI/claude-scientific-skills",
      "category": "数据科研",
      "desc": "177 个科研技能 + 100 多个科学数据库，覆盖生物、化学、医学与药物发现。",
      "install": "见仓库 README",
      "url": "https://github.com/K-Dense-AI/claude-scientific-skills",
      "sourceUrl": "https://github.com/K-Dense-AI/claude-scientific-skills",
      "installs": "高星",
      "tier": 100,
      "tags": [
        "科研",
        "生物医药",
        "数据库"
      ],
      "notes": "科研方向最完整的开放技能库。",
      "discoveredAt": "2026-11-23",
      "status": "active"
    },
    {
      "id": "sk-domain-modeling",
      "name": "domain-modeling",
      "repo": "mattpocock/skills",
      "category": "数据科研",
      "desc": "从业务描述中提炼领域模型、聚合与边界上下文。",
      "install": "npx skills add mattpocock/skills",
      "url": "https://www.skills.sh/mattpocock/skills/domain-modeling",
      "sourceUrl": "https://skills.sh/",
      "installs": "1.0M",
      "tier": 50,
      "tags": [
        "建模",
        "DDD"
      ],
      "notes": "复杂业务系统适用。",
      "discoveredAt": "2026-11-23",
      "status": "active"
    },
    {
      "id": "sk-triage",
      "name": "triage",
      "repo": "mattpocock/skills",
      "category": "数据科研",
      "desc": "对大量问题或需求按优先级分类，先处理影响面最大的。",
      "install": "npx skills add mattpocock/skills",
      "url": "https://www.skills.sh/mattpocock/skills/triage",
      "sourceUrl": "https://skills.sh/",
      "installs": "1.1M",
      "tier": 20,
      "tags": [
        "优先级",
        "分类"
      ],
      "notes": "通用流程技能。",
      "discoveredAt": "2026-11-23",
      "status": "active"
    },
    {
      "id": "sk-marketing-cro",
      "name": "marketingskills CRO",
      "repo": "coreyhaines31/marketingskills",
      "category": "营销增长",
      "desc": "转化率优化：漏斗分析、A/B 测试设计与落地页诊断。",
      "install": "npx skills add coreyhaines31/marketingskills",
      "url": "https://github.com/coreyhaines31/marketingskills",
      "sourceUrl": "https://github.com/coreyhaines31/marketingskills",
      "installs": "高星",
      "tier": 50,
      "tags": [
        "CRO",
        "增长"
      ],
      "notes": "`--skill cro` 可只装这一项。",
      "discoveredAt": "2026-11-23",
      "status": "active"
    },
    {
      "id": "sk-marketing-copy",
      "name": "marketingskills copywriting",
      "repo": "coreyhaines31/marketingskills",
      "category": "营销增长",
      "desc": "文案写作：标题、邮件、广告与产品描述的结构化方法。",
      "install": "npx skills add coreyhaines31/marketingskills --skill copywriting",
      "url": "https://github.com/coreyhaines31/marketingskills",
      "sourceUrl": "https://github.com/coreyhaines31/marketingskills",
      "installs": "高星",
      "tier": 50,
      "tags": [
        "文案",
        "营销"
      ],
      "notes": "同类仓库中口碑较好。",
      "discoveredAt": "2026-11-23",
      "status": "active"
    },
    {
      "id": "sk-marketing-seo",
      "name": "marketingskills SEO",
      "repo": "coreyhaines31/marketingskills",
      "category": "营销增长",
      "desc": "SEO 与内容策略：关键词、站内结构、技术 SEO 检查。",
      "install": "npx skills add coreyhaines31/marketingskills",
      "url": "https://github.com/coreyhaines31/marketingskills",
      "sourceUrl": "https://github.com/coreyhaines31/marketingskills",
      "installs": "高星",
      "tier": 20,
      "tags": [
        "SEO",
        "内容"
      ],
      "notes": "结合分析技能一起用。",
      "discoveredAt": "2026-11-23",
      "status": "active"
    },
    {
      "id": "sk-reddit-automation",
      "name": "reddit-automation",
      "repo": "flowkit-labs/skills",
      "category": "营销增长",
      "desc": "Reddit 社区运营自动化：选题、发帖与评论互动。",
      "install": "npx skills add flowkit-labs/skills",
      "url": "https://www.skills.sh/flowkit-labs/skills/reddit-automation",
      "sourceUrl": "https://skills.sh/",
      "installs": "1.5M",
      "tier": 20,
      "tags": [
        "社区运营",
        "自动化"
      ],
      "notes": "总榜第 8；注意平台规则，避免刷屏。",
      "discoveredAt": "2026-11-23",
      "status": "active"
    },
    {
      "id": "sk-hyperframes",
      "name": "hyperframes",
      "repo": "heygen-com/hyperframes",
      "category": "多媒体创作",
      "desc": "把 HTML 变成视频：时间轴、转场与渲染，Agent 直接产出可发布视频。",
      "install": "npx skills add heygen-com/hyperframes",
      "url": "https://github.com/heygen-com/hyperframes",
      "sourceUrl": "https://skills.sh/",
      "installs": "1.7M（skills.sh，2026-11-25）",
      "tier": 100,
      "tags": [
        "视频",
        "HTML",
        "HeyGen"
      ],
      "notes": "总榜第 4，视频方向首选。",
      "discoveredAt": "2026-11-23",
      "status": "active"
    },
    {
      "id": "sk-hyperframes-cli",
      "name": "hyperframes-cli",
      "repo": "heygen-com/hyperframes",
      "category": "多媒体创作",
      "desc": "hyperframes 命令行版本，便于脚本化批量渲染。",
      "install": "npx skills add heygen-com/hyperframes",
      "url": "https://www.skills.sh/heygen-com/hyperframes/hyperframes-cli",
      "sourceUrl": "https://skills.sh/",
      "installs": "1.7M",
      "tier": 50,
      "tags": [
        "CLI",
        "视频"
      ],
      "notes": "总榜第 2。",
      "discoveredAt": "2026-11-23",
      "status": "active"
    },
    {
      "id": "sk-media-use",
      "name": "media-use",
      "repo": "heygen-com/hyperframes",
      "category": "多媒体创作",
      "desc": "让 Agent 理解并使用媒体素材：图片、音频、视频片段的选取与裁切。",
      "install": "npx skills add heygen-com/hyperframes",
      "url": "https://www.skills.sh/heygen-com/hyperframes/media-use",
      "sourceUrl": "https://skills.sh/",
      "installs": "1.6M（skills.sh，2026-11-25）",
      "tier": 50,
      "tags": [
        "素材",
        "多媒体"
      ],
      "notes": "配合 hyperframes 使用。",
      "discoveredAt": "2026-11-23",
      "status": "active"
    },
    {
      "id": "sk-slack-gif-creator",
      "name": "slack-gif-creator",
      "repo": "anthropics/skills",
      "category": "多媒体创作",
      "desc": "制作 Slack 表情包 GIF：尺寸、帧率与调色板自动处理。",
      "install": "/plugin install example-skills@anthropic-agent-skills",
      "url": "https://github.com/anthropics/skills/tree/main/skills/slack-gif-creator",
      "sourceUrl": "https://github.com/anthropics/skills",
      "installs": "官方",
      "tier": 10,
      "tags": [
        "GIF",
        "趣味"
      ],
      "notes": "场景窄，按需安装。",
      "discoveredAt": "2026-11-23",
      "status": "active"
    },
    {
      "id": "sk-algorithmic-art",
      "name": "algorithmic-art",
      "repo": "anthropics/skills",
      "category": "多媒体创作",
      "desc": "用 p5.js 生成算法艺术，控制随机种子与参数产出可复现作品。",
      "install": "/plugin install example-skills@anthropic-agent-skills",
      "url": "https://github.com/anthropics/skills/tree/main/skills/algorithmic-art",
      "sourceUrl": "https://github.com/anthropics/skills",
      "installs": "官方",
      "tier": 20,
      "tags": [
        "生成艺术",
        "p5.js"
      ],
      "notes": "创意类示例。",
      "discoveredAt": "2026-11-23",
      "status": "active"
    },
    {
      "id": "sk-web-artifacts",
      "name": "web-artifacts-builder",
      "repo": "anthropics/skills",
      "category": "多媒体创作",
      "desc": "构建多文件 React + Tailwind + shadcn/ui 工件，可直接预览交互原型。",
      "install": "/plugin install example-skills@anthropic-agent-skills",
      "url": "https://github.com/anthropics/skills/tree/main/skills/web-artifacts-builder",
      "sourceUrl": "https://github.com/anthropics/skills",
      "installs": "官方",
      "tier": 50,
      "tags": [
        "原型",
        "React",
        "官方"
      ],
      "notes": "做可交互 Demo 很好用。",
      "discoveredAt": "2026-11-23",
      "status": "active"
    },
    {
      "id": "sk-find-skills",
      "name": "find-skills",
      "repo": "vercel-labs/skills",
      "category": "效率记忆",
      "desc": "根据当前任务自动发现并推荐可安装的 Skill，生态 installs 第一。",
      "install": "npx skills add vercel-labs/skills",
      "url": "https://www.skills.sh/vercel-labs/skills/find-skills",
      "sourceUrl": "https://skills.sh/",
      "installs": "4.5M（skills.sh 2026-11-24）",
      "tier": 100,
      "tags": [
        "发现",
        "元技能",
        "必备"
      ],
      "notes": "skills.sh 全时段榜 find-skills 安装量由 4.4M 增至 4.5M（2026-11-24 查询），其余字段不变。",
      "discoveredAt": "2026-11-23",
      "status": "active"
    },
    {
      "id": "sk-claude-mem",
      "name": "claude-mem",
      "repo": "thedotmack/claude-mem",
      "category": "效率记忆",
      "desc": "跨会话记忆：记录 Agent 做过什么，把有用信息带回后续会话，少重复解释。",
      "install": "见仓库 README",
      "url": "https://github.com/thedotmack/claude-mem",
      "sourceUrl": "https://github.com/thedotmack/claude-mem",
      "installs": "高星",
      "tier": 100,
      "tags": [
        "记忆",
        "长会话"
      ],
      "notes": "长期项目强烈推荐。",
      "discoveredAt": "2026-11-23",
      "status": "active"
    },
    {
      "id": "sk-lark-im",
      "name": "lark-im",
      "repo": "open.feishu.cn",
      "category": "效率记忆",
      "desc": "飞书消息与群组操作：读取、发送、汇总聊天内容。",
      "install": "见 https://open.feishu.cn 开放平台说明",
      "url": "https://www.skills.sh/site/open.feishu.cn/lark-im",
      "sourceUrl": "https://skills.sh/",
      "installs": "930.5K",
      "tier": 50,
      "tags": [
        "飞书",
        "IM",
        "国产"
      ],
      "notes": "需要飞书应用权限。",
      "discoveredAt": "2026-11-23",
      "status": "active"
    },
    {
      "id": "sk-lark-vc",
      "name": "lark-vc",
      "repo": "open.feishu.cn",
      "category": "效率记忆",
      "desc": "飞书视频会议与日历：会议安排、纪要整理。",
      "install": "见 https://open.feishu.cn 开放平台说明",
      "url": "https://www.skills.sh/site/open.feishu.cn/lark-vc",
      "sourceUrl": "https://skills.sh/",
      "installs": "929.3K（skills.sh，2026-11-25）",
      "tier": 20,
      "tags": [
        "飞书",
        "会议"
      ],
      "notes": "按实际权限使用。",
      "discoveredAt": "2026-11-23",
      "status": "active"
    },
    {
      "id": "sk-teach",
      "name": "teach",
      "repo": "mattpocock/skills",
      "category": "效率记忆",
      "desc": "把复杂概念拆成可教学的步骤，边讲边验证理解。",
      "install": "npx skills add mattpocock/skills",
      "url": "https://www.skills.sh/mattpocock/skills/teach",
      "sourceUrl": "https://skills.sh/",
      "installs": "987.8K（skills.sh，2026-11-25）",
      "tier": 20,
      "tags": [
        "教学",
        "解释"
      ],
      "notes": "学习类场景可用。",
      "discoveredAt": "2026-11-23",
      "status": "active"
    },
    {
      "id": "sk-discernment",
      "name": "discernment-nudge",
      "repo": "anthropics/skills",
      "category": "效率记忆",
      "desc": "在关键决策前提醒核对依据与不确定性，减少盲目自信。",
      "install": "/plugin install example-skills@anthropic-agent-skills",
      "url": "https://github.com/anthropics/skills/tree/main/skills/discernment-nudge",
      "sourceUrl": "https://github.com/anthropics/skills",
      "installs": "官方",
      "tier": 20,
      "tags": [
        "决策",
        "审慎"
      ],
      "notes": "示例型 skill。",
      "discoveredAt": "2026-11-23",
      "status": "active"
    },
    {
      "id": "sk-trailofbits",
      "name": "trailofbits/skills",
      "repo": "trailofbits/skills",
      "category": "安全审计",
      "desc": "顶级安全公司的漏洞挖掘与代码审计技能集，覆盖智能合约与系统安全。",
      "install": "/plugin marketplace add trailofbits/skills",
      "url": "https://github.com/trailofbits/skills",
      "sourceUrl": "https://github.com/trailofbits/skills",
      "installs": "高星",
      "tier": 100,
      "tags": [
        "安全",
        "审计",
        "漏洞"
      ],
      "notes": "CC BY-SA 4.0，安全方向首选。",
      "discoveredAt": "2026-11-23",
      "status": "active"
    },
    {
      "id": "sk-security-guidance",
      "name": "security-guidance",
      "repo": "anthropics/claude-plugins-official",
      "category": "安全审计",
      "desc": "官方安全检查清单：密钥处理、依赖风险与常见注入防护。",
      "install": "/plugin 中搜索 security-guidance",
      "url": "https://github.com/anthropics/claude-plugins-official",
      "sourceUrl": "https://github.com/anthropics/claude-plugins-official",
      "installs": "官方",
      "tier": 50,
      "tags": [
        "安全",
        "官方"
      ],
      "notes": "官方市场已经内置。",
      "discoveredAt": "2026-11-23",
      "status": "active"
    },
    {
      "id": "sk-awesome-claude",
      "name": "awesome-claude-skills",
      "repo": "ComposioHQ/awesome-claude-skills",
      "category": "资源目录",
      "desc": "最大的 Claude Skills 目录之一，按用途索引社区技能、工具与教程。",
      "install": "仅作目录浏览",
      "url": "https://github.com/ComposioHQ/awesome-claude-skills",
      "sourceUrl": "https://github.com/ComposioHQ/awesome-claude-skills",
      "installs": "目录",
      "tier": 100,
      "tags": [
        "目录",
        "发现"
      ],
      "notes": "它是列表不是技能包，别指望一条命令装完；GitHub 约 7.9 万 Star（2026-11 统计）。",
      "discoveredAt": "2026-11-23",
      "status": "active"
    },
    {
      "id": "sk-awesome-claude-code",
      "name": "awesome-claude-code",
      "repo": "hesreallyhim/awesome-claude-code",
      "category": "资源目录",
      "desc": "精选 skills、hooks、插件与开发工具的清单，质量筛选相对严格。",
      "install": "仅作目录浏览",
      "url": "https://github.com/hesreallyhim/awesome-claude-code",
      "sourceUrl": "https://github.com/hesreallyhim/awesome-claude-code",
      "installs": "目录",
      "tier": 50,
      "tags": [
        "目录",
        "Hooks"
      ],
      "notes": "适合按需求找插件。",
      "discoveredAt": "2026-11-23",
      "status": "active"
    },
    {
      "id": "sk-skills-sh",
      "name": "skills.sh 排行榜",
      "repo": "skills.sh",
      "category": "资源目录",
      "desc": "开放 Skill 生态的官方安装量榜单与目录，支持 npx skills add 一键安装。",
      "install": "npx skills add <owner/repo>",
      "url": "https://skills.sh/",
      "sourceUrl": "https://skills.sh/",
      "installs": "榜单",
      "tier": 100,
      "tags": [
        "榜单",
        "安装器",
        "生态"
      ],
      "notes": "判断技能是否好用，优先看这里的真实安装量。",
      "discoveredAt": "2026-11-23",
      "status": "active"
    },
    {
      "id": "sk-official-market",
      "name": "claude-plugins-official",
      "repo": "anthropics/claude-plugins-official",
      "category": "资源目录",
      "desc": "Anthropic 官方插件市场，300+ 插件，含 code-review、feature-dev、commit-commands 等。",
      "install": "/plugin（交互界面 Discover 标签）",
      "url": "https://github.com/anthropics/claude-plugins-official",
      "sourceUrl": "https://github.com/anthropics/claude-plugins-official",
      "installs": "官方",
      "tier": 100,
      "tags": [
        "官方市场",
        "插件"
      ],
      "notes": "首次进入 Claude Code 会自动添加。",
      "discoveredAt": "2026-11-23",
      "status": "active"
    },
    {
      "id": "sk-tdd",
      "name": "tdd",
      "repo": "mattpocock/skills",
      "category": "开发工程",
      "desc": "红-绿-重构的测试驱动开发流程，一次只做一个纵向切片，避免先写实现再补测试。",
      "install": "npx skills add mattpocock/skills",
      "url": "https://www.skills.sh/mattpocock/skills/tdd",
      "sourceUrl": "https://paywithlocus.com/guides/best-claude-code-skills",
      "installs": "1.2M",
      "tier": 50,
      "tags": [
        "TDD",
        "测试",
        "高安装量"
      ],
      "notes": "skills.sh 安装量榜头部；与 systematic-debugging 搭配使用。",
      "discoveredAt": "2026-11-23",
      "status": "active"
    },
    {
      "id": "sk-improve-codebase-architecture",
      "name": "improve-codebase-architecture",
      "repo": "mattpocock/skills",
      "category": "开发工程",
      "desc": "扫描代码库发现更深层的模块划分问题，输出 HTML 报告，适合接手老项目时找重构切入点。",
      "install": "npx skills add mattpocock/skills",
      "url": "https://www.skills.sh/mattpocock/skills/improve-codebase-architecture",
      "sourceUrl": "https://paywithlocus.com/guides/best-claude-code-skills",
      "installs": "1.2M",
      "tier": 50,
      "tags": [
        "架构",
        "重构",
        "代码库"
      ],
      "notes": "与已有 codebase-design 互补：这个偏扫描报告，那个偏归纳约束。",
      "discoveredAt": "2026-11-23",
      "status": "active"
    },
    {
      "id": "sk-systematic-debugging",
      "name": "systematic-debugging",
      "repo": "obra/superpowers",
      "category": "开发工程",
      "desc": "系统化根因调试：先复现、看真实日志与堆栈、提出单一可证伪假设，再做最小修补。",
      "install": "/plugin install superpowers@claude-plugins-official",
      "url": "https://www.skills.sh/obra/superpowers/systematic-debugging",
      "sourceUrl": "https://paywithlocus.com/guides/best-claude-code-skills",
      "installs": "326.8K",
      "tier": 50,
      "tags": [
        "Debug",
        "根因分析",
        "方法论"
      ],
      "notes": "superpowers 官方方法论的核心技能之一。",
      "discoveredAt": "2026-11-23",
      "status": "active"
    },
    {
      "id": "sk-supabase-postgres",
      "name": "supabase-postgres-best-practices",
      "repo": "supabase/agent-skills",
      "category": "开发工程",
      "desc": "Supabase 官方 Postgres 最佳实践：表设计、索引、RLS 与慢查询排查，减少常见性能坑。",
      "install": "npx skills add supabase/agent-skills",
      "url": "https://www.skills.sh/supabase/agent-skills/supabase-postgres-best-practices",
      "sourceUrl": "https://paywithlocus.com/guides/best-claude-code-skills",
      "installs": "479.9K",
      "tier": 100,
      "tags": [
        "Supabase",
        "Postgres",
        "官方"
      ],
      "notes": "数据库方向来自厂商官方仓库，优先于泛泛的 SQL 提示词。",
      "discoveredAt": "2026-11-23",
      "status": "active"
    },
    {
      "id": "sk-vercel-web-design",
      "name": "web-design-guidelines",
      "repo": "vercel-labs/agent-skills",
      "category": "前端设计",
      "desc": "Vercel Labs 的网页设计规范：间距、排版、微交互与响应式约束，配合浏览器验证形成闭环。",
      "install": "npx skills add vercel-labs/agent-skills",
      "url": "https://www.skills.sh/vercel-labs/agent-skills/web-design-guidelines",
      "sourceUrl": "https://www.toolworthy.ai/blog/best-ai-agent-skills",
      "installs": "高安装量",
      "tier": 100,
      "tags": [
        "Web设计",
        "Vercel",
        "响应式"
      ],
      "notes": "和 agent-browser 一起用，能自查 375px 下的溢出问题。",
      "discoveredAt": "2026-11-23",
      "status": "active"
    },
    {
      "id": "sk-gws-drive",
      "name": "Gws Drive",
      "repo": "googleworkspace/cli",
      "category": "效率记忆",
      "desc": "让 Claude 通过 gws CLI 操作 Google Drive：搜索、上传、复制、导出文件及管理共享网盘。",
      "install": "npx skills add googleworkspace/cli --skill gws-drive",
      "url": "https://github.com/googleworkspace/cli/tree/main/skills/gws-drive",
      "sourceUrl": "https://github.com/googleworkspace/cli",
      "installs": "77,944（skills.sh，2026-11-19；Snyk Warn）",
      "tier": 100,
      "tags": [
        "Google Drive",
        "云盘",
        "效率"
      ],
      "notes": "2026-11-24 收录：collectivebrain 于 2026-11-19 新增的 Gws Drive 技能。",
      "discoveredAt": "2026-11-24",
      "status": "active"
    },
    {
      "id": "sk-darwin",
      "name": "darwin-skill",
      "repo": "alchaincyf/darwin-skill",
      "category": "开发工程",
      "desc": "指向已有技能，对其进行评分、改写、在真实任务上运行，仅当盲审更偏好结果时才保留修改，评分更低则通过 git 回滚。",
      "install": "npx skills add alchaincyf/darwin-skill",
      "url": "https://github.com/alchaincyf/darwin-skill",
      "sourceUrl": "https://library.mikesailab.com/library/News/Bookmarks/Agent-Toolkit/agent-toolkit-all-bookmarks.html",
      "installs": "MIT 开源",
      "tier": 100,
      "tags": [
        "技能优化",
        "Agent",
        "盲审"
      ],
      "notes": "2026-11-24 收录：darwin-skill v3.0 改为对技能实际产出评分，README 含中文与英文。",
      "discoveredAt": "2026-11-24",
      "status": "active"
    },
    {
      "id": "sk-openfilm",
      "name": "OpenFilm",
      "repo": "openfilm/openfilm",
      "category": "多媒体创作",
      "desc": "为编码 Agent 提供可看见、可手动干预的视频编辑器：Agent 找素材、剪镜头、加字幕，你指向任意片段即可手动修改。",
      "install": "从社区窗口添加技能与插件文件夹",
      "url": "https://github.com/openfilm/openfilm",
      "sourceUrl": "https://library.mikesailab.com/library/News/Bookmarks/Agent-Toolkit/agent-toolkit-all-bookmarks.html",
      "installs": "MIT 开源",
      "tier": 100,
      "tags": [
        "视频",
        "Agent",
        "编辑器"
      ],
      "notes": "2026-11-24 收录：OpenFilm 于 2026-10-04 启动，技能+插件生态，影片即含 film.html 的文件夹。",
      "discoveredAt": "2026-11-24",
      "status": "active"
    },
    {
      "id": "sk-video-shotcraft",
      "name": "video-shotcraft",
      "repo": "Vincentwei1021/video-shotcraft",
      "category": "多媒体创作",
      "desc": "为 Claude Code / Codex 提供 152 个电影级运镜配方 + 200 个运动预览，在 Remotion 中剪出节拍同步的宣传片，而非凭感觉猜运镜语言。",
      "install": "克隆仓库并软链到 ~/.claude/skills/video-shotcraft",
      "url": "https://github.com/Vincentwei1021/video-shotcraft",
      "sourceUrl": "https://library.mikesailab.com/library/News/Bookmarks/Agent-Toolkit/agent-toolkit-all-bookmarks.html",
      "installs": "6K+ stars",
      "tier": 100,
      "tags": [
        "视频",
        "运镜",
        "Remotion"
      ],
      "notes": "2026-11-24 收录：video-shotcraft 五周即破 6000 stars，2026-07-19 上线，提交频繁。",
      "discoveredAt": "2026-11-24",
      "status": "active"
    },
    {
      "id": "sk-prisma-skills",
      "name": "Prisma Skills",
      "repo": "prisma/skills",
      "category": "开发工程",
      "desc": "Prisma 官方数据库技能包，覆盖 ORM 7/8 的 CLI、Client API、版本迁移、Postgres 配置与 Compute 部署，指导 Agent 正确完成数据库开发与上线。",
      "install": "npx skills add prisma/skills",
      "url": "https://github.com/prisma/skills",
      "sourceUrl": "https://github.com/prisma/skills",
      "installs": "446.6K（prisma-client-api，skills.sh 2026-11-24）",
      "tier": 100,
      "tags": [
        "Prisma",
        "数据库",
        "ORM",
        "官方"
      ],
      "notes": "Prisma 官方仓库，MIT 许可；含 9 个技能及 SKILL.md/README。skills.sh 上 prisma-client-api 446.6K、prisma-database-setup 444.5K、prisma-upgrade-v7 430.5K 安装量（2026-11-24 查询）；README 已对齐 Prisma ORM 8，维护活跃。",
      "discoveredAt": "2026-11-24",
      "status": "active"
    },
    {
      "id": "sk-ms-azure-skills",
      "name": "Azure Skills Plugin",
      "repo": "microsoft/azure-skills",
      "category": "开发工程",
      "desc": "微软官方 Azure 技能插件，25 个技能覆盖部署、验证、排障、成本优化、企业管理与 AI 服务，配合 Azure MCP Server 让 Agent 真实操作云资源。",
      "install": "npx skills add microsoft/azure-skills（详见仓库 README）",
      "url": "https://github.com/microsoft/azure-skills",
      "sourceUrl": "https://github.com/microsoft/azure-skills",
      "installs": "779.7K（microsoft-foundry，skills.sh 2026-11-24）",
      "tier": 100,
      "tags": [
        "Azure",
        "云服务",
        "微软",
        "DevOps"
      ],
      "notes": "微软官方仓库，README 明确标注 Official agent plugin；含 25 个 Azure 技能与 MCP 配置，README 详列安装方式。skills.sh 上 microsoft-foundry 779.7K、azure-compute 722.2K、azure-cloud-migrate 715.0K 安装量（2026-11-24 查询）。与现有 sk-azure-validate（单一技能）互补，此为官方完整插件包。",
      "discoveredAt": "2026-11-24",
      "status": "active"
    },
    {
      "id": "sk-deepmind-science",
      "name": "DeepMind Science Skills",
      "repo": "google-deepmind/science-skills",
      "category": "数据科研",
      "desc": "Google DeepMind 科研技能集，覆盖基因组学、结构生物学与文献检索，整合 AlphaGenome、AFDB、UniProt 等 30+ 数据库，提升科研工作流准确度与 token 效率。",
      "install": "npx skills add google-deepmind/science-skills",
      "url": "https://github.com/google-deepmind/science-skills",
      "sourceUrl": "https://github.com/google-deepmind/science-skills",
      "installs": "官方（skills.sh 未公开单列总安装量）",
      "tier": 100,
      "tags": [
        "科研",
        "DeepMind",
        "生物信息",
        "知识库"
      ],
      "notes": "仓库位于 google-deepmind 官方组织下，Apache-2.0 / CC-BY 许可；2026-11-10 发布 v1.4.0，近 30 天有更新。每个技能含 SKILL.md、scripts 与 references；部分技能（如 AlphaGenome）需 API Key，但 ClinVar、OpenAlex 等可免 Key 使用。README 含标准免责声明「not an official Google product」。",
      "discoveredAt": "2026-11-24",
      "status": "active"
    },
    {
      "id": "sk-skillspector",
      "name": "SkillSpector",
      "repo": "NVIDIA/SkillSpector",
      "category": "安全审计",
      "desc": "NVIDIA 官方 Agent Skill 安全扫描器，安装前检测提示注入、数据外泄、权限提升、供应链与 MCP 工具投毒等 71 种风险模式，输出 0-100 风险评分和安装建议。",
      "install": "uv tool install --python 3.13 git+https://github.com/NVIDIA/SkillSpector.git",
      "url": "https://github.com/NVIDIA/SkillSpector",
      "sourceUrl": "https://github.com/NVIDIA/SkillSpector",
      "installs": "官方（NVIDIA Verified Skills 管线组件）",
      "tier": 100,
      "tags": [
        "安全审计",
        "NVIDIA",
        "技能扫描",
        "提示注入"
      ],
      "notes": "NVIDIA 官方仓库，2026-11-22 仍有提交（近 30 天活跃）；README 完整，含 skills/skill-inspector 技能目录。可扫描 Git 仓库/URL/zip/目录，输出 SAFE / CAUTION / DO_NOT_INSTALL 建议，亦支持 MCP Server 模式（scan_skill）。属于对现有安全审计技能的实用补充。",
      "discoveredAt": "2026-11-24",
      "status": "active"
    },
    {
      "id": "sk-obsidian-skills",
      "name": "Obsidian Skills",
      "repo": "obsidianmd/obsidian-skills",
      "category": "效率记忆",
      "desc": "Obsidian 官方知识管理技能集，让 Agent 操作 Markdown 双链、Bases 数据库、JSON Canvas 白板、Obsidian CLI 与网页内容提取，覆盖笔记创建到同步发布全流程。",
      "install": "npx skills add https://github.com/obsidianmd/obsidian-skills",
      "url": "https://github.com/obsidianmd/obsidian-skills",
      "sourceUrl": "https://github.com/obsidianmd/obsidian-skills",
      "installs": "官方（104 次提交，2026-11 活跃）",
      "tier": 100,
      "tags": [
        "Obsidian",
        "知识管理",
        "笔记",
        "官方"
      ],
      "notes": "Obsidian 官方组织仓库，2026-11-20 仍有提交；含 7 个技能（obsidian-markdown / obsidian-bases / json-canvas / obsidian-cli / obsidian-headless / defuddle / knap），各带 SKILL.md 与 README。支持 Claude Code、Codex、Cursor、Gemini CLI 安装。",
      "discoveredAt": "2026-11-24",
      "status": "active"
    },
    {
      "id": "sk-caveman",
      "name": "Caveman",
      "repo": "juliusbrussee/caveman",
      "category": "效率记忆",
      "desc": "高人气 token 节省技能与本地 CLI，让 Agent 用简短表达回答、压缩日志/JSON/测试输出、复用重复脚本，并支持 token 用量统计与上下文压缩。",
      "install": "npx skills add juliusbrussee/caveman -g",
      "url": "https://github.com/juliusbrussee/caveman",
      "sourceUrl": "https://github.com/juliusbrussee/caveman",
      "installs": "644.7K（caveman，skills.sh 2026-11-24）",
      "tier": 50,
      "tags": [
        "token优化",
        "效率",
        "上下文压缩",
        "CLI"
      ],
      "notes": "skills.sh 显示 caveman 644.7K、caveman-compress 447.1K 安装量（2026-11-24 查询）；README 完整，含 /caveman、/caveman-commit、/caveman-review、/caveman-compress 等技能与命令；2026-11 仍活跃维护。中文 awesome-Claude-code 榜单亦有收录，口碑良好。",
      "discoveredAt": "2026-11-24",
      "status": "active"
    },
    {
      "id": "sk-taste-skill",
      "name": "Taste Skill",
      "repo": "Leonxlnx/taste-skill",
      "category": "前端设计",
      "desc": "设计品味技能，指导 Agent 用真实照片、统一设计系统、字化作图与浏览器校验构建 figma.com/x.ai 级别官网，避免千篇一律的 AI 模板页。",
      "install": "npx skills add https://github.com/Leonxlnx/taste-skill",
      "url": "https://github.com/Leonxlnx/taste-skill",
      "sourceUrl": "https://github.com/Leonxlnx/taste-skill",
      "installs": "819.0K（design-taste-frontend，skills.sh 2026-11-24）",
      "tier": 50,
      "tags": [
        "前端设计",
        "设计品味",
        "官网",
        "审美"
      ],
      "notes": "skills.sh 显示 design-taste-frontend 819.0K 安装量（2026-11-24 查询）；v2.5.1 主技能 2026-11-07 提交、README 2026-11-22 更新，近 30 天活跃；MIT 许可，含 SKILL.md 与浏览器校验脚本。中文 awesome-Claude-code 榜单以「Taste Skill」收录。",
      "discoveredAt": "2026-11-24",
      "status": "active"
    },
    {
      "id": "sk-baoyu-skills",
      "name": "baoyu-skills（宝玉技能集）",
      "repo": "JimLiu/baoyu-skills",
      "category": "营销增长",
      "desc": "宝玉分享的中文内容创作技能集，20+ 技能覆盖小红书卡片、公众号/微博/X 发布、信息图、漫画、幻灯片、封面图与翻译总结，适配中文内容生态。",
      "install": "npx skills add JimLiu/baoyu-skills",
      "url": "https://github.com/JimLiu/baoyu-skills",
      "sourceUrl": "https://github.com/JimLiu/baoyu-skills",
      "installs": "27.7K stars（GStars.dev，2026-11-22）",
      "tier": 50,
      "tags": [
        "中文社区",
        "内容创作",
        "小红书",
        "公众号"
      ],
      "notes": "中文社区高口碑项目，MIT 许可；2026-11-20 仍有提交并新增播客总结技能；含 README.zh.md 与各技能 SKILL.md。skill-cn、sofarbot 等中文站点收录。注意：danger-gemini-web、danger-x-to-markdown 等技能使用非官方 API，仓库已标注风险提示，需自行评估。",
      "discoveredAt": "2026-11-24",
      "status": "active"
    },
    {
      "id": "sk-agent-skills-anthropic",
      "name": "agent-skills-anthropic",
      "repo": "anthropics/skills",
      "category": "资源目录",
      "desc": "Anthropic 官方 Agent Skills 仓库：内置文档办公四件套（docx/pdf/pptx/xlsx）、canvas-design、webapp-testing、mcp-builder、skill-creator 等 19+ 官方技能与 skill-creator 空白模板，并指向 agentskills.io 开放规范；Skill 格式已成跨平台开放标准。",
      "install": "/plugin marketplace add anthropics/skills；再 /plugin install document-skills@anthropic-agent-skills 或 example-skills@anthropic-agent-skills；或 npx skills add anthropics/skills@<skill名>",
      "url": "https://github.com/anthropics/skills",
      "sourceUrl": "http://mp.weixin.qq.com/s?__biz=MzkzMTU5NDA3Mg==&mid=2247487233&idx=1&sn=0182404805c428906fcb641bde10c164&chksm=c342f6733e90c7b274354d17d56699924c6ee7914f11b0755b740db1acbb91ebb98ae23fecc9#rd",
      "installs": "186K stars",
      "tier": 100,
      "tags": [
        "官方",
        "Claude Code",
        "文档办公",
        "MCP"
      ],
      "notes": "2026-11-25 查询：仓库约 186K stars / 22K forks，4 天前仍有 mcp-builder 等技能更新；安装后自然语言即可触发对应技能。",
      "discoveredAt": "2026-11-25",
      "status": "active"
    },
    {
      "id": "sk-unslop",
      "name": "unslop",
      "repo": "heydamir/unslop",
      "category": "前端设计",
      "desc": "Claude 技能：把 vibecoding 产出的「AI 味」界面改造成有设计感的界面，去 AI 味。",
      "install": "在 Claude Code 中通过 skills 安装 heydamir/unslop，或复制技能目录到 ~/.claude/skills/",
      "url": "https://github.com/heydamir/unslop",
      "sourceUrl": "https://findarepo.com/skills/claude/claude-code/",
      "installs": "21.2K stars",
      "tier": 50,
      "tags": [
        "UI设计",
        "去AI味",
        "Claude Code"
      ],
      "notes": "JavaScript，21,228 stars（2026-11-24 API 核验），CC-BY-4.0 许可。",
      "discoveredAt": "2026-11-25",
      "status": "active"
    },
    {
      "id": "sk-lemo-opuscar",
      "name": "lemo-opuscar",
      "repo": "lemomo-ai/lemo-opuscar",
      "category": "多媒体创作",
      "desc": "用代码制作的电影风格工具箱（Claude Code 技能）：99 种现成风格，并可创建自定义风格。",
      "install": "在 Claude Code 中通过 skills 安装 lemomo-ai/lemo-opuscar，或复制技能目录到 ~/.claude/skills/",
      "url": "https://github.com/lemomo-ai/lemo-opuscar",
      "sourceUrl": "https://findarepo.com/skills/claude/claude-code/",
      "installs": "20,692 stars（2026-11-25）",
      "tier": 50,
      "tags": [
        "视频风格",
        "电影风格",
        "Claude Code"
      ],
      "notes": "JavaScript，约 16,000 stars（第三方榜单，2026-11 报道）。",
      "discoveredAt": "2026-11-25",
      "status": "active"
    },
    {
      "id": "sk-nestjs-agent-skills",
      "name": "nestjs-agent-skills",
      "repo": "nestjs/agent-skills",
      "category": "开发工程",
      "desc": "NestJS 框架专属的 Agent 技能，辅助高效编写规范的 Node.js 代码。",
      "install": "在 Claude Code 中通过 skills 安装 nestjs/agent-skills，或复制技能目录到 ~/.claude/skills/",
      "url": "https://github.com/nestjs/agent-skills",
      "sourceUrl": "https://agentskillshub.top/daily/2026-11-21",
      "installs": "160 stars（2026-11-25）",
      "tier": 50,
      "tags": [
        "NestJS",
        "Node.js",
        "后端"
      ],
      "notes": "2026-11-21 新收录，NestJS 官方组织的 Agent 技能仓库（新项目，星数较少但为官方出品）。",
      "discoveredAt": "2026-11-25",
      "status": "active"
    },
    {
      "id": "sk-claude-best-practices-zh",
      "name": "claude-best-practices-zh",
      "repo": "yibie/claude-best-practices-zh",
      "category": "资源目录",
      "desc": "Claude 官方最佳实践全集中文译文：173 篇中文译文 + 100 个概念的 LLM Wiki 知识网络 + 交互式知识图谱/思维导图。",
      "install": "克隆仓库作为知识库，或在 Claude Code 中作为参考资料引用",
      "url": "https://github.com/yibie/claude-best-practices-zh",
      "sourceUrl": "https://agentskillshub.top/daily/2026-11-21",
      "installs": "113 stars（2026-11-25）",
      "tier": 20,
      "tags": [
        "中文",
        "最佳实践",
        "知识库",
        "Claude"
      ],
      "notes": "2026-11-21 新收录，中文 Claude 最佳实践知识库，适合系统检索学习。",
      "discoveredAt": "2026-11-25",
      "status": "active"
    },
    {
      "id": "sk-academy-guide",
      "name": "academy-guide",
      "repo": "anthropics/skills",
      "category": "效率记忆",
      "desc": "用户询问 Claude / AI 用法时自动匹配并推荐官方 Academy 课程、教程与用例。",
      "install": "npx skills add https://github.com/anthropics/skills --skill academy-guide",
      "url": "https://github.com/anthropics/skills/tree/main/skills/academy-guide",
      "sourceUrl": "https://skills.sh/",
      "installs": "19,920（skills.sh，2026-11-25）",
      "tier": 100,
      "tags": [
        "官方",
        "学习指南",
        "效率"
      ],
      "notes": "2026-08 由 claude-academy-guide 改名，周安装量 1,125→1,928；SKILL.md 与仓库 200，最近提交 2026-11-16。",
      "discoveredAt": "2026-11-25",
      "status": "active"
    },
    {
      "id": "sk-brand-guidelines",
      "name": "brand-guidelines",
      "repo": "anthropics/skills",
      "category": "前端设计",
      "desc": "把官方配色与字体规范套用到视觉产物，并按背景自动选色保证可读性。",
      "install": "npx skills add https://github.com/anthropics/skills --skill brand-guidelines",
      "url": "https://github.com/anthropics/skills/tree/main/skills/brand-guidelines",
      "sourceUrl": "https://skills.sh/",
      "installs": "123,626（skills.sh，2026-11-25）",
      "tier": 100,
      "tags": [
        "官方",
        "品牌规范",
        "排版"
      ],
      "notes": "官方仓库现存但未收录；SKILL.md 200，仓库近 30 天活跃。",
      "discoveredAt": "2026-11-25",
      "status": "active"
    },
    {
      "id": "sk-grill-with-docs",
      "name": "grill-with-docs",
      "repo": "mattpocock/skills",
      "category": "开发工程",
      "desc": "深度需求访谈同时构建领域模型、更新 GLOSSARY.md 与 ADR，解决 Agent 与真实需求错位。",
      "install": "npx skills add https://github.com/mattpocock/skills --skill grill-with-docs",
      "url": "https://github.com/mattpocock/skills/tree/main/skills/engineering/grill-with-docs",
      "sourceUrl": "https://www.skills.sh/mattpocock/skills/grill-with-docs",
      "installs": "1,371,384（skills.sh，2026-11-25）",
      "tier": 50,
      "tags": [
        "需求澄清",
        "领域模型",
        "工程"
      ],
      "notes": "README 列为核心技能；SKILL.md raw 200，仓库 push 于 2026-11-24。",
      "discoveredAt": "2026-11-25",
      "status": "active"
    },
    {
      "id": "sk-prototype",
      "name": "prototype",
      "repo": "mattpocock/skills",
      "category": "开发工程",
      "desc": "用可丢弃 HTML 原型或同路由多版本 UI 快速回答设计问题，避免过早投入正式实现。",
      "install": "npx skills add https://github.com/mattpocock/skills --skill prototype",
      "url": "https://github.com/mattpocock/skills/tree/main/skills/engineering/prototype",
      "sourceUrl": "https://www.skills.sh/mattpocock/skills/prototype",
      "installs": "1,117,401（skills.sh，2026-11-25）",
      "tier": 50,
      "tags": [
        "原型",
        "UI验证",
        "工程"
      ],
      "notes": "SKILL.md raw 200，仓库 push 于 2026-11-24；与现有条目无主题重复。",
      "discoveredAt": "2026-11-25",
      "status": "active"
    },
    {
      "id": "sk-fireworks-tech-graph",
      "name": "fireworks-tech-graph",
      "repo": "yizhiyanhua-ai/fireworks-tech-graph",
      "category": "文档办公",
      "desc": "用自然语言生成架构图、数据流图、时序图、C4 与云部署图，中文输入友好。",
      "install": "npx skills add https://github.com/yizhiyanhua-ai/fireworks-tech-graph --skill fireworks-tech-graph",
      "url": "https://github.com/yizhiyanhua-ai/fireworks-tech-graph",
      "sourceUrl": "https://github.com/yizhiyanhua-ai/fireworks-tech-graph",
      "installs": "18,504（skills.sh，2026-11-25）",
      "tier": 50,
      "tags": [
        "技术图表",
        "中文",
        "文档"
      ],
      "notes": "GitHub 仓库与根目录 SKILL.md 均 200，最近提交 2026-10-21；中文合集与 skills.sh Hot 榜双来源推荐。",
      "discoveredAt": "2026-11-25",
      "status": "active"
    }
  ],
  "tutorials": [
    {
      "id": "tu-hf-llm",
      "title": "Hugging Face LLM Course",
      "category": "大模型应用与开发",
      "org": "Hugging Face",
      "level": "入门→进阶",
      "format": "文档课程",
      "lang": "英文",
      "duration": "约 20 章",
      "desc": "免费无广告的 Transformer 主线课程，2025 年扩容后新增 LoRA/QLoRA 参数高效微调、RAG 与 GRPO 强化学习推理模型训练，约每周 6-8 小时，需 Python 基础。",
      "url": "https://huggingface.co/learn/llm-course",
      "sourceUrl": "https://www.peterindia.net/GenerativeAICoursesAndCertifications.html",
      "tags": [
        "Transformer",
        "微调",
        "开源模型"
      ],
      "tier": 100,
      "discoveredAt": "2026-11-23",
      "status": "active"
    },
    {
      "id": "tu-ms-genai",
      "title": "Generative AI for Beginners",
      "category": "大模型应用与开发",
      "org": "Microsoft",
      "level": "入门",
      "format": "文档课程",
      "lang": "英文",
      "duration": "21 课",
      "desc": "GitHub 上免费的代码优先课程，从提示词、API 调用一路做到聊天应用与搜索应用，适合有基础 Python 的人。",
      "url": "https://github.com/microsoft/generative-ai-for-beginners",
      "sourceUrl": "https://offladder.com/answers/free-ai-courses",
      "tags": [
        "入门",
        "Python",
        "实战"
      ],
      "tier": 100,
      "discoveredAt": "2026-11-23",
      "status": "active"
    },
    {
      "id": "tu-ms-agents",
      "title": "AI Agents for Beginners",
      "category": "大模型应用与开发",
      "org": "Microsoft",
      "level": "进阶",
      "format": "文档课程",
      "lang": "英文",
      "duration": "12-15 课",
      "desc": "MIT 许可的免费 Agent 课程，覆盖工具使用、规划、多智能体、记忆、Agentic RAG、安全与生产部署。",
      "url": "https://github.com/microsoft/ai-agents-for-beginners",
      "sourceUrl": "https://samaustinai.com/best-courses-ai-agents-llm-application-development",
      "tags": [
        "Agent",
        "多智能体",
        "MIT"
      ],
      "tier": 100,
      "discoveredAt": "2026-11-23",
      "status": "active"
    },
    {
      "id": "tu-anthropic-prompt",
      "title": "Prompt Engineering Interactive Tutorial",
      "category": "大模型应用与开发",
      "org": "Anthropic",
      "level": "入门",
      "format": "交互实验室",
      "lang": "英文",
      "duration": "可在浏览器完成",
      "desc": "提示词工程互动练习，边写边看模型输出变化，附官方 best practices，适合零基础建立提示词直觉。",
      "url": "https://github.com/anthropics/prompt-eng-interactive-tutorial",
      "sourceUrl": "https://offladder.com/answers/free-ai-courses",
      "tags": [
        "提示词",
        "互动练习",
        "官方"
      ],
      "tier": 100,
      "discoveredAt": "2026-11-23",
      "status": "active"
    },
    {
      "id": "tu-anthropic-courses",
      "title": "Anthropic 官方课程",
      "category": "大模型应用与开发",
      "org": "Anthropic",
      "level": "入门→高级",
      "format": "Notebook 课程",
      "lang": "英文",
      "duration": "多门短课",
      "desc": "Claude API、真实场景提示词、评测与工具调用的官方 notebook 课程，代码可直接跑。",
      "url": "https://github.com/anthropics/courses",
      "sourceUrl": "https://offladder.com/answers/free-ai-courses",
      "tags": [
        "Claude API",
        "评测",
        "工具调用"
      ],
      "tier": 100,
      "discoveredAt": "2026-11-23",
      "status": "active"
    },
    {
      "id": "tu-claude-cookbooks",
      "title": "Claude Cookbooks",
      "category": "大模型应用与开发",
      "org": "Anthropic",
      "level": "进阶",
      "format": "代码食谱",
      "lang": "英文",
      "duration": "按章节",
      "desc": "MIT 许可的构建食谱，含 RAG、工具调用、评测等目录，适合把官方模式直接搬到自己的项目里。",
      "url": "https://github.com/anthropics/claude-cookbooks",
      "sourceUrl": "https://agilefever.com/free-llm-courses-2026",
      "tags": [
        "RAG",
        "代码实例",
        "MIT"
      ],
      "tier": 50,
      "discoveredAt": "2026-11-23",
      "status": "active"
    },
    {
      "id": "tu-openai-cookbook",
      "title": "OpenAI Cookbook",
      "category": "大模型应用与开发",
      "org": "OpenAI",
      "level": "进阶",
      "format": "代码食谱",
      "lang": "英文",
      "duration": "持续更新",
      "desc": "数百个可运行示例：语义缓存、pgvector 混合检索、自动化评测流水线，是生产级 LLM 应用的参考实现。",
      "url": "https://github.com/openai/openai-cookbook",
      "sourceUrl": "https://aiagentskit.com/blog/anthropic-academy-vs-openai-academy-free-ai-courses",
      "tags": [
        "生产实践",
        "评测",
        "检索"
      ],
      "tier": 100,
      "discoveredAt": "2026-11-23",
      "status": "active"
    },
    {
      "id": "tu-prompt-guide",
      "title": "Prompt Engineering Guide",
      "category": "大模型应用与开发",
      "org": "DAIR.AI",
      "level": "入门→进阶",
      "format": "在线手册",
      "lang": "英文",
      "duration": "持续更新",
      "desc": " prompt 技术百科全书，按技术分类给出示例与论文，遇到具体提示词问题时查它最快。",
      "url": "https://www.promptingguide.ai/",
      "sourceUrl": "https://offladder.com/answers/free-ai-courses",
      "tags": [
        "提示词",
        "手册",
        "速查"
      ],
      "tier": 100,
      "discoveredAt": "2026-11-23",
      "status": "active"
    },
    {
      "id": "tu-langchain-academy",
      "title": "LangChain Academy",
      "category": "大模型应用与开发",
      "org": "LangChain",
      "level": "进阶",
      "format": "视频课程",
      "lang": "英文",
      "duration": "LangGraph 入门约 6 小时",
      "desc": "官方免费课程，LangGraph 入门 55 课，覆盖状态、记忆、human-in-the-loop、并行、子图与部署。",
      "url": "https://academy.langchain.com/",
      "sourceUrl": "https://www.jahanzaib.ai/blog/langgraph-tutorial-build-production-ai-agents",
      "tags": [
        "LangGraph",
        "框架",
        "官方"
      ],
      "tier": 50,
      "discoveredAt": "2026-11-23",
      "status": "active"
    },
    {
      "id": "tu-karpathy-nn",
      "title": "Neural Networks: Zero to Hero",
      "category": "大模型应用与开发",
      "org": "Andrej Karpathy",
      "level": "高级",
      "format": "视频系列",
      "lang": "英文",
      "duration": "系列视频",
      "desc": "从反向传播手写神经网络，一路搭出小型 GPT，是理解底层原理公认最好的免费视频课，需要 Python 与数学基础。",
      "url": "https://karpathy.ai/zero-to-hero.html",
      "sourceUrl": "https://offladder.com/answers/free-ai-courses",
      "tags": [
        "原理",
        "GPT",
        "手写实现"
      ],
      "tier": 100,
      "discoveredAt": "2026-11-23",
      "status": "active"
    },
    {
      "id": "tu-cs336",
      "title": "Stanford CS336 语言模型从零构建",
      "category": "大模型应用与开发",
      "org": "Stanford University",
      "level": "高级",
      "format": "高校课程",
      "lang": "英文",
      "duration": "一学期",
      "desc": "从零构建语言模型的大学课程，公开讲义与作业，覆盖数据、架构、训练、评测与规模化。",
      "url": "https://stanford-cs336.github.io/",
      "sourceUrl": "https://www.peterindia.net/GenerativeAICoursesAndCertifications.html",
      "tags": [
        "名校课程",
        "训练",
        "大模型"
      ],
      "tier": 100,
      "discoveredAt": "2026-11-23",
      "status": "active"
    },
    {
      "id": "tu-cohere-llmu",
      "title": "Cohere LLM University",
      "category": "大模型应用与开发",
      "org": "Cohere",
      "level": "入门→进阶",
      "format": "文档课程",
      "lang": "英文",
      "duration": "多门短课",
      "desc": "免费课程，讲清 LLM、embeddings 与 RAG，适合想从概念快速走到应用的人。",
      "url": "https://cohere.com/llmu",
      "sourceUrl": "https://www.peterindia.net/GenerativeAICoursesAndCertifications.html",
      "tags": [
        "Embedding",
        "RAG",
        "免费"
      ],
      "tier": 50,
      "discoveredAt": "2026-11-23",
      "status": "active"
    },
    {
      "id": "tu-dlai-short",
      "title": "DeepLearning.AI 短课程库",
      "category": "大模型应用与开发",
      "org": "DeepLearning.AI",
      "level": "入门→进阶",
      "format": "视频课程",
      "lang": "英文",
      "duration": "每课约 1 小时",
      "desc": "Andrew Ng 团队的短课系列，与 OpenAI、Anthropic 等联合出品，Prompt、RAG、Agentic AI 等主题均可免费旁听。",
      "url": "https://www.deeplearning.ai/short-courses/",
      "sourceUrl": "https://offladder.com/answers/free-ai-courses",
      "tags": [
        "短课",
        "旁听免费",
        "实战"
      ],
      "tier": 100,
      "discoveredAt": "2026-11-23",
      "status": "active"
    },
    {
      "id": "tu-comfyui-cn",
      "title": "ComfyUI 中文教程",
      "category": "AIGC创意与视觉设计",
      "org": "Codingkit",
      "level": "入门→进阶",
      "format": "文档教程",
      "lang": "中文",
      "duration": "完整系列",
      "desc": "从安装、节点连线到 LoRA、ControlNet、Flux 与图生视频，中文写得清楚，还标注了显存与硬盘要求。",
      "url": "https://codingkit.com/zh/comfyui",
      "sourceUrl": "https://codingkit.com/zh/comfyui",
      "tags": [
        "ComfyUI",
        "本地部署",
        "工作流"
      ],
      "tier": 100,
      "discoveredAt": "2026-11-23",
      "status": "active"
    },
    {
      "id": "tu-hf-diffusion",
      "title": "Hugging Face Diffusion Models Course",
      "category": "AIGC创意与视觉设计",
      "org": "Hugging Face",
      "level": "入门→进阶",
      "format": "文档课程",
      "lang": "英文",
      "duration": "多章",
      "desc": "用 diffusers 库系统学习扩散模型原理与图像生成实战，官方免费课程。",
      "url": "https://huggingface.co/learn/diffusion-course",
      "sourceUrl": "https://www.peterindia.net/GenerativeAICoursesAndCertifications.html",
      "tags": [
        "扩散模型",
        "diffusers",
        "官方"
      ],
      "tier": 100,
      "discoveredAt": "2026-11-23",
      "status": "active"
    },
    {
      "id": "tu-secourses",
      "title": "SECourses AI 生成艺术全栈教程库",
      "category": "AIGC创意与视觉设计",
      "org": "Furkan Gozukara",
      "level": "入门→高级",
      "format": "开源教程库",
      "lang": "英文",
      "duration": "长期更新",
      "desc": "覆盖 SD/SDXL/FLUX、LoRA/DreamBooth 微调、ComfyUI、ControlNet、音乐与视频生成，附 Colab  Notebook。",
      "url": "https://github.com/FurkanGozukara/Stable-Diffusion",
      "sourceUrl": "https://www.pomoai.com/hubs/FurkanGozukara/Stable-Diffusion",
      "tags": [
        "Stable Diffusion",
        "LoRA",
        "Colab"
      ],
      "tier": 50,
      "discoveredAt": "2026-11-23",
      "status": "active"
    },
    {
      "id": "tu-midjourney-docs",
      "title": "Midjourney 官方文档",
      "category": "AIGC创意与视觉设计",
      "org": "Midjourney",
      "level": "入门→进阶",
      "format": "官方文档",
      "lang": "英文",
      "duration": "按主题",
      "desc": "参数、风格、垫图与 V6 用法的第一手说明，想稳定出图绕不开它。",
      "url": "https://docs.midjourney.com/",
      "sourceUrl": "https://docs.midjourney.com/",
      "tags": [
        "Midjourney",
        "提示词",
        "出图"
      ],
      "tier": 100,
      "discoveredAt": "2026-11-23",
      "status": "active"
    },
    {
      "id": "tu-runway-academy",
      "title": "Runway Academy",
      "category": "AIGC创意与视觉设计",
      "org": "Runway",
      "level": "入门→进阶",
      "format": "视频课程",
      "lang": "英文",
      "duration": "多门短课",
      "desc": "AI 视频生成官方教程，覆盖文生视频、图生视频、运动笔刷与镜头控制。",
      "url": "https://academy.runwayml.com/",
      "sourceUrl": "https://academy.runwayml.com/",
      "tags": [
        "AI视频",
        "Runway",
        "官方"
      ],
      "tier": 50,
      "discoveredAt": "2026-11-23",
      "status": "active"
    },
    {
      "id": "tu-learnprompt",
      "title": "LearnPrompt 中文 AI 实战课",
      "category": "AIGC创意与视觉设计",
      "org": "LearnPrompt",
      "level": "入门→进阶",
      "format": "开源课程",
      "lang": "中文",
      "duration": "体系化长课",
      "desc": "永久免费开源的中文实战课程，覆盖 Midjourney、Runway、Stable Diffusion、数字人、声音音乐生成以及 Agent 与 RAG。",
      "url": "https://github.com/LearnPrompt/LearnPrompt",
      "sourceUrl": "https://zendot.org/posts/learnprompt-learnprompt",
      "tags": [
        "中文",
        "体系课",
        "多工具"
      ],
      "tier": 100,
      "discoveredAt": "2026-11-23",
      "status": "active"
    },
    {
      "id": "tu-comfyui-docs",
      "title": "ComfyUI 官方文档",
      "category": "AIGC创意与视觉设计",
      "org": "ComfyUI",
      "level": "进阶",
      "format": "官方文档",
      "lang": "英文",
      "duration": "按主题",
      "desc": "节点、API、自定义节点与模型支持的最新权威说明，跟随版本更新最快。",
      "url": "https://docs.comfy.org/",
      "sourceUrl": "https://docs.comfy.org/",
      "tags": [
        "ComfyUI",
        "API",
        "节点"
      ],
      "tier": 100,
      "discoveredAt": "2026-11-23",
      "status": "active"
    },
    {
      "id": "tu-sd-webui",
      "title": "Stable Diffusion WebUI 使用文档",
      "category": "AIGC创意与视觉设计",
      "org": "AUTOMATIC1111",
      "level": "入门→进阶",
      "format": "开源文档",
      "lang": "英文",
      "duration": "按主题",
      "desc": "最流行的 SD 本地界面文档，文生图、图生图、局部重绘与扩展安装都在这里查。",
      "url": "https://github.com/AUTOMATIC1111/stable-diffusion-webui",
      "sourceUrl": "https://github.com/AUTOMATIC1111/stable-diffusion-webui",
      "tags": [
        "Stable Diffusion",
        "WebUI",
        "本地"
      ],
      "tier": 50,
      "discoveredAt": "2026-11-23",
      "status": "active"
    },
    {
      "id": "tu-comfyui-video",
      "title": "ComfyUI 图生视频实操指南",
      "category": "AIGC创意与视觉设计",
      "org": "CSDN 社区",
      "level": "进阶",
      "format": "实战文章",
      "lang": "中文",
      "duration": "单篇长文",
      "desc": "从本地部署到 AnimateDiff/SVD 图生视频工作流，含显存优化、国内源加速与黑图排查。",
      "url": "https://blog.csdn.net/weixin_29061531/article/details/169762305",
      "sourceUrl": "https://blog.csdn.net/weixin_29061531/article/details/169762305",
      "tags": [
        "图生视频",
        "AnimateDiff",
        "踩坑"
      ],
      "tier": 20,
      "discoveredAt": "2026-11-23",
      "status": "active"
    },
    {
      "id": "tu-lerobot",
      "title": "LeRobot 机器人学习框架",
      "category": "具身智能与硬件AI",
      "org": "Hugging Face",
      "level": "进阶",
      "format": "开源教程",
      "lang": "英文",
      "duration": "按文档",
      "desc": "Apache 2.0 的机器人学习库，提供数据集、模仿学习策略与真机/仿真接入示例，是入门具身智能的主流工具链。",
      "url": "https://github.com/huggingface/lerobot",
      "sourceUrl": "https://edwartens.com/free/physical-ai-lerobot-robot-learning",
      "tags": [
        "LeRobot",
        "模仿学习",
        "机器人"
      ],
      "tier": 100,
      "discoveredAt": "2026-11-23",
      "status": "active"
    },
    {
      "id": "tu-dive-embodied",
      "title": "Dive into Embodied AI",
      "category": "具身智能与硬件AI",
      "org": "Datawhale",
      "level": "入门→进阶",
      "format": "开源中文课程",
      "lang": "中文",
      "duration": "体系化长课",
      "desc": "从零搭建具身智能体：强化学习、VLA、世界模型、控制、感知与仿真，含 MuJoCo、Isaac Sim、ROS2、SO-101 实战（Alpha 版，部分章节待补）。",
      "url": "https://github.com/datawhalechina/dive-into-embodied-ai",
      "sourceUrl": "https://hysenlabs.com/projects/datawhalechina-dive-into-embodied-ai",
      "tags": [
        "中文",
        "VLA",
        "仿真"
      ],
      "tier": 100,
      "discoveredAt": "2026-11-23",
      "status": "active"
    },
    {
      "id": "tu-seed-physical-ai",
      "title": "Seeed Physical AI 全栈课程",
      "category": "具身智能与硬件AI",
      "org": "Seeed Studio",
      "level": "入门→高级",
      "format": "文档课程",
      "lang": "英文",
      "duration": "每周更新",
      "desc": "Quick Start → LeRobot → Pinocchio → 视觉抓取 → ROS 2 → Isaac Sim → GR00T → 具身 Agent 的零到英雄路径，全部开源免费。",
      "url": "https://wiki.seeedstudio.com/rebot_physical_ai_course_introduction/",
      "sourceUrl": "https://www.seeedstudio.com/blog/2026/09/30/roscon-global-2026-toronto-wrap-upiros-2026-pittsburgh-underway",
      "tags": [
        "VLA",
        "机械臂",
        "Sim2Real"
      ],
      "tier": 100,
      "discoveredAt": "2026-11-23",
      "status": "active"
    },
    {
      "id": "tu-isaac-sim",
      "title": "NVIDIA Isaac Sim 官方文档",
      "category": "具身智能与硬件AI",
      "org": "NVIDIA",
      "level": "进阶",
      "format": "官方文档",
      "lang": "英文",
      "duration": "按主题",
      "desc": "机器人仿真官方文档，含传感器仿真、强化学习、合成数据生成与 Sim2Real 流程。",
      "url": "https://docs.nvidia.com/isaac/sim/latest/",
      "sourceUrl": "https://docs.nvidia.com/isaac/sim/latest/",
      "tags": [
        "仿真",
        "Isaac Sim",
        "合成数据"
      ],
      "tier": 100,
      "discoveredAt": "2026-11-23",
      "status": "active"
    },
    {
      "id": "tu-ros2",
      "title": "ROS 2 官方教程",
      "category": "具身智能与硬件AI",
      "org": "Open Robotics",
      "level": "入门→进阶",
      "format": "官方文档",
      "lang": "英文",
      "duration": "完整系列",
      "desc": "从安装、节点、话题、服务到导航与仿真的官方教程，做机器人开发的通用底座。",
      "url": "https://docs.ros.org/en/rolling/Tutorials.html",
      "sourceUrl": "https://docs.ros.org/en/rolling/Tutorials.html",
      "tags": [
        "ROS 2",
        "机器人",
        "基础"
      ],
      "tier": 100,
      "discoveredAt": "2026-11-23",
      "status": "active"
    },
    {
      "id": "tu-edwartens-lerobot",
      "title": "Physical AI: Teach a Robot Arm with LeRobot",
      "category": "具身智能与硬件AI",
      "org": "EDWartens",
      "level": "进阶",
      "format": "视频课程",
      "lang": "英文",
      "duration": "约 17.5 小时",
      "desc": "13 个模块，用示教训练机械臂：LeRobot 数据集、ACT 策略、遥操作与评估，全部模块都有纯仿真路径，用免费 Colab GPU 即可。",
      "url": "https://edwartens.com/free/physical-ai-lerobot-robot-learning",
      "sourceUrl": "https://edwartens.com/free/physical-ai-lerobot-robot-learning",
      "tags": [
        "示教学习",
        "机械臂",
        "免费"
      ],
      "tier": 50,
      "discoveredAt": "2026-11-23",
      "status": "active"
    },
    {
      "id": "tu-mujoco",
      "title": "MuJoCo 官方文档",
      "category": "具身智能与硬件AI",
      "org": "MuJoCo",
      "level": "进阶",
      "format": "官方文档",
      "lang": "英文",
      "duration": "按主题",
      "desc": "物理仿真引擎文档，机器人控制、强化学习与抓取任务的常用仿真环境。",
      "url": "https://mujoco.readthedocs.io/",
      "sourceUrl": "https://mujoco.readthedocs.io/",
      "tags": [
        "MuJoCo",
        "物理仿真",
        "控制"
      ],
      "tier": 50,
      "discoveredAt": "2026-11-23",
      "status": "active"
    },
    {
      "id": "tu-openvla",
      "title": "OpenVLA 开源视觉语言动作模型",
      "category": "具身智能与硬件AI",
      "org": "OpenVLA Team",
      "level": "高级",
      "format": "开源项目",
      "lang": "英文",
      "duration": "按文档",
      "desc": "开源 VLA 模型的微调与部署教程，配合 LeRobot 与仿真基准做机器人策略复现。",
      "url": "https://github.com/openvla/openvla",
      "sourceUrl": "https://damodev.csdn.net/6aa36d7b48977663a5dea588.html",
      "tags": [
        "VLA",
        "微调",
        "开源模型"
      ],
      "tier": 50,
      "discoveredAt": "2026-11-23",
      "status": "active"
    },
    {
      "id": "tu-tflm",
      "title": "TensorFlow Lite Micro 微控制器教程",
      "category": "具身智能与硬件AI",
      "org": "TensorFlow",
      "level": "进阶",
      "format": "官方文档",
      "lang": "英文",
      "duration": "多章",
      "desc": "在 MCU 和边缘硬件上跑 TinyML 的官方教程，从模型量化到部署，适合硬件 AI 落地。",
      "url": "https://www.tensorflow.org/lite/microcontrollers",
      "sourceUrl": "https://www.tensorflow.org/lite/microcontrollers",
      "tags": [
        "TinyML",
        "边缘设备",
        "MCU"
      ],
      "tier": 20,
      "discoveredAt": "2026-11-23",
      "status": "active"
    },
    {
      "id": "tu-n8n-docs",
      "title": "n8n 官方文档与模板",
      "category": "AI工作流与自动化",
      "org": "n8n",
      "level": "入门→进阶",
      "format": "官方文档",
      "lang": "英文",
      "duration": "按主题",
      "desc": "触发器、节点、AI Agent、错误处理和自托管部署的完整说明，还有大量可直接导入的工作流模板。",
      "url": "https://docs.n8n.io/",
      "sourceUrl": "https://docs.n8n.io/",
      "tags": [
        "n8n",
        "自动化",
        "模板"
      ],
      "tier": 100,
      "discoveredAt": "2026-11-23",
      "status": "active"
    },
    {
      "id": "tu-langgraph-docs",
      "title": "LangGraph 官方学习路径",
      "category": "AI工作流与自动化",
      "org": "LangChain",
      "level": "进阶",
      "format": "官方文档",
      "lang": "英文",
      "duration": "按主题",
      "desc": "从 overview、quickstart 到状态、节点、边、reducer、checkpoint 与 human-in-the-loop 的官方学习顺序。",
      "url": "https://docs.langchain.com/oss/python/langgraph/overview",
      "sourceUrl": "https://www.jahanzaib.ai/blog/langgraph-tutorial-build-production-ai-agents",
      "tags": [
        "LangGraph",
        "状态机",
        "持久化"
      ],
      "tier": 100,
      "discoveredAt": "2026-11-23",
      "status": "active"
    },
    {
      "id": "tu-langgraph-course",
      "title": "Introduction to LangGraph",
      "category": "AI工作流与自动化",
      "org": "LangChain Academy",
      "level": "进阶",
      "format": "视频课程",
      "lang": "英文",
      "duration": "55 课 / 约 6 小时",
      "desc": "免费官方课，从简单图、链与路由讲到状态、记忆、人工审批、并行、子图、长期记忆与部署。",
      "url": "https://academy.langchain.com/courses/intro-to-langgraph",
      "sourceUrl": "https://www.jahanzaib.ai/blog/langgraph-tutorial-build-production-ai-agents",
      "tags": [
        "LangGraph",
        "免费课",
        "审批流"
      ],
      "tier": 100,
      "discoveredAt": "2026-11-23",
      "status": "active"
    },
    {
      "id": "tu-dify",
      "title": "Dify 工作流与 Agent 文档",
      "category": "AI工作流与自动化",
      "org": "Dify",
      "level": "入门→进阶",
      "format": "官方文档",
      "lang": "中文",
      "duration": "按主题",
      "desc": "国产开源 LLM 应用开发平台文档，工作流编排、Agent 节点、RAG 与工具权限配置都有中文说明。",
      "url": "https://docs.dify.ai/",
      "sourceUrl": "https://docs.dify.ai/",
      "tags": [
        "Dify",
        "中文",
        "Agent节点"
      ],
      "tier": 100,
      "discoveredAt": "2026-11-23",
      "status": "active"
    },
    {
      "id": "tu-coze",
      "title": "扣子 Coze 工作流文档",
      "category": "AI工作流与自动化",
      "org": "字节跳动",
      "level": "入门",
      "format": "官方文档",
      "lang": "中文",
      "duration": "按主题",
      "desc": "零基础搭多角色工作流的中文官方教程，节点、变量、试运行与发布都有图示说明。",
      "url": "https://www.coze.cn/open/docs",
      "sourceUrl": "https://m.jiaoben.net/wz/769658.html",
      "tags": [
        "扣子",
        "中文",
        "零代码"
      ],
      "tier": 50,
      "discoveredAt": "2026-11-23",
      "status": "active"
    },
    {
      "id": "tu-hf-agents",
      "title": "Hugging Face AI Agents Course",
      "category": "AI工作流与自动化",
      "org": "Hugging Face",
      "level": "入门→进阶",
      "format": "文档课程",
      "lang": "英文",
      "duration": "4-5 单元",
      "desc": "免费且完成后有证书，覆盖 ReAct、工具调用、smolagents、LangGraph、LlamaIndex、Agentic RAG 与 GAIA 评测。",
      "url": "https://huggingface.co/learn/agents-course",
      "sourceUrl": "https://samaustinai.com/best-courses-ai-agents-llm-application-development",
      "tags": [
        "Agent",
        "证书",
        "多框架"
      ],
      "tier": 100,
      "discoveredAt": "2026-11-23",
      "status": "active"
    },
    {
      "id": "tu-crewai",
      "title": "CrewAI 官方文档",
      "category": "AI工作流与自动化",
      "org": "CrewAI",
      "level": "进阶",
      "format": "官方文档",
      "lang": "英文",
      "duration": "按主题",
      "desc": "角色化多智能体协作框架文档，从 crew、task、tool 到流程与记忆，可与短课程配合学习。",
      "url": "https://docs.crewai.com/",
      "sourceUrl": "https://samaustinai.com/best-courses-ai-agents-llm-application-development",
      "tags": [
        "多智能体",
        "角色协作",
        "框架"
      ],
      "tier": 50,
      "discoveredAt": "2026-11-23",
      "status": "active"
    },
    {
      "id": "tu-autogen",
      "title": "Microsoft AutoGen 教程",
      "category": "AI工作流与自动化",
      "org": "Microsoft",
      "level": "进阶",
      "format": "官方文档",
      "lang": "英文",
      "duration": "按主题",
      "desc": "多 Agent 对话与任务编排框架，含 AgentTool、GroupChat 与分布式运行时示例。",
      "url": "https://microsoft.github.io/autogen/",
      "sourceUrl": "https://samaustinai.com/best-courses-ai-agents-llm-application-development",
      "tags": [
        "AutoGen",
        "多Agent",
        "微软"
      ],
      "tier": 50,
      "discoveredAt": "2026-11-23",
      "status": "active"
    },
    {
      "id": "tu-n8n-practice",
      "title": "n8n AI 工作流免费实战",
      "category": "AI工作流与自动化",
      "org": "Stepthrough",
      "level": "入门",
      "format": "交互实验室",
      "lang": "英文",
      "duration": "约 12 分钟",
      "desc": "在模拟环境里搭一条真实流程：表单触发 → AI 分类并起草回复 → 条件分支，不用碰真实账号，适合第一次上手。",
      "url": "https://learn.ynteractive.com/content/ai-workflow-automation-for-beginners",
      "sourceUrl": "https://learn.ynteractive.com/content/ai-workflow-automation-for-beginners",
      "tags": [
        "n8n",
        "交互练习",
        "免费"
      ],
      "tier": 50,
      "discoveredAt": "2026-11-23",
      "status": "active"
    },
    {
      "id": "tu-owasp-llm",
      "title": "OWASP Top 10 for LLM Applications",
      "category": "AI安全、治理与伦理",
      "org": "OWASP",
      "level": "入门→进阶",
      "format": "安全指南",
      "lang": "英文",
      "duration": "10 大风险",
      "desc": "大模型应用十大安全风险（OWASP 已于 2026 年 9 月发布 2026 版，并同步推出 Agent 控制标准），含提示注入、数据泄露、供应链等，附防御建议，是所有 LLM 应用必读的清单。",
      "url": "https://owasp.org/www-project-top-10-for-large-language-model-applications/",
      "sourceUrl": "https://genai.owasp.org/2026/09/01/owasp-genai-security-project-unveils-2026-top-10-for-llm-applications-new-agent-control-standard-and-sponsors-as-community-tops-30000-members/",
      "tags": [
        "OWASP",
        "提示注入",
        "合规"
      ],
      "tier": 100,
      "discoveredAt": "2026-11-23",
      "status": "active"
    },
    {
      "id": "tu-nist-rmf",
      "title": "NIST AI Risk Management Framework",
      "category": "AI安全、治理与伦理",
      "org": "NIST",
      "level": "进阶",
      "format": "官方框架",
      "lang": "英文",
      "duration": "框架 + 手册",
      "desc": "美国国家标准与技术研究院的 AI 风险管理框架，给出 GOVERN/MAP/MEASURE/MANAGE 四步与可操作实践。",
      "url": "https://www.nist.gov/itl/ai-risk-management-framework",
      "sourceUrl": "https://www.nist.gov/itl/ai-risk-management-framework",
      "tags": [
        "NIST",
        "风险管理",
        "治理"
      ],
      "tier": 100,
      "discoveredAt": "2026-11-23",
      "status": "active"
    },
    {
      "id": "tu-aisf",
      "title": "AI Safety Fundamentals",
      "category": "AI安全、治理与伦理",
      "org": "BlueDot Impact",
      "level": "入门→进阶",
      "format": "在线课程",
      "lang": "英文",
      "duration": "数周",
      "desc": "系统学习 AI 安全与对齐的免费课程，涵盖对齐技术、治理政策与前沿风险，社区讨论质量高。",
      "url": "https://aisafetyfundamentals.com/",
      "sourceUrl": "https://aisafetyfundamentals.com/",
      "tags": [
        "AI对齐",
        "前沿风险",
        "社区"
      ],
      "tier": 100,
      "discoveredAt": "2026-11-23",
      "status": "active"
    },
    {
      "id": "tu-smartedu-ethics",
      "title": "人工智能伦理与安全",
      "category": "AI安全、治理与伦理",
      "org": "浙江大学 / 国家高等教育智慧教育平台",
      "level": "入门",
      "format": "高校课程",
      "lang": "中文",
      "duration": "24 周",
      "desc": "国家高等教育智慧教育平台在开的免费慕课（学银在线，浙江大学），聚焦 AI 伦理原则、价值观、隐私与公平，以及对抗样本、数据投毒/后门与模型窃取攻击防御，2026-11-18 更新。",
      "url": "https://higher.smartedu.cn/course/67d2146b225d72705ec8127c",
      "sourceUrl": "https://higher.smartedu.cn/course/67d2146b225d72705ec8127c",
      "tags": [
        "中文",
        "慕课",
        "攻防"
      ],
      "tier": 100,
      "discoveredAt": "2026-11-23",
      "status": "active"
    },
    {
      "id": "tu-buaa-security",
      "title": "人工智能安全与伦理（北航）",
      "category": "AI安全、治理与伦理",
      "org": "北京航空航天大学",
      "level": "进阶",
      "format": "高校课程",
      "lang": "中文",
      "duration": "25 周",
      "desc": "北航与阿里专家合讲的在开课程（学堂在线，2026-07-23 至 2027-01-12，25 周，5 万+人选课），覆盖对抗攻防、后门攻防、公平性、可解释性、隐私保护及企业伦理职责，配章节测验。",
      "url": "https://higher.smartedu.cn/h5/course/69b1ea5c95df98bb27c125ee",
      "sourceUrl": "https://higher.smartedu.cn/h5/course/69b1ea5c95df98bb27c125ee",
      "tags": [
        "中文",
        "高校",
        "产学结合"
      ],
      "tier": 50,
      "discoveredAt": "2026-11-23",
      "status": "active"
    },
    {
      "id": "tu-sjtu-security",
      "title": "人工智能安全（上海交大）",
      "category": "AI安全、治理与伦理",
      "org": "上海交通大学",
      "level": "进阶",
      "format": "高校课程",
      "lang": "中文",
      "duration": "21 周",
      "desc": "系统讲 AI 安全原理：伦理与公平、可解释性、隐私、对抗攻击检测与防御、鲁棒性，并读前沿论文。",
      "url": "https://cnmooc.sjtu.cn/portal/course/6990/28526.mooc",
      "sourceUrl": "https://cnmooc.sjtu.cn/portal/course/6990/28526.mooc",
      "tags": [
        "中文",
        "名校",
        "鲁棒性"
      ],
      "tier": 50,
      "discoveredAt": "2026-11-23",
      "status": "active"
    },
    {
      "id": "tu-ai-safety-zh",
      "title": "AI 工程 from Scratch：伦理、安全与对齐",
      "category": "AI安全、治理与伦理",
      "org": "开源中文课程",
      "level": "进阶",
      "format": "开源课程",
      "lang": "中文",
      "duration": "30 节",
      "desc": "中文安全实战课，按「原理→攻击→防御→治理」讲 RLHF、奖励黑客、越狱、红队工具 Garak/PyRIT、模型卡与双用途风险。",
      "url": "https://blog.gitcode.com/bcbd2b82c3fc474cd7e1652a390198bb.html",
      "sourceUrl": "https://blog.gitcode.com/bcbd2b82c3fc474cd7e1652a390198bb.html",
      "tags": [
        "中文",
        "红队",
        "对齐"
      ],
      "tier": 50,
      "discoveredAt": "2026-11-23",
      "status": "active"
    },
    {
      "id": "tu-google-saif",
      "title": "Google Secure AI Framework (SAIF)",
      "category": "AI安全、治理与伦理",
      "org": "Google",
      "level": "进阶",
      "format": "官方框架",
      "lang": "英文",
      "duration": "框架文档",
      "desc": "Google 的 AI 安全框架，覆盖数据、模型、应用、基础设施与监控，附风险评估和控件清单。",
      "url": "https://safety.google/cybersecurity-advancements/saif/",
      "sourceUrl": "https://safety.google/cybersecurity-advancements/saif/",
      "tags": [
        "安全框架",
        "Google",
        "企业实践"
      ],
      "tier": 50,
      "discoveredAt": "2026-11-23",
      "status": "active"
    },
    {
      "id": "tu-eu-ai-act",
      "title": "EU AI Act 法规指南",
      "category": "AI安全、治理与伦理",
      "org": "EU AI Act",
      "level": "进阶",
      "format": "法规解读",
      "lang": "英文",
      "duration": "按条款",
      "desc": "欧盟人工智能法案全文与解读，按风险等级划分义务，做合规与产品分级时可直接查条款。",
      "url": "https://artificialintelligenceact.eu/",
      "sourceUrl": "https://artificialintelligenceact.eu/",
      "tags": [
        "合规",
        "欧盟",
        "风险分级"
      ],
      "tier": 20,
      "discoveredAt": "2026-11-23",
      "status": "active"
    },
    {
      "id": "tu-genai-everyone",
      "title": "Generative AI for Everyone",
      "category": "AI商业战略与产品",
      "org": "DeepLearning.AI",
      "level": "入门",
      "format": "视频课程",
      "lang": "英文",
      "duration": "数小时",
      "desc": "Andrew Ng 面向管理者与非技术人员的生成式 AI 导论，讲清能做什么、不能做什么，以及在哪里能创造业务价值。",
      "url": "https://www.deeplearning.ai/courses/generative-ai-for-everyone/",
      "sourceUrl": "https://learnetto.com/ai-guides/best-ai-resources-for-ai-strategy",
      "tags": [
        "管理者",
        "战略",
        "免费旁听"
      ],
      "tier": 100,
      "discoveredAt": "2026-11-23",
      "status": "active"
    },
    {
      "id": "tu-lenny",
      "title": "Lenny's Newsletter",
      "category": "AI商业战略与产品",
      "org": "Lenny Rachitsky",
      "level": "进阶",
      "format": "专栏 / 播客",
      "lang": "英文",
      "duration": "持续更新",
      "desc": "前 Airbnb 增长负责人写的产品实战专栏，AI 产品案例、增长与北极星指标等内容质量很高，大量文章免费。",
      "url": "https://www.lennysnewsletter.com/",
      "sourceUrl": "https://learnetto.com/ai-guides/best-ai-resources-for-ai-strategy",
      "tags": [
        "产品增长",
        "案例",
        "播客"
      ],
      "tier": 100,
      "discoveredAt": "2026-11-23",
      "status": "active"
    },
    {
      "id": "tu-one-useful-thing",
      "title": "One Useful Thing",
      "category": "AI商业战略与产品",
      "org": "Ethan Mollick",
      "level": "入门→进阶",
      "format": "专栏",
      "lang": "英文",
      "duration": "持续更新",
      "desc": "沃顿商学院教授的 AI 写作，把 AI 当作协作者而不是工具，讲组织采纳、工作方式变化与实际效果。",
      "url": "https://www.oneusefulthing.org/",
      "sourceUrl": "https://learnetto.com/ai-guides/best-ai-resources-for-ai-strategy",
      "tags": [
        "组织采纳",
        "知识工作",
        "策略"
      ],
      "tier": 100,
      "discoveredAt": "2026-11-23",
      "status": "active"
    },
    {
      "id": "tu-strategy-guide",
      "title": "AI 战略与落地资源指南",
      "category": "AI商业战略与产品",
      "org": "Learnetto",
      "level": "入门→进阶",
      "format": "资源指南",
      "lang": "英文",
      "duration": "单篇长文",
      "desc": "把 AI 战略拆成用例选择、采纳管理与行为改变，串起 Andrew Ng 课程、Lenny 访谈与行业播客，适合管理者按图索骥。",
      "url": "https://learnetto.com/ai-guides/best-ai-resources-for-ai-strategy",
      "sourceUrl": "https://learnetto.com/ai-guides/best-ai-resources-for-ai-strategy",
      "tags": [
        "战略",
        "用例选择",
        "管理者"
      ],
      "tier": 50,
      "discoveredAt": "2026-11-23",
      "status": "active"
    },
    {
      "id": "tu-duke-aipm",
      "title": "AI Product Management Specialization",
      "category": "AI商业战略与产品",
      "org": "Duke University",
      "level": "进阶",
      "format": "在线专项课",
      "lang": "英文",
      "duration": "专项课程",
      "desc": "杜克大学的 AI 产品管理专项课，覆盖 AI 产品的范围界定、评估与上线，可免费旁听部分内容。",
      "url": "https://www.coursera.org/specializations/ai-product-management",
      "sourceUrl": "https://learnetto.com/ai-guides/best-ai-resources-for-ai-strategy",
      "tags": [
        "AI PM",
        "产品评估",
        "旁听"
      ],
      "tier": 50,
      "discoveredAt": "2026-11-23",
      "status": "active"
    },
    {
      "id": "tu-product-school",
      "title": "产品开发四阶段免费指南",
      "category": "AI商业战略与产品",
      "org": "Product School",
      "level": "入门",
      "format": "实战指南",
      "lang": "英文",
      "duration": "单篇长文",
      "desc": "把产品学习拆成流程、工具、上线、反馈四阶段，强调「做出并交给真实用户」才是分水岭，含免费学习路径。",
      "url": "https://productschool.com/blog/skills/learn-product-development",
      "sourceUrl": "https://productschool.com/blog/skills/learn-product-development",
      "tags": [
        "产品开发",
        "实战",
        "反馈"
      ],
      "tier": 50,
      "discoveredAt": "2026-11-23",
      "status": "active"
    },
    {
      "id": "tu-shape-up",
      "title": "Shape Up（免费在线书）",
      "category": "AI商业战略与产品",
      "org": "Basecamp",
      "level": "进阶",
      "format": "在线书",
      "lang": "英文",
      "duration": "全书在线",
      "desc": "Basecamp 的产品 shaping 方法全文免费，讲如何界定问题边界、写投标书与控制周期，做 AI 产品规划同样适用。",
      "url": "https://basecamp.com/shapeup",
      "sourceUrl": "https://productschool.com/blog/skills/learn-product-development",
      "tags": [
        "产品规划",
        "免费书",
        "周期"
      ],
      "tier": 50,
      "discoveredAt": "2026-11-23",
      "status": "active"
    },
    {
      "id": "tu-pm-free-courses",
      "title": "产品经理 AI 转型免费课程库",
      "category": "AI商业战略与产品",
      "org": "开源社区",
      "level": "入门→进阶",
      "format": "开源课程",
      "lang": "中文",
      "duration": "多阶段",
      "desc": "面向 PM 的免费课程矩阵：写 PRD、CSV 数据分析、SWOT/Rumelt 战略框架、AI 生图与 Vibe Coding，适配 Cursor / Codex 等工具。",
      "url": "https://www.chinadongda.com/j/?gitblog_00171/article/details/156379453",
      "sourceUrl": "https://www.chinadongda.com/j/?gitblog_00171/article/details/156379453",
      "tags": [
        "中文",
        "产品经理",
        "PRD"
      ],
      "tier": 20,
      "discoveredAt": "2026-11-23",
      "status": "active"
    },
    {
      "id": "tu-llm-zoomcamp",
      "title": "LLM Zoomcamp",
      "category": "大模型应用与开发",
      "org": "DataTalks.Club",
      "level": "进阶",
      "format": "文档课程",
      "lang": "英文",
      "duration": "10 周（可自学）",
      "desc": "免费的 LLM 生产实践课，覆盖 RAG、向量检索、评估与生产部署；每周作业 + 期末项目 + 同伴互评，完成后可获证书，只需 Python/命令行/Docker 基础。",
      "url": "https://github.com/DataTalksClub/llm-zoomcamp",
      "sourceUrl": "https://www.datacamp.com/blog/best-platforms-to-learn-ai-engineering",
      "tags": [
        "RAG",
        "生产部署",
        "证书"
      ],
      "tier": 50,
      "discoveredAt": "2026-11-23",
      "status": "active"
    },
    {
      "id": "tu-google-genai-notebooks",
      "title": "Generative AI on Google Cloud",
      "category": "大模型应用与开发",
      "org": "Google Cloud",
      "level": "入门→进阶",
      "format": "代码食谱",
      "lang": "英文",
      "duration": "按主题",
      "desc": "Google Cloud 官方开源 Notebook 与示例集，用 Gemini API 做生成式 AI 应用，代码可直接运行；需自备 Google Cloud 账号与额度。",
      "url": "https://github.com/GoogleCloudPlatform/generative-ai",
      "sourceUrl": "https://offladder.com/answers/free-ai-courses",
      "tags": [
        "Gemini",
        "官方示例",
        "Notebook"
      ],
      "tier": 50,
      "discoveredAt": "2026-11-23",
      "status": "active"
    },
    {
      "id": "tu-comfyui-first-workflow",
      "title": "ComfyUI 入门：本地安装、模型下载与第一个绘图工作流",
      "category": "AIGC创意与视觉设计",
      "org": "夜雨聆风",
      "level": "入门",
      "format": "实战文章",
      "lang": "中文",
      "duration": "单篇长文",
      "desc": "从安装、模型下载讲到 Load Checkpoint → CLIP 编码 → KSampler → VAE Decode 的基础链路，并说明一次只改一个变量的调参方法与常用快捷键，适合第一次跑通 ComfyUI。",
      "url": "https://yeyulingfeng.com/a/487910.html",
      "sourceUrl": "https://yeyulingfeng.com/a/487910.html",
      "tags": [
        "ComfyUI",
        "入门",
        "节点工作流"
      ],
      "tier": 20,
      "discoveredAt": "2026-11-23",
      "status": "active"
    },
    {
      "id": "tu-lerobot-handbook",
      "title": "LeRobot 教学全书：从数据集到真机部署",
      "category": "具身智能与硬件AI",
      "org": "CSDN DAMO开发者矩阵",
      "level": "入门→进阶",
      "format": "在线书",
      "lang": "中文",
      "duration": "多章手册",
      "desc": "2026-11 发布的中文系统手册，讲 LeRobot 的架构、策略库（ACT / Diffusion Policy / SmolVLA 等）、SO-100/101 硬件与「采集→校准→训练→评测→部署」最小闭环，配实验与自测清单。",
      "url": "https://damodev.csdn.net/6affa486e5f4ca4eff92ae85.html",
      "sourceUrl": "https://blog.csdn.net/weixin_42039671/article/details/170972058",
      "tags": [
        "LeRobot",
        "中文",
        "模仿学习"
      ],
      "tier": 50,
      "discoveredAt": "2026-11-23",
      "status": "active"
    },
    {
      "id": "tu-guyue-lerobot-loop",
      "title": "具身智能最小落地闭环：低成本机械臂 + LeRobot",
      "category": "具身智能与硬件AI",
      "org": "古月居",
      "level": "进阶",
      "format": "实战文章",
      "lang": "中文",
      "duration": "系列长文",
      "desc": "用千元级桌面机械臂、两路相机和一张消费级显卡跑通采数据→训策略→部署→评测→迭代的完整闭环，分层讲解本体、驱动、感知与决策的开源选型及三条技术路线的真实代价。",
      "url": "https://www.guyuehome.com/wap/detail?id=2118943834235760641",
      "sourceUrl": "https://www.guyuehome.com/wap/detail?id=2118943834235760641",
      "tags": [
        "机械臂",
        "Sim2Real",
        "中文实战"
      ],
      "tier": 50,
      "discoveredAt": "2026-11-23",
      "status": "active"
    },
    {
      "id": "tu-n8n-first-workflow",
      "title": "用 n8n 搭第一个工作流的顺序",
      "category": "AI工作流与自动化",
      "org": "归栖记",
      "level": "入门",
      "format": "实战文章",
      "lang": "中文",
      "duration": "单篇短文",
      "desc": "2026-11-15 发布，主张从「搬运」而非判断开始：触发器→读取→写入→通知四步逐节点验证，并给出调试技巧、何时加 AI 节点及四类常见错误，适合零基础第一次上手 n8n。",
      "url": "https://guijiagi.com/posts/2026-11-15-92-n8n-da-di-yige-gongzuoliu-de-shunxu",
      "sourceUrl": "https://guijiagi.com/posts/2026-11-15-92-n8n-da-di-yige-gongzuoliu-de-shunxu",
      "tags": [
        "n8n",
        "中文",
        "入门顺序"
      ],
      "tier": 20,
      "discoveredAt": "2026-11-23",
      "status": "active"
    },
    {
      "id": "tu-agent-workflow-guide",
      "title": "AI Agent 工作流编排：从概念到实战",
      "category": "AI工作流与自动化",
      "org": "编程知识",
      "level": "进阶",
      "format": "实战文章",
      "lang": "中文",
      "duration": "单篇长文",
      "desc": "对比 n8n、Dify/Coze、ComfyUI、LangGraph 与 Prefect 的适用场景，给出选型速查表，并用内容审核案例讲顺序链、条件分支、并行聚合与循环迭代的落地写法。",
      "url": "https://www.hqwc.cn/a/953888.html",
      "sourceUrl": "https://www.hqwc.cn/a/953888.html",
      "tags": [
        "工作流编排",
        "LangGraph",
        "选型"
      ],
      "tier": 20,
      "discoveredAt": "2026-11-23",
      "status": "active"
    },
    {
      "id": "tu-gcp-genai-leader",
      "title": "Google Cloud Generative AI Leader 免费备考路径",
      "category": "AI商业战略与产品",
      "org": "Google Cloud",
      "level": "入门",
      "format": "官方文档",
      "lang": "英文",
      "duration": "7-8 小时",
      "desc": "面向业务负责人与产品经理的官方免费备考内容，覆盖基础模型原理、企业数据接地、AI Agent 与负责任治理；认证考试本身收费，备考材料可免费学完。",
      "url": "https://cloud.google.com/certifications/generative-ai-leader",
      "sourceUrl": "https://primo.ai/wiki/How_can_I_leverage_Artificial_Intelligence_(AI)%3F",
      "tags": [
        "管理者",
        "治理",
        "官方路径"
      ],
      "tier": 50,
      "discoveredAt": "2026-11-23",
      "status": "active"
    },
    {
      "id": "tu-anthropic-academy",
      "title": "Anthropic Academy（MCP / Agent Skills / Subagents）",
      "category": "大模型应用与开发",
      "org": "Anthropic",
      "level": "入门→进阶",
      "format": "在线课程",
      "lang": "英文",
      "duration": "多门短课",
      "desc": "Anthropic 官方免费课程，涵盖 Model Context Protocol 入门与进阶、Agent Skills 与 Subagents，面向 Claude Code 工作流，完成可获证书/徽章。",
      "url": "https://www.anthropic.com/academy",
      "sourceUrl": "https://logicwiz.ai/blog/2026-10-08-free-ai-agents-courses-compared",
      "tags": [
        "MCP",
        "Agent Skills",
        "Claude Code"
      ],
      "tier": 100,
      "discoveredAt": "2026-11-24",
      "status": "active"
    },
    {
      "id": "tu-dlai-agentic",
      "title": "Agentic AI（吴恩达）",
      "category": "大模型应用与开发",
      "org": "DeepLearning.AI",
      "level": "进阶",
      "format": "视频课程",
      "lang": "英文",
      "duration": "约 10 小时",
      "desc": "吴恩达主讲的 Agentic AI 课程，约 10 小时，覆盖反思、工具调用（含 MCP）、规划与多智能体工作流。免费旁听，评分作业与证书需 Pro。",
      "url": "https://www.deeplearning.ai/courses/agentic-ai/",
      "sourceUrl": "https://andrew.ooo/answers/best-resources-for-learning-ai-agent-development-2026",
      "tags": [
        "Agent",
        "设计模式",
        "吴恩达"
      ],
      "tier": 100,
      "discoveredAt": "2026-11-24",
      "status": "active"
    },
    {
      "id": "tu-fastai",
      "title": "Practical Deep Learning for Coders",
      "category": "大模型应用与开发",
      "org": "fast.ai",
      "level": "入门→进阶",
      "format": "在线课程",
      "lang": "英文",
      "duration": "9 课，每节约 90 分钟",
      "desc": "Jeremy Howard 主讲的免费实战深度学习课程，自顶向下，第一课即训练可用模型，后续再讲理论，需约一年编程基础。",
      "url": "https://course.fast.ai/",
      "sourceUrl": "https://scrimba.com/articles/free-ai-courses-for-developers-2026/",
      "tags": [
        "深度学习",
        "实战",
        "机器学习"
      ],
      "tier": 100,
      "discoveredAt": "2026-11-24",
      "status": "active"
    },
    {
      "id": "tu-kaggle-learn",
      "title": "Kaggle Learn 微课程",
      "category": "大模型应用与开发",
      "org": "Kaggle",
      "level": "入门",
      "format": "Notebook 微课程",
      "lang": "英文",
      "duration": "每门数小时",
      "desc": "Kaggle 免费微课程，在 Notebook 中动手学习，完成可获证书，涵盖 Python、机器学习、数据可视化等。",
      "url": "https://www.kaggle.com/learn",
      "sourceUrl": "https://scrimba.com/articles/free-ai-courses-for-developers-2026/",
      "tags": [
        "机器学习",
        "Notebook",
        "免费证书"
      ],
      "tier": 100,
      "discoveredAt": "2026-11-24",
      "status": "active"
    },
    {
      "id": "tu-datawhale-hello-agents",
      "title": "Hello-Agents 智能体系统教程",
      "category": "大模型应用与开发",
      "org": "Datawhale",
      "level": "入门→进阶",
      "format": "中文课程 + 代码仓库",
      "lang": "中文",
      "duration": "分阶段作业",
      "desc": "Datawhale 出品的中文智能体系统教程，从 Agent 原理到多智能体实战，配代码仓库与阶段作业，2026 年 Agent 开发方向的首选免费中文路径。",
      "url": "https://github.com/datawhalechina/hello-agents",
      "sourceUrl": "https://usefulai.cloud/courses",
      "tags": [
        "Agent",
        "中文",
        "Datawhale"
      ],
      "tier": 100,
      "discoveredAt": "2026-11-24",
      "status": "active"
    },
    {
      "id": "tu-google-skills-agents",
      "title": "Introduction to Agents（Google Skills）",
      "category": "大模型应用与开发",
      "org": "Google",
      "level": "入门",
      "format": "在线课程 + Lab",
      "lang": "英文",
      "duration": "5 个活动",
      "desc": "Google 免费学习路径，介绍 AI Agent 工作原理与 Google Agent 生态，含 Google Cloud 控制台 Lab，完成获技能徽章。",
      "url": "https://skills.google.com/",
      "sourceUrl": "https://logicwiz.ai/blog/2026-10-08-free-ai-agents-courses-compared",
      "tags": [
        "Agent",
        "Google Cloud",
        "徽章"
      ],
      "tier": 100,
      "discoveredAt": "2026-11-24",
      "status": "active"
    },
    {
      "id": "tu-fcc-agents",
      "title": "AI Agents For Beginners（freeCodeCamp）",
      "category": "大模型应用与开发",
      "org": "freeCodeCamp",
      "level": "入门",
      "format": "YouTube 视频",
      "lang": "英文",
      "duration": "约 3 小时",
      "desc": "freeCodeCamp 于 2026-07 发布的 3 小时免费视频，从 LLM、Token、温度等核心概念讲到工作流、防护与沙箱，构建 Agent。",
      "url": "https://www.youtube.com/@freecodecamp",
      "sourceUrl": "https://logicwiz.ai/blog/2026-10-08-free-ai-agents-courses-compared",
      "tags": [
        "Agent",
        "入门",
        "视频"
      ],
      "tier": 100,
      "discoveredAt": "2026-11-24",
      "status": "active"
    },
    {
      "id": "tu-nvidia-dli",
      "title": "NVIDIA DLI 实战课程",
      "category": "大模型应用与开发",
      "org": "NVIDIA",
      "level": "入门→进阶",
      "format": "云 GPU Lab",
      "lang": "英文",
      "duration": "多门实验课",
      "desc": "NVIDIA 免费实战课程，在真实云 GPU 上动手训练模型，涵盖深度学习入门、生成式 AI 原理、RAG 与 Agent 构建，完成可获证书。",
      "url": "https://www.nvidia.com/en-us/training/",
      "sourceUrl": "https://usefulai.cloud/courses",
      "tags": [
        "GPU",
        "深度学习",
        "实战"
      ],
      "tier": 100,
      "discoveredAt": "2026-11-24",
      "status": "active"
    },
    {
      "id": "tu-openai-academy",
      "title": "OpenAI Academy 免费课程",
      "category": "大模型应用与开发",
      "org": "OpenAI",
      "level": "入门→进阶",
      "format": "在线课程",
      "lang": "英文",
      "duration": "按主题",
      "desc": "OpenAI 官方免费学习平台，含 AI Foundations、Applied AI Foundations、Agents and Workflows 三门新课，覆盖提示词、可复用工作流、Agent 任务指导及 Codex/API 开发，完成可获证书。",
      "url": "https://academy.openai.com/",
      "sourceUrl": "https://openai.com/index/academy-courses-applying-ai-at-work/",
      "tags": [
        "OpenAI",
        "官方课程",
        "证书"
      ],
      "tier": 100,
      "discoveredAt": "2026-11-24",
      "status": "active"
    },
    {
      "id": "tu-cs224n",
      "title": "Stanford CS224N：深度学习自然语言处理",
      "category": "大模型应用与开发",
      "org": "Stanford University",
      "level": "进阶",
      "format": "高校课程",
      "lang": "英文",
      "duration": "按主题",
      "desc": "斯坦福经典 NLP 公开课，官网公开课程视频、讲义与作业，从词向量、RNN、Transformer 讲到大模型与多模态，适合有机器学习基础者系统学习。",
      "url": "https://web.stanford.edu/class/cs224n/",
      "sourceUrl": "https://www.stanford.edu/class/archive/cs/cs224n/cs224n.1234/index.html",
      "tags": [
        "NLP",
        "斯坦福",
        "公开课"
      ],
      "tier": 100,
      "discoveredAt": "2026-11-24",
      "status": "active"
    },
    {
      "id": "tu-flux-bfl",
      "title": "FLUX 官方开源仓库与文档（Black Forest Labs）",
      "category": "AIGC创意与视觉设计",
      "org": "Black Forest Labs",
      "level": "进阶",
      "format": "开源教程",
      "lang": "英文",
      "duration": "按主题",
      "desc": "Black Forest Labs 官方 FLUX 模型仓库，README 给出 schnell/dev 权重获取、本地推理命令、显存要求与 ComfyUI 集成步骤，适合动手部署开源图像生成模型。",
      "url": "https://github.com/black-forest-labs/flux",
      "sourceUrl": "https://docs.bfl.ml/",
      "tags": [
        "FLUX",
        "开源模型",
        "文生图"
      ],
      "tier": 100,
      "discoveredAt": "2026-11-24",
      "status": "active"
    },
    {
      "id": "tu-invokeai",
      "title": "Invoke（InvokeAI）官方文档与开源创意引擎",
      "category": "AIGC创意与视觉设计",
      "org": "InvokeAI 社区",
      "level": "入门→进阶",
      "format": "官方文档",
      "lang": "英文",
      "duration": "按主题",
      "desc": "开源本地 AI 绘画工具 Invoke 官方文档，覆盖启动器安装、SDXL/FLUX 模型下载、Unified Canvas 局部重绘与节点工作流，免费且许可对商用友好。",
      "url": "https://github.com/invoke-ai/InvokeAI",
      "sourceUrl": "https://invoke-ai.github.io/InvokeAI/",
      "tags": [
        "AI绘画",
        "开源工具",
        "本地部署"
      ],
      "tier": 50,
      "discoveredAt": "2026-11-24",
      "status": "active"
    },
    {
      "id": "tu-mit-underactuated",
      "title": "MIT Underactuated Robotics 公开课讲义",
      "category": "具身智能与硬件AI",
      "org": "MIT（Russ Tedrake）",
      "level": "高级",
      "format": "高校课程",
      "lang": "英文",
      "duration": "按主题",
      "desc": "MIT 官方免费且持续更新的机器人控制课程讲义，系统讲解行走、奔跑、飞行与抓取的欠驱动控制算法，配 Drake 代码示例与习题，适合有控制与线性代数基础者。",
      "url": "https://underactuated.csail.mit.edu/",
      "sourceUrl": "https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-832-underactuated-robotics-spring-2009",
      "tags": [
        "机器人学",
        "控制算法",
        "MIT公开课"
      ],
      "tier": 100,
      "discoveredAt": "2026-11-24",
      "status": "active"
    },
    {
      "id": "tu-openpi",
      "title": "Physical Intelligence openpi：开源 VLA 模型与微调教程",
      "category": "具身智能与硬件AI",
      "org": "Physical Intelligence",
      "level": "进阶",
      "format": "开源教程",
      "lang": "英文",
      "duration": "按主题",
      "desc": "官方开源的 π₀/π₀-FAST/π₀.₅ 视觉-语言-动作模型仓库，README 含预训练模型推理、LeRobot 数据格式转换与 LoRA/全量微调步骤，适合具身智能动手实践。",
      "url": "https://github.com/Physical-Intelligence/openpi",
      "sourceUrl": "https://github.com/Physical-Intelligence/openpi",
      "tags": [
        "VLA",
        "机器人",
        "开源模型"
      ],
      "tier": 100,
      "discoveredAt": "2026-11-24",
      "status": "active"
    },
    {
      "id": "tu-anthropic-effective-agents",
      "title": "Anthropic：Building Effective Agents",
      "category": "AI工作流与自动化",
      "org": "Anthropic",
      "level": "进阶",
      "format": "实战文章",
      "lang": "英文",
      "duration": "约 20 分钟阅读",
      "desc": "Anthropic 官方工程文章，清晰区分工作流与 Agent，给出提示词链、路由、并行化、编排者-工作者等可组合模式及适用边界，是设计 AI 工作流的权威实践指南。",
      "url": "https://www.anthropic.com/engineering/building-effective-agents",
      "sourceUrl": "https://www.anthropic.com/engineering/building-effective-agents",
      "tags": [
        "Agent模式",
        "工作流",
        "Anthropic"
      ],
      "tier": 100,
      "discoveredAt": "2026-11-24",
      "status": "active"
    },
    {
      "id": "tu-owasp-agentic-v2",
      "title": "OWASP Securing Agentic Applications V2",
      "category": "AI安全、治理与伦理",
      "org": "OWASP GenAI Security Project",
      "level": "进阶",
      "format": "安全指南",
      "lang": "英文",
      "duration": "按主题",
      "desc": "OWASP GenAI 安全项目发布的智能体应用防护指南 V2，面向构建者与防守方，覆盖设计、开发、部署与运行阶段的实用安全措施，官网免费下载。",
      "url": "https://genai.owasp.org/resource/securing-agentic-applications-v2/",
      "sourceUrl": "https://genai.owasp.org/",
      "tags": [
        "智能体安全",
        "OWASP",
        "防护指南"
      ],
      "tier": 100,
      "discoveredAt": "2026-11-24",
      "status": "active"
    },
    {
      "id": "tu-mit-ai-risk-repo",
      "title": "MIT AI Risk Repository（AI 风险知识库）",
      "category": "AI安全、治理与伦理",
      "org": "MIT（AI Risk Initiative）",
      "level": "入门→进阶",
      "format": "在线数据库",
      "lang": "英文",
      "duration": "按主题",
      "desc": "MIT 免费开放的 AI 风险库，收录 1700+ 条风险并按成因与领域双重分类，提供可复制数据库、交互式浏览与研究报告，适合系统掌握 AI 安全风险全景。",
      "url": "https://airisk.mit.edu/",
      "sourceUrl": "https://airisk.mit.edu/",
      "tags": [
        "AI风险",
        "风险分类",
        "MIT"
      ],
      "tier": 100,
      "discoveredAt": "2026-11-24",
      "status": "active"
    },
    {
      "id": "tu-ms-ai-business-school",
      "title": "Microsoft AI Business School：Transform your business with AI",
      "category": "AI商业战略与产品",
      "org": "Microsoft",
      "level": "入门",
      "format": "文档课程",
      "lang": "英文",
      "duration": "约 2.5 小时（4 模块）",
      "desc": "微软面向业务领导者的免费学习路径（4 模块约 2.5 小时），讲解如何规划、制定战略并负责任地规模化落地 AI 项目，含真实案例与实施指引。",
      "url": "https://learn.microsoft.com/en-us/training/paths/transform-your-business-with-microsoft-ai/",
      "sourceUrl": "https://www.microsoft.com/en-us/ai/ai-business-school",
      "tags": [
        "AI战略",
        "企业落地",
        "微软"
      ],
      "tier": 100,
      "discoveredAt": "2026-11-24",
      "status": "active"
    },
    {
      "id": "tu-hf-mcp-course",
      "title": "Hugging Face MCP Course",
      "category": "AI工作流与自动化",
      "org": "Hugging Face × Anthropic",
      "level": "入门→进阶",
      "format": "在线课程",
      "lang": "英文",
      "duration": "数章（含实战单元）",
      "desc": "由 Hugging Face 与 Anthropic 联合打造的免费 MCP 课程：从 MCP 协议基础到构建真实 MCP server 的端到端实战，完成单元可获得官方免费认证（fundamentals 与 completion 两级）。",
      "url": "https://huggingface.co/learn/mcp-course/unit0/introduction",
      "sourceUrl": "https://dev.to/radhakishanjangid404/ai-agents-roadmap-2026-10-free-courses-in-the-right-order-53dh",
      "tags": [
        "MCP",
        "认证免费",
        "Agent"
      ],
      "tier": 100,
      "discoveredAt": "2026-11-25",
      "status": "active"
    },
    {
      "id": "tu-langchain-langgraph-essentials",
      "title": "LangGraph Essentials",
      "category": "大模型应用与开发",
      "org": "LangChain Academy",
      "level": "入门",
      "format": "视频课程",
      "lang": "英文",
      "duration": "13 课，约 1 小时",
      "desc": "LangChain Academy 免费课程：用约 1 小时讲清 LangGraph 状态图编排，涵盖 human-in-the-loop 审批、状态管理与基础图结构，课程内容免费，仅认证考试收费。",
      "url": "https://academy.langchain.com/courses/langgraph-essentials-python",
      "sourceUrl": "https://dev.to/radhakishanjangid404/ai-agents-roadmap-2026-10-free-courses-in-the-right-order-53dh",
      "tags": [
        "LangGraph",
        "状态编排",
        "免费"
      ],
      "tier": 50,
      "discoveredAt": "2026-11-25",
      "status": "active"
    },
    {
      "id": "tu-langchain-essentials",
      "title": "LangChain Essentials",
      "category": "大模型应用与开发",
      "org": "LangChain Academy",
      "level": "入门",
      "format": "视频课程",
      "lang": "英文",
      "duration": "18 课，约 1 小时",
      "desc": "LangChain Academy 免费入门课：18 课约 1 小时，从第一个 LangChain 应用到工具调用与链式编排，适合快速上手 LLM 应用开发，课程内容免费，仅认证考试收费。",
      "url": "https://academy.langchain.com/courses/langchain-essentials-python",
      "sourceUrl": "https://dev.to/radhakishanjangid404/ai-agents-roadmap-2026-10-free-courses-in-the-right-order-53dh",
      "tags": [
        "LangChain",
        "LLM应用",
        "免费"
      ],
      "tier": 50,
      "discoveredAt": "2026-11-25",
      "status": "active"
    },
    {
      "id": "tu-hf-agents-course",
      "title": "Hugging Face AI Agents Course",
      "category": "AI工作流与自动化",
      "org": "Hugging Face",
      "level": "入门→进阶",
      "format": "文档课程",
      "lang": "英文",
      "duration": "4 单元",
      "desc": "免费自步课程，覆盖 Agent 基础（工具、思考、行动、观察）与 smolagents、LlamaIndex、LangGraph 三大框架，结课完成基准 Agent 作业；官方称认证流程免费。",
      "url": "https://huggingface.co/agents-course",
      "sourceUrl": "https://github.com/huggingface/agents-course",
      "tags": [
        "Agent",
        "免费认证",
        "smolagents",
        "LangGraph"
      ],
      "tier": 100,
      "discoveredAt": "2026-11-25",
      "status": "active"
    },
    {
      "id": "tu-mcp-security-freecodecamp",
      "title": "MCP Security Fundamentals（freeCodeCamp）",
      "category": "AI安全、治理与伦理",
      "org": "freeCodeCamp",
      "level": "进阶",
      "format": "视频课程",
      "lang": "英文",
      "duration": "约 2 小时",
      "desc": "免费自步视频课，面向把 AI Agent 接入外部工具/数据库/API 的开发者：讲解 MCP 基础、真实泄露案例、OWASP MCP Top 10 与企业 MCP 安全体系，并解读 Simon Willison 的「致命三要素」。",
      "url": "https://www.freecodecamp.org/news/secure-your-ai-agents-free-model-context-protocol-mcp-security-course/",
      "sourceUrl": "https://www.freecodecamp.org/news/secure-your-ai-agents-free-model-context-protocol-mcp-security-course/",
      "tags": [
        "MCP",
        "安全",
        "Agent",
        "免费"
      ],
      "tier": 50,
      "discoveredAt": "2026-11-25",
      "status": "active"
    },
    {
      "id": "tu-hello-agents",
      "title": "《从零开始构建智能体》（Datawhale Hello-Agents）",
      "category": "AI工作流与自动化",
      "org": "Datawhale",
      "level": "入门→进阶",
      "format": "开源教程",
      "lang": "中文",
      "duration": "16 章（约 44 万字）",
      "desc": "Datawhale 出品的智能体系统教程：从 Agent 原理到多智能体实战，全中文、配代码仓库与阶段作业，2026 年 Agent 开发方向的首选免费中文学习路径。",
      "url": "https://github.com/datawhalechina/hello-agents",
      "sourceUrl": "https://github.com/datawhalechina/hello-agents",
      "tags": [
        "Agent",
        "中文",
        "多智能体",
        "免费"
      ],
      "tier": 100,
      "discoveredAt": "2026-11-25",
      "status": "active"
    },
    {
      "id": "tu-llms-from-scratch",
      "title": "LLMs from Scratch（rasbt）",
      "category": "大模型应用与开发",
      "org": "rasbt",
      "level": "进阶",
      "format": "文档/代码课程",
      "lang": "英文",
      "duration": "7 章 + 附录",
      "desc": "用 PyTorch 从零一步步实现类 ChatGPT 的大模型：从分词到可训练的 GPT，2026-11 仍在更新，适合想拆开模型本身理解的开发者（需 GPU 算力）。",
      "url": "https://github.com/rasbt/LLMs-from-scratch",
      "sourceUrl": "https://github.com/rasbt/LLMs-from-scratch",
      "tags": [
        "从零实现",
        "PyTorch",
        "大模型",
        "免费"
      ],
      "tier": 100,
      "discoveredAt": "2026-11-25",
      "status": "active"
    },
    {
      "id": "tu-dlai-transformer-llms",
      "title": "How Transformer LLMs Work",
      "category": "大模型应用与开发",
      "org": "DeepLearning.AI",
      "level": "入门",
      "format": "视频课程",
      "lang": "英文",
      "duration": "1 小时 34 分 / 13 视频 + 2 代码示例",
      "desc": "《Hands-On LLM》作者主讲，从词嵌入、自注意力讲到 KV 缓存与 GQA，并对照 Hugging Face 实现。",
      "url": "https://www.deeplearning.ai/courses/how-transformer-llms-work",
      "sourceUrl": "https://www.deeplearning.ai/courses/how-transformer-llms-work",
      "tags": [
        "Transformer",
        "注意力机制",
        "原理入门"
      ],
      "tier": 100,
      "discoveredAt": "2026-11-25",
      "status": "active"
    },
    {
      "id": "tu-smartedu-ai-foundations",
      "title": "人工智能基础（国家高等教育智慧教育平台）",
      "category": "大模型应用与开发",
      "org": "国家高等教育智慧教育平台",
      "level": "入门",
      "format": "高校课程",
      "lang": "中文",
      "duration": "6 讲",
      "desc": "面向非计算机专业的通识课，含提示词工程、Transformer 原理、DeepSeek 本地部署实验与生成式 AI 使用指南。",
      "url": "https://www.chinaooc.com.cn/course/69b9c1c395df98bb27eb662d",
      "sourceUrl": "https://www.chinaooc.com.cn/course/69b9c1c395df98bb27eb662d",
      "tags": [
        "通识课",
        "大模型原理",
        "提示词工程"
      ],
      "tier": 100,
      "discoveredAt": "2026-11-25",
      "status": "active"
    },
    {
      "id": "tu-comfy-wan22-video",
      "title": "Wan 2.2 5B 图生/文生视频官方工作流",
      "category": "AIGC创意与视觉设计",
      "org": "ComfyUI 官方",
      "level": "入门→进阶",
      "format": "官方框架",
      "lang": "英文",
      "duration": "单工作流 + 问答",
      "desc": "官方节点模板演示 UNETLoader→CLIP→KSampler→VAEDecode→SaveVideo 全链路，含 8GB 显存与图生视频开关说明。",
      "url": "https://comfy.org/hub/workflows/wan-2-2-5b-video-generation-f83ee3caa04e/",
      "sourceUrl": "https://comfy.org/hub/workflows/wan-2-2-5b-video-generation-f83ee3caa04e/",
      "tags": [
        "Wan2.2",
        "图生视频",
        "ComfyUI"
      ],
      "tier": 50,
      "discoveredAt": "2026-11-25",
      "status": "active"
    },
    {
      "id": "tu-lora-comfyui-guide",
      "title": "ComfyUI LoRA 使用指南（2026）",
      "category": "AIGC创意与视觉设计",
      "org": "ModelTrends",
      "level": "入门→进阶",
      "format": "实战文章",
      "lang": "中文",
      "duration": "约 10 分钟阅读",
      "desc": "对比 LoraLoader 与 LoraLoaderModelOnly，给出强度、触发词、叠加 LoRA 与按底座模型排错的逐步流程。",
      "url": "https://modeltrends.ai/chinese/%E6%8C%87%E5%8D%97/how-to-use-loras-in-comfyui",
      "sourceUrl": "https://modeltrends.ai/chinese/%E6%8C%87%E5%8D%97/how-to-use-loras-in-comfyui",
      "tags": [
        "LoRA",
        "ComfyUI",
        "中文实战"
      ],
      "tier": 20,
      "discoveredAt": "2026-11-25",
      "status": "active"
    },
    {
      "id": "tu-hf-robotics-course",
      "title": "Hugging Face Robotics Course",
      "category": "具身智能与硬件AI",
      "org": "Hugging Face",
      "level": "入门→进阶",
      "format": "文档课程",
      "lang": "英文",
      "duration": "已发布单元 0/1/2，后续连载",
      "desc": "官方免费交互课，用 LeRobot 讲经典机器人学到基于学习的迁移，含真实数据集与模拟环境练习。",
      "url": "https://huggingface.co/learn/robotics-course",
      "sourceUrl": "https://robotics.growbotics.ai/zh/news/hugging-face-robotics-course-lerobot",
      "tags": [
        "LeRobot",
        "机器人学习",
        "官方课程"
      ],
      "tier": 100,
      "discoveredAt": "2026-11-25",
      "status": "active"
    },
    {
      "id": "tu-datawhale-hello-robot",
      "title": "Hello-Robot：具身智能开源实践教程",
      "category": "具身智能与硬件AI",
      "org": "Datawhale",
      "level": "进阶",
      "format": "开源教程",
      "lang": "中文",
      "duration": "递进式章节 + 视频",
      "desc": "以仿真起步，串起感知、建图、规划、控制与 VLM/VLA/WM，覆盖 Isaac Sim + ROS 2 到真机链路。",
      "url": "https://github.com/datawhalechina/hello-robot",
      "sourceUrl": "https://github.com/datawhalechina/hello-robot",
      "tags": [
        "具身智能",
        "ROS2",
        "中文开源"
      ],
      "tier": 50,
      "discoveredAt": "2026-11-25",
      "status": "active"
    },
    {
      "id": "tu-n8n-academy",
      "title": "n8n Academy 免费官方课程",
      "category": "AI工作流与自动化",
      "org": "n8n",
      "level": "入门→进阶",
      "format": "文档课程",
      "lang": "英文",
      "duration": "4 门共 12–19 小时",
      "desc": "官方课程包含 Quickstart、Essentials、Integrations、In Practice，含工作流实操评分与可验证徽章。",
      "url": "https://learn.n8n.io/",
      "sourceUrl": "https://learn.n8n.io/",
      "tags": [
        "n8n",
        "自动化",
        "免费认证"
      ],
      "tier": 100,
      "discoveredAt": "2026-11-25",
      "status": "active"
    },
    {
      "id": "tu-edwartens-agents-mcp",
      "title": "AI Agents and MCP for Engineers",
      "category": "AI工作流与自动化",
      "org": "EDWartens",
      "level": "进阶",
      "format": "视频课程",
      "lang": "英文",
      "duration": "13 模块 / 11 小时 04 分",
      "desc": "自步课：Agent 循环、Python 工具调用、MCP 规范、FastMCP 只读工业数据源、LangGraph/Agent SDK 与人工审批护栏。",
      "url": "https://edwartens.com/free/ai-agents-and-mcp-for-engineers",
      "sourceUrl": "https://edwartens.com/free/ai-agents-and-mcp-for-engineers",
      "tags": [
        "MCP",
        "Agent",
        "工程实践"
      ],
      "tier": 50,
      "discoveredAt": "2026-11-25",
      "status": "active"
    },
    {
      "id": "tu-ai-safety-atlas",
      "title": "AI Safety Atlas",
      "category": "AI安全、治理与伦理",
      "org": "CeSIA（法国 AI 安全中心）",
      "level": "进阶",
      "format": "在线书",
      "lang": "英文",
      "duration": "8 章，季度更新",
      "desc": "研究者编写的开放教材，按能力、威胁模型、评测、可解释性、监督与治理建立统一概念地图。",
      "url": "https://aisafetyatlas.com/",
      "sourceUrl": "https://aisafetyatlas.com/",
      "tags": [
        "AI安全",
        "开放教材",
        "评测"
      ],
      "tier": 50,
      "discoveredAt": "2026-11-25",
      "status": "active"
    },
    {
      "id": "tu-lens-ai-control",
      "title": "AI Control Fundamentals",
      "category": "AI安全、治理与伦理",
      "org": "Lens Academy",
      "level": "高级",
      "format": "视频课程",
      "lang": "英文",
      "duration": "25 小时 / 5 周制",
      "desc": "免费小组课，聚焦 AI 控制与监督技术，含 1 对 1 指导与证书；建议先具备 AI 安全基础。",
      "url": "https://lensacademy.org/courses/ai-control-fundamentals",
      "sourceUrl": "https://lensacademy.org/courses/ai-control-fundamentals",
      "tags": [
        "AI控制",
        "对齐",
        "研讨课"
      ],
      "tier": 50,
      "discoveredAt": "2026-11-25",
      "status": "active"
    },
    {
      "id": "tu-aipm-wiki",
      "title": "AIPM-Wiki：AI 产品经理入门知识库",
      "category": "AI商业战略与产品",
      "org": "破壁 BreakingWall",
      "level": "入门→进阶",
      "format": "开源教程",
      "lang": "中文",
      "duration": "6 大板块，按编号自学",
      "desc": "学习路线、AI 基础、PM 技能、案例拆解与面试题库，模型价格与政策核实至 2026-07，支持 Obsidian 检索。",
      "url": "https://github.com/archlizheng/AIPM-Wiki",
      "sourceUrl": "https://github.com/archlizheng/AIPM-Wiki",
      "tags": [
        "AI产品经理",
        "面试",
        "中文"
      ],
      "tier": 50,
      "discoveredAt": "2026-11-25",
      "status": "active"
    },
    {
      "id": "tu-ai-for-pm-handbook",
      "title": "AI for Product Managers（开源手册）",
      "category": "AI商业战略与产品",
      "org": "ombharatiya",
      "level": "入门→进阶",
      "format": "在线书",
      "lang": "英文",
      "duration": "12–16 周可选路径",
      "desc": "CC BY 4.0 手册，覆盖 LLM/评测/RAG/Agent/产品工艺、7 个行业案例与 160+ 面试题，事实逐条标注来源。",
      "url": "https://github.com/ombharatiya/AI-for-Product-Managers",
      "sourceUrl": "https://github.com/ombharatiya/AI-for-Product-Managers",
      "tags": [
        "AI PM",
        "面试题",
        "开源手册"
      ],
      "tier": 50,
      "discoveredAt": "2026-11-25",
      "status": "active"
    }
  ],
  "monetization": [
    {
      "id": "m-c1-content",
      "group": "一、C端轻资产变现",
      "track": "AI内容创作与代运营",
      "tagline": "最稳定、复购高",
      "way": "为中小商家、自媒体或实体店提供全套轻量化内容服务：批量撰写公众号/小红书文案、定制短视频脚本、制作电商详情页等。",
      "logic": "利用AI将内容产出效率提升10倍以上，靠稳定复购和批量交付实现持续增收。",
      "source": "用户原文",
      "sourceUrl": "https://www.woshipm.com/?p=6461563",
      "level": "入门",
      "resources": [
        {
          "name": "AI短视频代做从0到1（3个真实收入案例+报价表）",
          "url": "https://www.woshipm.com/?p=6461563"
        },
        {
          "name": "打工人AI副业实测：代写/小红书矩阵/口播5条路子",
          "url": "https://yunpan.plus/t/30190-1-1"
        },
        {
          "name": "Content Automation for Clients（l8bites 内容引擎模型）",
          "url": "https://l8bites.com/blog/ai-monetization-strategies-7-revenue-streams-2026"
        },
        {
          "name": "六位AI超级个体的真实账本：一人公司怎么赚钱（人人都是产品经理）",
          "url": "https://www.woshipm.com/?p=6464514"
        },
        {
          "name": "5个用AI挣钱的人：没一个是靠技术碾压赚钱（今日头条案例复盘）",
          "url": "https://www.toutiao.com/article/7707038341266407970/"
        },
        {
          "name": "AI副业2026复盘：12个项目只有3个赚到钱（含筛选题清单）",
          "url": "https://aibotgo.net/blog/ai-side-hustle-reality-check-2026"
        },
        {
          "name": "自由职业平台数据：AI增强服务工作量同比+72%（新浪科技）",
          "url": "https://tech.sina.cn/2026-10-14/detail-iniveqvs1283467.d.html"
        },
        {
          "name": "Upwork：AI 视频内容需求洞察",
          "url": "https://upwork.com/research/upwork-monthly-hiring-insights-august-2026"
        }
      ],
      "tools": [
        {
          "name": "剪映专业版",
          "url": "https://www.capcut.cn/",
          "kind": "下载安装",
          "note": "Win/Mac 免费版可剪辑导出，部分特效需会员"
        },
        {
          "name": "必剪",
          "url": "https://bcut.bilibili.cn/",
          "kind": "下载安装",
          "note": "B站官方免费剪辑软件，适合口播与短视频"
        },
        {
          "name": "OBS Studio",
          "url": "https://obsproject.com/download",
          "kind": "开源自托管",
          "note": "开源免费，录屏与直播推流"
        },
        {
          "name": "Canva 可画",
          "url": "https://www.canva.cn/",
          "kind": "网页入口",
          "note": "免费版有海量模板，封面/图文快速出图"
        },
        {
          "name": "秘塔写作猫",
          "url": "https://xiezuocat.com/",
          "kind": "网页入口",
          "note": "免费版可改写润色，部分高级功能收费"
        },
        {
          "name": "扣子 Coze",
          "url": "https://www.coze.cn/",
          "kind": "网页入口",
          "note": "个人版免费额度，可零代码搭建内容工作流"
        }
      ],
      "tags": [
        "内容代运营",
        "短视频",
        "复购"
      ],
      "tier": 100,
      "discoveredAt": "2026-11-23",
      "status": "active"
    },
    {
      "id": "m-c1-visual",
      "group": "一、C端轻资产变现",
      "track": "AI视觉与数字资产售卖",
      "tagline": "被动收益",
      "way": "将AI生成的原创视觉素材（国风海报、电商主图、UI素材、PPT模板）上传素材平台分成；或打包售卖Prompt库、Skill工作流模板等数字资产。",
      "logic": "一次制作，多次售卖。核心竞争力在于聚焦细分领域（如跨境电商、医疗科普）的独家认知。",
      "source": "用户原文",
      "sourceUrl": "https://yunpan.plus/t/30190-1-1",
      "level": "入门",
      "resources": [
        {
          "name": "AI工具/模板销售：一次生产无限复利（含售卖平台对比）",
          "url": "https://yunpan.plus/t/30190-1-1"
        },
        {
          "name": "Digital Products and Templates（l8bites 实战）",
          "url": "https://l8bites.com/blog/ai-monetization-strategies-7-revenue-streams-2026"
        },
        {
          "name": "How to Make Money with AI 2026 · 7 Proven Methods（Gumroad/Teachable案例）",
          "url": "https://untappedai.io/how-to-make-money-with-ai-in-2026-7-proven-methods/"
        },
        {
          "name": "20 AI Digital Products to Sell Online in 2026（平台对比与14步流程）",
          "url": "https://mavensynergy.com/?p=2514"
        },
        {
          "name": "AI-Generated Digital Products: 5 Real Niche Plays（2026选品与首周计划）",
          "url": "https://www.automated-income-website.com/make-money-with-ai/ai-generated-digital-products/"
        },
        {
          "name": "AI-Driven Digital Product Passive Income: From Idea Validation to Sales",
          "url": "https://moneymindset.digital/?p=2661"
        },
        {
          "name": "Stable Diffusion WebUI 开源仓库",
          "url": "https://github.com/AUTOMATIC1111/stable-diffusion-webui"
        }
      ],
      "tools": [
        {
          "name": "Canva 可画",
          "url": "https://www.canva.cn/",
          "kind": "网页入口",
          "note": "免费版可制作海报、PPT、电商主图"
        },
        {
          "name": "GIMP",
          "url": "https://www.gimp.org/downloads/",
          "kind": "开源自托管",
          "note": "开源免费图像编辑器，可替代 Photoshop"
        },
        {
          "name": "Krita",
          "url": "https://krita.org/zh-cn/download/",
          "kind": "开源自托管",
          "note": "开源免费绘画与插画工具"
        },
        {
          "name": "Inkscape",
          "url": "https://inkscape.org/release/",
          "kind": "开源自托管",
          "note": "开源免费矢量设计，适合图标与素材"
        },
        {
          "name": "Blender",
          "url": "https://www.blender.org/download/",
          "kind": "开源自托管",
          "note": "开源免费 3D/动态视觉创作"
        },
        {
          "name": "即梦AI",
          "url": "https://jimeng.jianying.com/",
          "kind": "网页入口",
          "note": "字节官方免费额度，可生成图片与视频素材"
        }
      ],
      "tags": [
        "数字资产",
        "Prompt库",
        "素材分成"
      ],
      "tier": 100,
      "discoveredAt": "2026-11-23",
      "status": "active"
    },
    {
      "id": "m-c1-avatar",
      "group": "一、C端轻资产变现",
      "track": "AI数字人与IP孵化",
      "tagline": "高复用性",
      "way": "克隆专属数字人形象，用于短视频口播、线上讲座、直播带货或品牌营销；也可持续输出特色内容打造数字人IP，后续通过形象授权、联名合作变现。",
      "logic": "数字人资产复用性极强，能同时拓展多个变现渠道，大幅降低真人出镜的时间与人力成本。",
      "source": "用户原文",
      "sourceUrl": "https://www.heygen.com/en-in/blog/how-to-create-ai-avatar-youtube-shorts",
      "level": "进阶",
      "resources": [
        {
          "name": "HeyGen 官方：15秒克隆数字人做 YouTube Shorts 全流程",
          "url": "https://www.heygen.com/en-in/blog/how-to-create-ai-avatar-youtube-shorts"
        },
        {
          "name": "HeyGen 照片转数字人视频 10步教程",
          "url": "https://www.tutkit.com/en/text-tutorials/26850-heygen-create-photo-to-avatar-video-step-by-step-guide"
        },
        {
          "name": "腾讯智影搭建AI数字人直播间：开通/模板/文案/商品",
          "url": "https://www.aiboss88.com/news/wonderdynamics-tencent-zhiying-ai-live-guide"
        },
        {
          "name": "2026国产AI视频工具选型：从剧本到剪映草稿全流程",
          "url": "https://blog.csdn.net/weixin_42551227/article/details/170668042"
        },
        {
          "name": "HeyGen 功能/费用全解析（中文）",
          "url": "https://app.genape.ai/zh-CN/tutorial-article/ai-generator/heygen-ai"
        },
        {
          "name": "AI数字人24小时直播带货：从0搭一个不用真人值守的直播间",
          "url": "https://clawpk.net/tutorials/369-ai-digital-human-livestream.html"
        },
        {
          "name": "AI数字人制作全攻略：口播视频到直播带货的工具、成本与流程",
          "url": "https://www.ydsaso.com/371.html"
        },
        {
          "name": "数字人直播全攻略：从口播视频制作到OBS推流实战（含开源SadTalker思路）",
          "url": "https://blog.csdn.net/weixin_34079177/article/details/170640735"
        },
        {
          "name": "AI虚拟主播直播：24小时无人直播的变现与风险（71muke）",
          "url": "http://a.71muke.com/announcement/2026083983"
        },
        {
          "name": "HeyGen 官方免费档说明",
          "url": "https://heygen.com/pricing"
        },
        {
          "name": "HeyGen 数字人平台对比",
          "url": "https://heygen.com/blog/best-ai-avatar-platform-corporate-training-videos"
        }
      ],
      "tools": [
        {
          "name": "腾讯智影",
          "url": "https://zvideo.tencent.tv/",
          "kind": "网页入口",
          "note": "官方免费额度可体验数字人播报"
        },
        {
          "name": "HeyGen",
          "url": "https://www.heygen.com/",
          "kind": "网页入口",
          "note": "官方免费试用，生成后需付费方案"
        },
        {
          "name": "剪映专业版",
          "url": "https://www.capcut.cn/",
          "kind": "下载安装",
          "note": "内置数字人/图文成片，部分功能需会员"
        },
        {
          "name": "OBS Studio",
          "url": "https://obsproject.com/download",
          "kind": "开源自托管",
          "note": "开源免费，用于数字人直播推流"
        },
        {
          "name": "可灵AI",
          "url": "https://klingai.com/",
          "kind": "网页入口",
          "note": "快手官方免费额度，可生成口播视频与数字人素材"
        },
        {
          "name": "Descript",
          "url": "https://www.descript.com/",
          "kind": "网页入口",
          "note": "免费版可剪辑视频并自动生成字幕"
        }
      ],
      "tags": [
        "数字人",
        "IP孵化",
        "口播",
        "数字人直播",
        "AI生成标识"
      ],
      "tier": 100,
      "discoveredAt": "2026-11-23",
      "status": "active"
    },
    {
      "id": "m-c1-media",
      "group": "一、C端轻资产变现",
      "track": "垂直领域自媒体与知识付费",
      "tagline": "流量+私域",
      "way": "持续输出AI工具教程、变现干货，通过平台流量主、AI工具分销佣金、付费社群或一对一实操教学盈利。",
      "logic": "利用大模型快速成为某细分领域的专家，通过精准流量实现高客单价的私域变现。",
      "source": "用户原文",
      "sourceUrl": "https://www.woshipm.com/ai/6467113.html",
      "level": "入门",
      "resources": [
        {
          "name": "教别人用AI我赚翻了（三门课各3000元的真实访谈）",
          "url": "https://www.woshipm.com/ai/6467113.html"
        },
        {
          "name": "AI Training and Consulting（l8bites 课程/咨询模式）",
          "url": "https://l8bites.com/blog/ai-monetization-strategies-7-revenue-streams-2026"
        },
        {
          "name": "AI Affiliate and Reseller Models（分销佣金20-30%）",
          "url": "https://l8bites.com/blog/ai-monetization-strategies-7-revenue-streams-2026"
        },
        {
          "name": "六位AI超级个体的真实账本（月耗65亿Tokens的AI员工模式访谈）",
          "url": "https://www.woshipm.com/?p=6464514"
        },
        {
          "name": "How to Make Money With AI: Full Guide 2026（GetResponse 9种方式）",
          "url": "https://www.getresponse.com/blog/how-to-make-money-with-ai"
        },
        {
          "name": "How to Make Money with AI in 2026（Beebom 实战指南）",
          "url": "https://beebom.com/how-to-make-money-with-ai/"
        },
        {
          "name": "How to Make Money with AI in 2026（Elementor 实用指南）",
          "url": "https://elementor.com/blog/how-to-make-money-with-ai/"
        }
      ],
      "tools": [
        {
          "name": "OBS Studio",
          "url": "https://obsproject.com/download",
          "kind": "开源自托管",
          "note": "开源免费录屏直播，课程与教程制作"
        },
        {
          "name": "剪映专业版",
          "url": "https://www.capcut.cn/",
          "kind": "下载安装",
          "note": "免费版可完成剪辑、字幕与封面"
        },
        {
          "name": "语雀",
          "url": "https://www.yuque.com/",
          "kind": "网页入口",
          "note": "免费版可搭建知识库与专栏"
        },
        {
          "name": "飞书",
          "url": "https://www.feishu.cn/download",
          "kind": "下载安装",
          "note": "免费版含文档/多维表格/群直播"
        },
        {
          "name": "扣子 Coze",
          "url": "https://www.coze.cn/",
          "kind": "网页入口",
          "note": "个人版免费额度，可搭建自媒体内容生产工作流"
        },
        {
          "name": "豆包",
          "url": "https://www.doubao.com/",
          "kind": "网页入口",
          "note": "字节官方免费使用，可做选题与初稿"
        }
      ],
      "tags": [
        "知识付费",
        "私域",
        "分销"
      ],
      "tier": 100,
      "discoveredAt": "2026-11-23",
      "status": "active"
    },
    {
      "id": "m-c1-skill",
      "group": "一、C端轻资产变现",
      "track": "个人技能AI赋能",
      "tagline": "高客单、轻交付",
      "way": "依托AI工具升级传统服务：AI简历优化、AI定制PPT、自媒体AI剪辑等。",
      "logic": "核心不是卖AI，而是用AI放大自身的专业能力，拉开与纯人工服务的价格和效率优势。",
      "source": "用户原文",
      "sourceUrl": "https://kafsols.com/blog/how-to-make-money-with-ai-2026",
      "level": "入门",
      "resources": [
        {
          "name": "AI-Augmented Freelancing（Upwork 2026：AI用户时薪更高）",
          "url": "https://kafsols.com/blog/how-to-make-money-with-ai-2026"
        },
        {
          "name": "15 Proven Ways to Make Money with AI 2026（含AI增强自由职业）",
          "url": "https://kafsols.com/blog/how-to-make-money-with-ai-2026"
        },
        {
          "name": "AI-Enhanced Coding and No-Code App Development（真实$4000项目拆解）",
          "url": "https://untappedai.io/how-to-make-money-with-ai-in-2026-7-proven-methods/"
        },
        {
          "name": "Upwork 2026：AI技能需求+109%，AI视频剪辑+329%（数字市场）",
          "url": "https://digitalmarket.world/content/trends/D626.html"
        },
        {
          "name": "AI技能需求翻倍背后的新闻与机会（Solo AI Tool）",
          "url": "https://soloaitool.com/?p=16184"
        },
        {
          "name": "2026年AI创富机会：Upwork AI整合需求+178%（品传媒）",
          "url": "https://pinnews.com.tw/?p=87726"
        }
      ],
      "tools": [
        {
          "name": "WPS Office 免费版",
          "url": "https://www.wps.cn/",
          "kind": "下载安装",
          "note": "免费版可完成简历、PPT 与文档交付"
        },
        {
          "name": "Canva 可画",
          "url": "https://www.canva.cn/",
          "kind": "网页入口",
          "note": "免费模板提升定制 PPT/简历质感"
        },
        {
          "name": "Gamma",
          "url": "https://gamma.app/",
          "kind": "网页入口",
          "note": "免费额度可 AI 生成演示文稿"
        },
        {
          "name": "通义千问",
          "url": "https://tongyi.aliyun.com/",
          "kind": "网页入口",
          "note": "免费使用，辅助文案改写与润色"
        },
        {
          "name": "秘塔写作猫",
          "url": "https://xiezuocat.com/",
          "kind": "网页入口",
          "note": "免费版可校对润色，部分高级功能收费"
        },
        {
          "name": "讯飞星火",
          "url": "https://xinghuo.xfyun.cn/",
          "kind": "网页入口",
          "note": "官方免费额度，可写文案与简历润色"
        }
      ],
      "tags": [
        "技能升级",
        "高客单",
        "轻交付"
      ],
      "tier": 100,
      "discoveredAt": "2026-11-23",
      "status": "active"
    },
    {
      "id": "m-b1-agent",
      "group": "二、B端重服务与解决方案",
      "track": "企业级Agent定制与自动化",
      "tagline": "确定性最强的金矿",
      "way": "使用Dify、n8n等平台，为中小企业搭建自动获客、智能客服、数据清洗等自动化流水线。",
      "logic": "中小企业急需AI降本增效但缺乏技术人才。这类项目客单价高且稳定，核心难点在于梳理企业内部混乱的业务流程。",
      "source": "用户原文",
      "sourceUrl": "https://l8bites.com/blog/ai-monetization-strategies-7-revenue-streams-2026",
      "level": "进阶",
      "resources": [
        {
          "name": "Custom AI Assistants and Agents（n8n+向量检索实战）",
          "url": "https://l8bites.com/blog/ai-monetization-strategies-7-revenue-streams-2026"
        },
        {
          "name": "AI Automation Services for Small Businesses（KAF Sols 指南）",
          "url": "https://kafsols.com/blog/how-to-make-money-with-ai-2026"
        },
        {
          "name": "Custom AI agents and chatbots（定价与交付 playbook）",
          "url": "https://kafsols.com/blog/how-to-make-money-with-ai-2026"
        },
        {
          "name": "Dify 官方文档（Agent/工作流搭建）",
          "url": "https://docs.dify.ai/"
        },
        {
          "name": "n8n 官方文档（自动化工作流）",
          "url": "https://docs.n8n.io/"
        },
        {
          "name": "腾讯网：扣子/元器替代方案搭建客服与收银智能体（2026-10）",
          "url": "https://new.qq.com/rain/a/20261028A0999L00"
        },
        {
          "name": "AI智能体副业：普通人可落地的4个真实场景（71muke）",
          "url": "http://a.71muke.com/announcement/2026084340"
        },
        {
          "name": "Upwork 2026 AI集成/自动化需求+178%（品传媒）",
          "url": "https://pinnews.com.tw/?p=87726"
        },
        {
          "name": "AI副业复盘：给独立开发者做RAG与Agent集成顾问",
          "url": "https://aibotgo.net/blog/ai-side-hustle-reality-check-2026"
        },
        {
          "name": "Dify 工作流 101",
          "url": "https://docs.dify.ai/zh/learn/tutorials/workflow-101/lesson-01.md"
        },
        {
          "name": "投资人看好的 48 个 AI 应用与成交数据",
          "url": "https://www.woshipm.com/ai/6463036.html"
        }
      ],
      "tools": [
        {
          "name": "Dify 社区版",
          "url": "https://docs.dify.ai/getting-started/install-self-hosted/docker-compose",
          "kind": "开源自托管",
          "note": "Apache 2.0 开源，官方 Docker 部署文档"
        },
        {
          "name": "n8n",
          "url": "https://docs.n8n.io/hosting/installation/",
          "kind": "开源自托管",
          "note": "公平代码许可，可自托管免费使用"
        },
        {
          "name": "Docker Desktop",
          "url": "https://www.docker.com/products/docker-desktop/",
          "kind": "下载安装",
          "note": "个人使用免费，部署 Agent 的本地环境"
        },
        {
          "name": "VS Code",
          "url": "https://code.visualstudio.com/Download",
          "kind": "下载安装",
          "note": "微软官方免费代码编辑器"
        },
        {
          "name": "扣子 Coze",
          "url": "https://www.coze.cn/",
          "kind": "网页入口",
          "note": "个人版免费额度，可零代码搭建企业智能体"
        },
        {
          "name": "腾讯云智能体开发平台 ADP",
          "url": "https://cloud.tencent.com/product/adp",
          "kind": "网页入口",
          "note": "元器停服后的官方替代，可免费领取使用权益（以官网为准）"
        }
      ],
      "tags": [
        "Agent",
        "Dify",
        "n8n",
        "企业自动化",
        "扣子Coze",
        "低代码智能体"
      ],
      "tier": 100,
      "discoveredAt": "2026-11-23",
      "status": "active"
    },
    {
      "id": "m-b1-geo",
      "group": "二、B端重服务与解决方案",
      "track": "GEO生成式引擎优化咨询",
      "tagline": "新兴高潜风口",
      "way": "帮助品牌在各大AI大模型的回答中被优先推荐，将品牌信息做成AI愿意引用的结构、参数和问答。",
      "logic": "传统SEO是优化网页给人看，GEO是优化内容给AI看。AI回答通常只引用少数来源，懂垂直行业且能做GEO优化的服务客单价极高。",
      "source": "用户原文",
      "sourceUrl": "https://www.layer3labs.io/guides/generative-engine-optimization",
      "level": "高阶",
      "resources": [
        {
          "name": "GEO Practitioner's Playbook 2026（五阶段方法论+工具清单）",
          "url": "https://www.layer3labs.io/guides/generative-engine-optimization"
        },
        {
          "name": "What Is GEO? 2026 完整指南（六步框架）",
          "url": "https://theromanseo.com/blog/what-is-geo-generative-engine-optimization-guide-2026"
        },
        {
          "name": "How to Improve Brand Mentions in AI Answers（实战 playbook）",
          "url": "https://peigeo.com/en/blog/improve-brand-mentions-in-ai-answers"
        },
        {
          "name": "2026 GEO优化实战指南：让品牌成为AI默认答案（中文）",
          "url": "https://www.gjsk.cn/news/geo-optimization-guide-2025-12"
        },
        {
          "name": "SEO/AEO/GEO 2026 实用指南（含免费工具）",
          "url": "https://www.greyscript.ai/blog/aeo-geo-seo-guide"
        },
        {
          "name": "GEO: Generative Engine Optimization（Princeton/Georgia Tech/AI2 原始论文）",
          "url": "https://arxiv.org/abs/2309.01431"
        },
        {
          "name": "Generative Engine Optimization: What It Is and Why It Matters (2026)（含四类信号与工具版图）",
          "url": "https://adviora.ai/gep"
        },
        {
          "name": "Best SEO Tools for AI-Optimized Content in 2026（Semrush AI/Ahrefs Brand Radar 对比）",
          "url": "https://www.xseek.io/blogs/articles/best-seo-tools-for-ai-optimized-content-in-2026"
        },
        {
          "name": "SEO Daily Technology Report 2026-11-17（GEO 与 llms.txt  adoption 最新动态）",
          "url": "https://www.activesearchresults.com/seotechreports/SEO_Daily_Technology_2026-11-17.php"
        },
        {
          "name": "Generative Engine Optimization: What the Research Really Says（Princeton论文与2026研究综述）",
          "url": "https://getdesignify.com/blog/generative-engine-optimization"
        },
        {
          "name": "GEO 统计数据（逐条标注来源）",
          "url": "https://shila.so/blog/generative-engine-optimization-statistics"
        },
        {
          "name": "GEO 服务采购需求证据",
          "url": "https://somethinginc.com/blog/generative-engine-optimization-services"
        }
      ],
      "tools": [
        {
          "name": "Google Search Console",
          "url": "https://search.google.com/search-console",
          "kind": "网页入口",
          "note": "谷歌官方免费站长工具，查收录与查询词"
        },
        {
          "name": "Screaming Frog SEO Spider",
          "url": "https://www.screamingfrog.co.uk/seo-spider/",
          "kind": "下载安装",
          "note": "免费版可抓取 500 个 URL，做站点体检"
        },
        {
          "name": "Ahrefs 免费 SEO 工具",
          "url": "https://ahrefs.com/free-seo-tools",
          "kind": "网页入口",
          "note": "官方免费工具集，含关键词与网页检查"
        },
        {
          "name": "Perplexity",
          "url": "https://www.perplexity.ai/",
          "kind": "网页入口",
          "note": "免费版可观察 AI 回答引用了哪些来源"
        },
        {
          "name": "Semrush AI Toolkit",
          "url": "https://www.semrush.com/",
          "kind": "网页入口",
          "note": "官方提供免费试用，完整AI可见性功能需付费"
        },
        {
          "name": "Bing Webmaster Tools",
          "url": "https://www.bing.com/webmasters",
          "kind": "网页入口",
          "note": "免费，含 AI Performance 数据分析"
        }
      ],
      "tags": [
        "GEO",
        "AEO",
        "AI搜索",
        "品牌引用",
        "GEO研究",
        "llms.txt"
      ],
      "tier": 100,
      "discoveredAt": "2026-11-23",
      "status": "active"
    },
    {
      "id": "m-b1-saas",
      "group": "二、B端重服务与解决方案",
      "track": "AI微应用与垂直SaaS",
      "tagline": "长效现金流",
      "way": "通过Vibe Coding（与AI对话编程）快速开发解决单一场景痛点的工具、插件或小程序（一键生成PPT、电商主图生成器等），采用订阅制或按量计费。",
      "logic": "拼的不是代码能力，而是产品嗅觉。聚焦长尾需求，避开与通用大模型的直接竞争。",
      "source": "用户原文",
      "sourceUrl": "https://l8bites.com/blog/ai-monetization-strategies-7-revenue-streams-2026",
      "level": "进阶",
      "resources": [
        {
          "name": "AI-Powered Micro-SaaS（l8bites：$20-50/月订阅模型）",
          "url": "https://l8bites.com/blog/ai-monetization-strategies-7-revenue-streams-2026"
        },
        {
          "name": "Niche AI tools and micro-SaaS（15 ways 实战）",
          "url": "https://kafsols.com/blog/how-to-make-money-with-ai-2026"
        },
        {
          "name": "2026 AI Passive Income Blueprint（$100技术栈+48小时上线）",
          "url": "https://www.hustlestackdaily.com/2026/09/the-2026-ai-passive-income-blueprint.html"
        },
        {
          "name": "High-CPM Digital Product Engine（微SaaS模板）",
          "url": "https://www.hustlestackdaily.com/2026/09/the-2026-blueprint-how-to-build_0864779259.html"
        },
        {
          "name": "无代码AI微SaaS：一个人、四个工具做出现金流（71muke）",
          "url": "http://a.71muke.com/announcement/2026084379"
        },
        {
          "name": "用AI打造一人Micro-SaaS：2026年入门指南（Crea Cosas）",
          "url": "https://www.creacosas.com/zh-hans/blogs/emprendimiento/one-person-micro-saas-ai-guide"
        },
        {
          "name": "微SaaS市场2026：从15.7B到59.6B（收入分布与成本结构）",
          "url": "https://digitalmarket.world/content/trends/D358.html"
        }
      ],
      "tools": [
        {
          "name": "VS Code",
          "url": "https://code.visualstudio.com/Download",
          "kind": "下载安装",
          "note": "官方免费，配合 AI 插件做 Vibe Coding"
        },
        {
          "name": "Cursor",
          "url": "https://www.cursor.com/downloads",
          "kind": "下载安装",
          "note": "免费版有基础 AI 补全额度"
        },
        {
          "name": "Supabase",
          "url": "https://supabase.com/",
          "kind": "网页入口",
          "note": "开源免费层，含数据库与认证"
        },
        {
          "name": "Cloudflare Workers",
          "url": "https://dash.cloudflare.com/",
          "kind": "网页入口",
          "note": "免费额度可部署边缘函数与前端"
        },
        {
          "name": "扣子 Coze",
          "url": "https://www.coze.cn/",
          "kind": "网页入口",
          "note": "个人版免费额度，可快速搭建垂直AI应用MVP"
        },
        {
          "name": "Make",
          "url": "https://www.make.com/",
          "kind": "网页入口",
          "note": "免费层可连接应用与AI，验证工作流需求"
        }
      ],
      "tags": [
        "微SaaS",
        "Vibe Coding",
        "订阅制"
      ],
      "tier": 100,
      "discoveredAt": "2026-11-23",
      "status": "active"
    },
    {
      "id": "m-b1-global",
      "group": "二、B端重服务与解决方案",
      "track": "AI企业服务与出海",
      "tagline": "降维打击",
      "way": "将国内成熟的AI应用模式加上多语言支持，重新在海外做一遍；或为特定行业（法律、医疗、路政工程）开发专用AI评估与审查工具。",
      "logic": "海外用户付费意愿极强，利用AI抹平语言障碍，去高客单价的市场进行降维打击。",
      "source": "用户原文",
      "sourceUrl": "https://www.hustlestackdaily.com/2026/09/the-2026-ai-passive-income-blueprint.html",
      "level": "高阶",
      "resources": [
        {
          "name": "High-CPM Digital Products：面向美英欧Tier-1市场（本地化策略）",
          "url": "https://www.hustlestackdaily.com/2026/09/the-2026-blueprint-how-to-build_0864779259.html"
        },
        {
          "name": "Lemon Squeezy / Paddle：跨境支付与VAT自动处理",
          "url": "https://www.hustlestackdaily.com/2026/09/the-2026-ai-passive-income-blueprint.html"
        },
        {
          "name": "AI integration consulting（增长最快的自由职业技能之一）",
          "url": "https://kafsols.com/blog/how-to-make-money-with-ai-2026"
        },
        {
          "name": "Programmatic SEO 零广告获客（Tier-1 高意向客户）",
          "url": "https://www.hustlestackdaily.com/2026/09/the-2026-ai-passive-income-blueprint.html"
        },
        {
          "name": "How to Make Money With AI: Full Guide 2026（GetResponse，含多渠道平台对比）",
          "url": "https://www.getresponse.com/blog/how-to-make-money-with-ai"
        },
        {
          "name": "How to Make Money with AI in 2026（Beebom，多工具出海示例）",
          "url": "https://beebom.com/how-to-make-money-with-ai/"
        },
        {
          "name": "2026年AI创富机会：代理式AI助力个人创业家（品传媒）",
          "url": "https://pinnews.com.tw/?p=87726"
        }
      ],
      "tools": [
        {
          "name": "DeepL 翻译",
          "url": "https://www.deepl.com/translator",
          "kind": "网页入口",
          "note": "免费版可翻译文本，做多语言本地化"
        },
        {
          "name": "Cloudflare",
          "url": "https://dash.cloudflare.com/",
          "kind": "网页入口",
          "note": "免费 CDN 与 DNS，海外访问加速"
        },
        {
          "name": "Lemon Squeezy",
          "url": "https://www.lemonsqueezy.com/",
          "kind": "网页入口",
          "note": "出海收款与税务代处理，按成交计费"
        },
        {
          "name": "Notion",
          "url": "https://www.notion.com/downloads",
          "kind": "下载安装",
          "note": "免费版可搭建产品页与交付文档"
        },
        {
          "name": "讯飞星火",
          "url": "https://xinghuo.xfyun.cn/",
          "kind": "网页入口",
          "note": "官方免费额度，可做多语言文案本地化"
        },
        {
          "name": "扣子 Coze",
          "url": "https://www.coze.cn/",
          "kind": "网页入口",
          "note": "个人版免费额度，可搭建多语言客服智能体"
        }
      ],
      "tags": [
        "出海",
        "本地化",
        "跨境支付",
        "高客单"
      ],
      "tier": 100,
      "discoveredAt": "2026-11-23",
      "status": "active"
    },
    {
      "id": "m-p1-subscribe",
      "group": "三、主流商业化收费模式",
      "track": "订阅制（SaaS）",
      "tagline": "持续现金流",
      "way": "按月/年收费，提供持续的工具或服务。",
      "logic": "把一次性交付变成可预期的经常性收入（Recurring Revenue），客户生命周期价值最大化。",
      "source": "用户原文",
      "sourceUrl": "https://a16z.com/100-gen-ai-apps-7/",
      "level": "入门",
      "resources": [
        {
          "name": "AI Monetization Strategies: 7 Recurring Revenue Streams",
          "url": "https://l8bites.com/blog/ai-monetization-strategies-7-revenue-streams-2026"
        },
        {
          "name": "Productized AI Services（固定交付+固定价格的月费模式）",
          "url": "https://l8bites.com/blog/ai-monetization-strategies-7-revenue-streams-2026"
        },
        {
          "name": "20 AI Digital Products to Sell Online in 2026（含订阅/会员等持续性收入对比）",
          "url": "https://mavensynergy.com/?p=2514"
        },
        {
          "name": "用AI打造一人Micro-SaaS：MRR与高毛利模式指南",
          "url": "https://www.creacosas.com/zh-hans/blogs/emprendimiento/one-person-micro-saas-ai-guide"
        },
        {
          "name": "微SaaS市场2026：经常性收入与盈利分布数据",
          "url": "https://digitalmarket.world/content/trends/D358.html"
        },
        {
          "name": "Stripe Billing 官方文档",
          "url": "https://docs.stripe.com/billing"
        },
        {
          "name": "无代码搭建订阅收费",
          "url": "https://docs.stripe.com/billing/subscriptions/build-subscriptions"
        },
        {
          "name": "a16z：生成式 AI 应用订阅变现数据",
          "url": "https://a16z.com/100-gen-ai-apps-7/"
        },
        {
          "name": "Lemon Squeezy 官方文档",
          "url": "https://docs.lemonsqueezy.com/"
        }
      ],
      "tools": [
        {
          "name": "Stripe",
          "url": "https://stripe.com/",
          "kind": "网页入口",
          "note": "按交易收费，订阅计费与发票管理"
        },
        {
          "name": "Lemon Squeezy",
          "url": "https://www.lemonsqueezy.com/",
          "kind": "网页入口",
          "note": "适合数字产品的订阅/一次性收款"
        },
        {
          "name": "Notion",
          "url": "https://www.notion.com/downloads",
          "kind": "下载安装",
          "note": "免费版可作为会员内容交付载体"
        },
        {
          "name": "飞书",
          "url": "https://www.feishu.cn/download",
          "kind": "下载安装",
          "note": "免费版可做社群运营与客户管理"
        },
        {
          "name": "小红书",
          "url": "https://www.xiaohongshu.com/",
          "kind": "网页入口",
          "note": "免费发布内容，可导流至付费会员"
        },
        {
          "name": "知识星球",
          "url": "https://www.zsxq.com/",
          "kind": "网页入口",
          "note": "免费注册建立付费专栏"
        }
      ],
      "tags": [
        "订阅制",
        "MRR",
        "留存"
      ],
      "tier": 100,
      "discoveredAt": "2026-11-23",
      "status": "active"
    },
    {
      "id": "m-p1-usage",
      "group": "三、主流商业化收费模式",
      "track": "按量/按次计费",
      "tagline": "用多少付多少",
      "way": "根据API调用次数、生成内容数量或解决任务的数量收费。",
      "logic": "降低客户试错门槛，成本与收入直接挂钩，适合API封装类与批量生成类服务。",
      "source": "用户原文",
      "sourceUrl": "https://docs.stripe.com/billing/subscriptions/usage-based",
      "level": "入门",
      "resources": [
        {
          "name": "How to Make Money with AI 2026（7种模式成本/定价拆解）",
          "url": "https://untappedai.io/how-to-make-money-with-ai-in-2026-7-proven-methods/"
        },
        {
          "name": "AI Data Analysis Services（按报告 $1000-3000 / 月费 $500-2000）",
          "url": "https://untappedai.io/how-to-make-money-with-ai-in-2026-7-proven-methods/"
        },
        {
          "name": "用AI打造一人Micro-SaaS：按量计费与成本控制（Crea Cosas）",
          "url": "https://www.creacosas.com/zh-hans/blogs/emprendimiento/one-person-micro-saas-ai-guide"
        },
        {
          "name": "微SaaS市场2026：AI包装类毛利25%-35% vs 传统70%-85%",
          "url": "https://digitalmarket.world/content/trends/D358.html"
        },
        {
          "name": "How to Make Money With AI: Full Guide 2026（GetResponse）",
          "url": "https://www.getresponse.com/blog/how-to-make-money-with-ai"
        },
        {
          "name": "Stripe 按量计费文档",
          "url": "https://docs.stripe.com/billing/subscriptions/usage-based"
        },
        {
          "name": "LiteLLM 开源网关",
          "url": "https://github.com/BerriAI/litellm"
        },
        {
          "name": "Langfuse 开源观测",
          "url": "https://langfuse.com/"
        },
        {
          "name": "Helicone 成本观测免费层",
          "url": "https://www.helicone.ai/"
        }
      ],
      "tools": [
        {
          "name": "OpenRouter",
          "url": "https://openrouter.ai/",
          "kind": "网页入口",
          "note": "按量调用多家模型，便于核算成本"
        },
        {
          "name": "Cloudflare Workers",
          "url": "https://dash.cloudflare.com/",
          "kind": "网页入口",
          "note": "免费额度起步，按请求量计费"
        },
        {
          "name": "Supabase",
          "url": "https://supabase.com/",
          "kind": "网页入口",
          "note": "免费层起步，数据库按用量扩展"
        },
        {
          "name": "Postman",
          "url": "https://www.postman.com/downloads/",
          "kind": "下载安装",
          "note": "免费版可调试与测试 API 计费接口"
        },
        {
          "name": "LiteLLM",
          "url": "https://github.com/BerriAI/litellm",
          "kind": "开源自托管",
          "note": "MIT 开源免费，统一模型计费网关"
        },
        {
          "name": "Langfuse",
          "url": "https://langfuse.com/",
          "kind": "开源自托管",
          "note": "开源免费，可自托管并有免费云层"
        }
      ],
      "tags": [
        "按量计费",
        "成本观测",
        "API网关"
      ],
      "tier": 100,
      "discoveredAt": "2026-11-23",
      "status": "active"
    },
    {
      "id": "m-p1-project",
      "group": "三、主流商业化收费模式",
      "track": "结果付费/项目制",
      "tagline": "按交付结果收费",
      "way": "针对企业定制开发或GEO优化，按最终交付的商业结果或项目整体收费。",
      "logic": "为结果定价而非工时，客单价高；关键是明确定义可衡量的交付标准。",
      "source": "用户原文",
      "sourceUrl": "https://www.forbes.com/councils/forbesbusinesscouncil/2026/09/17/why-ai-product-companies-are-moving-into-services-and-what-should-existing-service-companies-do",
      "level": "进阶",
      "resources": [
        {
          "name": "Price on value, charge for outcomes（KAF Sols 定价原则）",
          "url": "https://kafsols.com/blog/how-to-make-money-with-ai-2026"
        },
        {
          "name": "AI-assisted app development：freelancer $5000-20000 项目报价",
          "url": "https://untappedai.io/how-to-make-money-with-ai-in-2026-7-proven-methods/"
        },
        {
          "name": "AI副业复盘：先有客户再做产品、垂直>通用（按项目收费）",
          "url": "https://aibotgo.net/blog/ai-side-hustle-reality-check-2026"
        },
        {
          "name": "六位AI超级个体的真实账本（项目制与高客单访谈）",
          "url": "https://www.woshipm.com/?p=6464514"
        },
        {
          "name": "自由职业平台数据：客户购买的是解决问题的能力（新浪科技）",
          "url": "https://tech.sina.cn/2026-10-14/detail-iniveqvs1283467.d.html"
        },
        {
          "name": "Forbes：从按小时到按结果定价",
          "url": "https://www.forbes.com/councils/forbesbusinesscouncil/2026/09/17/why-ai-product-companies-are-moving-into-services-and-what-should-existing-service-companies-do"
        },
        {
          "name": "Forbes：AI 增长运营师全周期交付",
          "url": "https://www.forbes.com/councils/forbesbusinesscouncil/2026/09/16/the-ai-growth-operator-when-one-hire-does-the-work-of-a-marketing-team"
        },
        {
          "name": "Upwork：AI 应用开发工时与报价参考",
          "url": "https://upwork.com/resources/ai-in-app-development"
        },
        {
          "name": "Upwork：AI 技能需求增长数据",
          "url": "https://upwork.com/resources/how-to-hire-freelancers"
        }
      ],
      "tools": [
        {
          "name": "Notion",
          "url": "https://www.notion.com/downloads",
          "kind": "下载安装",
          "note": "免费版可写方案、里程碑与验收单"
        },
        {
          "name": "Figma",
          "url": "https://www.figma.com/downloads/",
          "kind": "下载安装",
          "note": "免费版可做原型与交付设计稿"
        },
        {
          "name": "GitHub Desktop",
          "url": "https://desktop.github.com/",
          "kind": "下载安装",
          "note": "官方免费客户端，管理项目代码"
        },
        {
          "name": "飞书",
          "url": "https://www.feishu.cn/download",
          "kind": "下载安装",
          "note": "免费版可协同跟进项目进度"
        },
        {
          "name": "腾讯文档",
          "url": "https://docs.qq.com/",
          "kind": "网页入口",
          "note": "免费版可写验收单与交付说明"
        },
        {
          "name": "Trello",
          "url": "https://trello.com/",
          "kind": "网页入口",
          "note": "免费版可管理项目看板"
        }
      ],
      "tags": [
        "结果付费",
        "交付验收",
        "服务化"
      ],
      "tier": 100,
      "discoveredAt": "2026-11-23",
      "status": "active"
    },
    {
      "id": "m-s1-mindset",
      "group": "四、核心破局建议",
      "track": "摒弃做题家思维",
      "tagline": "先入局，边做边学",
      "way": "不要等学完所有AI课程才开始。看到别人跑通的模式，立刻躬身入局去模仿，遇到问题再用AI解决。",
      "logic": "执行力比完美准备更重要，市场反馈是最高效的学习。",
      "source": "用户原文",
      "sourceUrl": "https://kafsols.com/blog/how-to-make-money-with-ai-2026",
      "level": "入门",
      "resources": [
        {
          "name": "How to get started this month（选一个niche，做一个小证明）",
          "url": "https://kafsols.com/blog/how-to-make-money-with-ai-2026"
        },
        {
          "name": "Final Action Plan: Your Next 48 Hours",
          "url": "https://www.hustlestackdaily.com/2026/09/the-2026-ai-passive-income-blueprint.html"
        },
        {
          "name": "AI副业2026复盘：12个项目只有3个赚到钱（不吹年入百万）",
          "url": "https://aibotgo.net/blog/ai-side-hustle-reality-check-2026"
        },
        {
          "name": "5个用AI挣钱的人：从你已经会什么开始",
          "url": "https://www.toutiao.com/article/7707038341266407970/"
        },
        {
          "name": "普通人如何用AI赚钱（含先交钱才赚钱的骗局提醒）",
          "url": "https://www.toutiao.com/a7696124475368145458"
        },
        {
          "name": "Forbes：一人公司不再等于小生意",
          "url": "https://www.forbes.com/councils/forbesbusinesscouncil/2026/09/17/one-person-business-no-longer-means-small"
        },
        {
          "name": "Forbes：AI 增长运营师的一人多职模式",
          "url": "https://www.forbes.com/councils/forbesbusinesscouncil/2026/09/16/the-ai-growth-operator-when-one-hire-does-the-work-of-a-marketing-team"
        }
      ],
      "tools": [
        {
          "name": "Perplexity",
          "url": "https://www.perplexity.ai/",
          "kind": "网页入口",
          "note": "免费版可快速调研并查看引用来源"
        },
        {
          "name": "Notion",
          "url": "https://www.notion.com/downloads",
          "kind": "下载安装",
          "note": "免费版记录验证清单与复盘"
        },
        {
          "name": "豆包",
          "url": "https://www.doubao.com/",
          "kind": "网页入口",
          "note": "免费使用，随时把问题交给 AI 拆解"
        },
        {
          "name": "Ollama",
          "url": "https://ollama.com/download",
          "kind": "开源自托管",
          "note": "开源免费，本机运行模型不依赖云端"
        },
        {
          "name": "扣子 Coze",
          "url": "https://www.coze.cn/",
          "kind": "网页入口",
          "note": "个人版免费额度，可快速把想法做成可验证的demo"
        },
        {
          "name": "秘塔 AI 搜索",
          "url": "https://metaso.cn/",
          "kind": "网页入口",
          "note": "免费版可做轻量行业调研"
        }
      ],
      "tags": [
        "执行力",
        "模仿",
        "快速验证"
      ],
      "tier": 100,
      "discoveredAt": "2026-11-23",
      "status": "active"
    },
    {
      "id": "m-s1-pain",
      "group": "四、核心破局建议",
      "track": "找痛点，而不是找风口",
      "tagline": "场景理解是护城河",
      "way": "别去卷通用大模型，去你以前待过的细分行业里找痛点。",
      "logic": "场景理解能力是AI时代永恒的护城河；垂直Know-how比通用技术更难被复制。",
      "source": "用户原文",
      "sourceUrl": "https://kafsols.com/blog/how-to-make-money-with-ai-2026",
      "level": "入门",
      "resources": [
        {
          "name": "Pick one niche and one offer（KAF Sols）",
          "url": "https://kafsols.com/blog/how-to-make-money-with-ai-2026"
        },
        {
          "name": "Micro-Niche Keyword Intelligence（超细分高CPM定位）",
          "url": "https://www.hustlestackdaily.com/2026/09/the-2026-ai-passive-income-blueprint.html"
        },
        {
          "name": "Specific beats general every time（l8bites）",
          "url": "https://l8bites.com/blog/ai-monetization-strategies-7-revenue-streams-2026"
        },
        {
          "name": "用AI打造一人Micro-SaaS：从社区抱怨与竞品差评中找细分痛点",
          "url": "https://www.creacosas.com/zh-hans/blogs/emprendimiento/one-person-micro-saas-ai-guide"
        },
        {
          "name": "AI副业复盘：垂直>通用，先有客户再做产品",
          "url": "https://aibotgo.net/blog/ai-side-hustle-reality-check-2026"
        },
        {
          "name": "20 AI Digital Products：用Google Trends/Etsy/Reddit验证需求",
          "url": "https://mavensynergy.com/?p=2514"
        },
        {
          "name": "Upwork：细分 AI 招聘需求洞察",
          "url": "https://upwork.com/research/upwork-monthly-hiring-insights-august-2026"
        },
        {
          "name": "Upwork：专业角色需求数据",
          "url": "https://upwork.com/research/upwork-monthly-hiring-insights-september-2026"
        }
      ],
      "tools": [
        {
          "name": "Google Trends",
          "url": "https://trends.google.com/trends/",
          "kind": "网页入口",
          "note": "谷歌官方免费，验证细分需求热度"
        },
        {
          "name": "AnswerThePublic",
          "url": "https://answerthepublic.com/",
          "kind": "网页入口",
          "note": "免费额度可查看用户提问式长尾词"
        },
        {
          "name": "Ahrefs 免费 SEO 工具",
          "url": "https://ahrefs.com/free-seo-tools",
          "kind": "网页入口",
          "note": "官方免费工具集，分析关键词竞争度"
        },
        {
          "name": "Kimi",
          "url": "https://kimi.moonshot.cn/",
          "kind": "网页入口",
          "note": "免费使用，长文档整理行业痛点"
        },
        {
          "name": "Semrush",
          "url": "https://www.semrush.com/",
          "kind": "网页入口",
          "note": "官方免费试用，可查关键词竞争度"
        },
        {
          "name": "知乎",
          "url": "https://www.zhihu.com/",
          "kind": "网页入口",
          "note": "免费浏览讨论，用于发现真实痛点"
        }
      ],
      "tags": [
        "垂直细分",
        "痛点",
        "护城河"
      ],
      "tier": 100,
      "discoveredAt": "2026-11-23",
      "status": "active"
    },
    {
      "id": "m-s1-opc",
      "group": "四、核心破局建议",
      "track": "一人公司（OPC）+ Agent",
      "tagline": "未来商业终局公式",
      "way": "一人公司雇佣无数个24小时无休的智能体，去做面向全球化的生意。跑通一个闭环后，狠狠把它挖深。",
      "logic": "用Agent放大个人产能，把单一闭环做深做透，形成可规模化的个人商业系统。",
      "source": "用户原文",
      "sourceUrl": "https://www.forbes.com/councils/forbesbusinesscouncil/2026/09/17/one-person-business-no-longer-means-small",
      "level": "进阶",
      "resources": [
        {
          "name": "2026 AI Passive Income Blueprint（自动化数字流水线 $10k/月）",
          "url": "https://www.hustlestackdaily.com/2026/09/the-2026-ai-passive-income-blueprint.html"
        },
        {
          "name": "Automated Growth Flywheel（AI社交销售+免费增值+联盟）",
          "url": "https://www.hustlestackdaily.com/2026/09/the-2026-blueprint-how-to-build_0864779259.html"
        },
        {
          "name": "Solo AI Millionaires：一人企业如何在AI搜索中被引用",
          "url": "https://visibilityai.in/news/solo-ai-millionaires-reveal-how-small-businesses-can-thrive-in-ai-search"
        },
        {
          "name": "六位AI超级个体的真实账本：一人公司怎么赚钱（人人都是产品经理）",
          "url": "https://www.woshipm.com/?p=6464514"
        },
        {
          "name": "AI智能体副业：普通人可落地的4个真实场景（71muke）",
          "url": "http://a.71muke.com/announcement/2026084340"
        },
        {
          "name": "一人公司爆发式增长：AI工具重构最小创业单元（快商业）",
          "url": "http://www.ksye.cn/story/29885-1.html"
        },
        {
          "name": "腾讯网：一人公司+智能体收银员/客服闭环案例（2026-10）",
          "url": "https://new.qq.com/rain/a/20261028A0999L00"
        },
        {
          "name": "普通人如何用AI赚钱：AI智能体与一人公司路径",
          "url": "https://www.toutiao.com/a7696124475368145458"
        }
      ],
      "tools": [
        {
          "name": "n8n",
          "url": "https://docs.n8n.io/hosting/installation/",
          "kind": "开源自托管",
          "note": "开源自动化，把重复流程交给智能体"
        },
        {
          "name": "Dify 社区版",
          "url": "https://docs.dify.ai/getting-started/install-self-hosted/docker-compose",
          "kind": "开源自托管",
          "note": "开源自建 Agent，官方部署指南"
        },
        {
          "name": "Cursor",
          "url": "https://www.cursor.com/downloads",
          "kind": "下载安装",
          "note": "免费版基础额度，加速一人公司交付"
        },
        {
          "name": "Ollama",
          "url": "https://ollama.com/download",
          "kind": "开源自托管",
          "note": "开源免费本地模型，降低长期调用成本"
        },
        {
          "name": "Make",
          "url": "https://www.make.com/",
          "kind": "网页入口",
          "note": "免费层可搭建可视化自动化场景"
        },
        {
          "name": "扣子 Coze",
          "url": "https://www.coze.cn/",
          "kind": "网页入口",
          "note": "个人版免费额度，零代码组建AI员工团队"
        }
      ],
      "tags": [
        "一人公司",
        "AI原生",
        "杠杆"
      ],
      "tier": 100,
      "discoveredAt": "2026-11-23",
      "status": "active"
    },
    {
      "id": "m-faceless-youtube",
      "group": "一、C端轻资产变现",
      "track": "AI 无人出镜 YouTube 频道",
      "tagline": "低门槛长线被动收入",
      "way": "用 AI 撰写高 CPM 领域（财经、科技、健康）脚本，用 ElevenLabs 生成配音，用 InVideo AI/Pictory 自动剪辑素材并加字幕导出，频道达到门槛后通过 AdSense 与联盟营销变现。",
      "logic": "无需出镜录音，AI 把脚本→配音→成片全链路自动化，靠长线内容积累被动流量收入。",
      "source": "网络补充",
      "sourceUrl": "https://aitechhorizon.online/26-Aug-2026-how-to-make-money-with-ai-in-2026.html",
      "level": "入门",
      "resources": [
        {
          "name": "How to Make $100 a Day Using Free AI Tools in 2026",
          "url": "https://aitechhorizon.online/26-Aug-2026-how-to-make-money-with-ai-in-2026.html"
        },
        {
          "name": "Faceless YouTube Channel Guide: AI-Powered Automation 2026",
          "url": "https://aivideoadvisor.com/faceless-youtube-channel-guide-ai-automation/"
        },
        {
          "name": "How to Automate a Faceless YouTube Channel with AI (2026)",
          "url": "https://fluxnote.io/guides/how-to-automate-faceless-youtube-channel-ai-guide-2026"
        },
        {
          "name": "Faceless YouTube Channel with AI: The Complete 2026 Guide",
          "url": "https://www.socialscalehub.com/academy/faceless-youtube-channel-with-ai-the-complete-2026-guide"
        },
        {
          "name": "Faceless YouTube Statistics 2026（变现占比与趋势）",
          "url": "https://frameloop.ai/blog/faceless-youtube-statistics-2026"
        },
        {
          "name": "How to Start a Faceless YouTube Channel with AI（成本拆解）",
          "url": "https://www.genmedialab.com/tutorials/faceless-youtube-channel-ai/"
        }
      ],
      "tools": [
        {
          "name": "ElevenLabs",
          "url": "https://elevenlabs.io/",
          "kind": "网页入口",
          "note": "免费层可生成逼真语音配音"
        },
        {
          "name": "InVideo AI",
          "url": "https://invideo.io/",
          "kind": "网页入口",
          "note": "AI 自动剪辑素材成片"
        },
        {
          "name": "Pictory",
          "url": "https://pictory.ai/",
          "kind": "网页入口",
          "note": "脚本转视频，自动配素材与字幕"
        },
        {
          "name": "Whisper",
          "url": "https://github.com/openai/whisper",
          "kind": "开源自托管",
          "note": "OpenAI 开源免费，本地语音转字幕"
        },
        {
          "name": "可灵AI",
          "url": "https://klingai.com/",
          "kind": "网页入口",
          "note": "官方免费额度，可生成B-roll视频素材"
        },
        {
          "name": "Descript",
          "url": "https://www.descript.com/",
          "kind": "网页入口",
          "note": "免费版可剪辑并自动生成字幕"
        }
      ],
      "tags": [
        "无人出镜",
        "YouTube",
        "被动收入"
      ],
      "tier": 100,
      "discoveredAt": "2026-11-24",
      "status": "active"
    },
    {
      "id": "m-freelance-copywriting",
      "group": "一、C端轻资产变现",
      "track": "AI 自由撰稿代写",
      "tagline": "需求稳定、按篇计费",
      "way": "为博客、商品描述、邮件订阅、社交媒体文案提供代写服务。用 Perplexity 查事实数据，用 ChatGPT 起草，再人工润色加人味，单篇 1000 字可售 $50-$100。",
      "logic": "企业持续需要内容，AI 把撰稿效率提升数倍，靠稳定接单与按篇计费增收。",
      "source": "网络补充",
      "sourceUrl": "https://aitechhorizon.online/26-Aug-2026-how-to-make-money-with-ai-in-2026.html",
      "level": "入门",
      "resources": [
        {
          "name": "How to Make $100 a Day Using Free AI Tools in 2026",
          "url": "https://aitechhorizon.online/26-Aug-2026-how-to-make-money-with-ai-in-2026.html"
        },
        {
          "name": "How to Make Money With AI: Full Guide 2026（GetResponse）",
          "url": "https://www.getresponse.com/blog/how-to-make-money-with-ai"
        },
        {
          "name": "How to Make Money with AI in 2026（Beebom，含撰稿类工具）",
          "url": "https://beebom.com/how-to-make-money-with-ai/"
        },
        {
          "name": "Upwork 2026：AI技能需求+109%对撰稿定价的影响",
          "url": "https://digitalmarket.world/content/trends/D626.html"
        }
      ],
      "tools": [
        {
          "name": "Perplexity AI",
          "url": "https://www.perplexity.ai/",
          "kind": "网页入口",
          "note": "免费层可查事实与数据"
        },
        {
          "name": "ChatGPT",
          "url": "https://chat.openai.com/",
          "kind": "网页入口",
          "note": "免费层可起草文案"
        },
        {
          "name": "秘塔写作猫",
          "url": "https://xiezuocat.com/",
          "kind": "网页入口",
          "note": "免费版可改写润色，部分高级功能收费"
        },
        {
          "name": "讯飞星火",
          "url": "https://xinghuo.xfyun.cn/",
          "kind": "网页入口",
          "note": "官方免费额度，可起草文案"
        },
        {
          "name": "豆包",
          "url": "https://www.doubao.com/",
          "kind": "网页入口",
          "note": "免费使用，可辅助事实核查与改写"
        },
        {
          "name": "扣子 Coze",
          "url": "https://www.coze.cn/",
          "kind": "网页入口",
          "note": "个人版免费额度，可搭建批量撰稿工作流"
        }
      ],
      "tags": [
        "撰稿",
        "代写",
        "自由职业"
      ],
      "tier": 100,
      "discoveredAt": "2026-11-24",
      "status": "active"
    },
    {
      "id": "m-ai-digital-art",
      "group": "一、C端轻资产变现",
      "track": "AI 数字艺术品与印刷品售卖",
      "tagline": "一次制作、持续售卖",
      "way": "用 Leonardo.ai、Bing Image Creator、Midjourney 等生成定制 T 恤图案（上架 Redbubble/Teespring）、数字手账与涂色页（上架 Etsy）、图库插画（上架 Adobe Stock），靠细分需求调研匹配产出。",
      "logic": "AI 出图成本低，找准平台细分需求后可形成被动收入流。",
      "source": "网络补充",
      "sourceUrl": "https://aitechhorizon.online/26-Aug-2026-how-to-make-money-with-ai-in-2026.html",
      "level": "入门",
      "resources": [
        {
          "name": "How to Make $100 a Day Using Free AI Tools in 2026",
          "url": "https://aitechhorizon.online/26-Aug-2026-how-to-make-money-with-ai-in-2026.html"
        },
        {
          "name": "20 AI Digital Products to Sell Online in 2026（含POD与图库平台对比）",
          "url": "https://mavensynergy.com/?p=2514"
        },
        {
          "name": "AI-Generated Digital Products: 5 Real Niche Plays 2026（Etsy/Gumroad 规则）",
          "url": "https://www.automated-income-website.com/make-money-with-ai/ai-generated-digital-products/"
        },
        {
          "name": "AI-Powered Passive Income: Building Zero-Work Digital Products",
          "url": "https://moneymindset.digital/?p=2717"
        },
        {
          "name": "How to Make Money with AI in 2026（Beebom，数字艺术路径）",
          "url": "https://beebom.com/how-to-make-money-with-ai/"
        },
        {
          "name": "Lemon Squeezy 数字商品结算文档",
          "url": "https://docs.lemonsqueezy.com/"
        },
        {
          "name": "a16z：数字商品变现模式数据",
          "url": "https://a16z.com/100-gen-ai-apps-7/"
        }
      ],
      "tools": [
        {
          "name": "Leonardo.ai",
          "url": "https://leonardo.ai/",
          "kind": "网页入口",
          "note": "免费层可生成图形"
        },
        {
          "name": "即梦AI",
          "url": "https://jimeng.jianying.com/",
          "kind": "网页入口",
          "note": "字节官方免费额度，可生成图案与印刷素材"
        },
        {
          "name": "可灵AI",
          "url": "https://klingai.com/",
          "kind": "网页入口",
          "note": "快手官方免费额度，可生成动态视觉素材"
        },
        {
          "name": "ComfyUI",
          "url": "https://github.com/comfyanonymous/ComfyUI",
          "kind": "开源自托管",
          "note": "GPL-3.0 开源免费，本地出图与放大"
        },
        {
          "name": "Stable Diffusion WebUI",
          "url": "https://github.com/AUTOMATIC1111/stable-diffusion-webui",
          "kind": "开源自托管",
          "note": "开源免费，适合批量生成与印刷素材"
        }
      ],
      "tags": [
        "数字艺术",
        "电商",
        "被动收入"
      ],
      "tier": 100,
      "discoveredAt": "2026-11-24",
      "status": "active"
    },
    {
      "id": "m-ai-chatbot-biz",
      "group": "二、B端重服务与解决方案",
      "track": "为本地商家搭建 AI 客服聊天机器人",
      "tagline": "高客单、可续费",
      "way": "用 Chatbase / Voiceflow 基于商家自有网站数据训练 24 小时客服聊天机器人，向商家收取一次性搭建费（约 $200+）与每月维护费（约 $50），每周成交一单即可形成稳定收入。",
      "logic": "本地商家需要 24 小时客服但雇不起全职，AI 聊天机器人零代码搭建，按搭建费+月维护费收费，复购与转介绍稳定。",
      "source": "网络补充",
      "sourceUrl": "https://aitechhorizon.online/26-Aug-2026-how-to-make-money-with-ai-in-2026.html",
      "level": "进阶",
      "resources": [
        {
          "name": "How to Make $100 a Day Using Free AI Tools in 2026",
          "url": "https://aitechhorizon.online/26-Aug-2026-how-to-make-money-with-ai-in-2026.html"
        },
        {
          "name": "2026年AI创富机会：AI聊天机器人开发需求+71%（品传媒）",
          "url": "https://pinnews.com.tw/?p=87726"
        },
        {
          "name": "AI智能体副业：垂直行业小助手定制（71muke，含收费参考）",
          "url": "http://a.71muke.com/announcement/2026084340"
        },
        {
          "name": "腾讯网：基于知识库搭建客服智能体的实操（2026-10）",
          "url": "https://new.qq.com/rain/a/20261028A0999L00"
        },
        {
          "name": "AI副业复盘：给SaaS团队接入RAG与Agent的顾问模式",
          "url": "https://aibotgo.net/blog/ai-side-hustle-reality-check-2026"
        }
      ],
      "tools": [
        {
          "name": "Voiceflow",
          "url": "https://www.voiceflow.com/",
          "kind": "网页入口",
          "note": "对话式 AI 工作流搭建"
        },
        {
          "name": "扣子 Coze",
          "url": "https://www.coze.cn/",
          "kind": "网页入口",
          "note": "个人版免费额度，可搭建客服智能体"
        },
        {
          "name": "Dify 社区版",
          "url": "https://docs.dify.ai/getting-started/install-self-hosted/docker-compose",
          "kind": "开源自托管",
          "note": "Apache 2.0 开源，官方Docker部署文档"
        },
        {
          "name": "腾讯云智能体开发平台 ADP",
          "url": "https://cloud.tencent.com/product/adp",
          "kind": "网页入口",
          "note": "元器停服后的官方替代，可免费领取使用权益（以官网为准）"
        },
        {
          "name": "n8n",
          "url": "https://docs.n8n.io/hosting/installation/",
          "kind": "开源自托管",
          "note": "公平代码许可，可自托管免费使用"
        }
      ],
      "tags": [
        "本地商家",
        "聊天机器人",
        "B端"
      ],
      "tier": 100,
      "discoveredAt": "2026-11-24",
      "status": "active"
    },
    {
      "id": "m-personal-ip",
      "group": "一、C端轻资产变现",
      "track": "用 AI 做个人 IP，零成本建立影响力",
      "tagline": "影响力即资产、变现方式多样",
      "way": "用 Claude/GPT 做内容规划与批量初稿，Canva AI 做封面，剪映 AI 做短视频，人工润色加入个人经历与观点，多平台分发，粉丝积累后接商单、卖课程、做付费社群。",
      "logic": "影响力就是钱，AI 把内容产出效率拉满，靠长期稳定输出积累可变现的受众资产。",
      "source": "网络补充",
      "sourceUrl": "https://ima.qq.com/wiki/?shareId=5290662a81503203bcfb3020826556eca932dad8e8508405b17703b02baae921",
      "level": "进阶",
      "resources": [
        {
          "name": "用 AI 做个人 IP，零成本建立影响力（7 天启动步骤）",
          "url": "https://ima.qq.com/wiki/?shareId=5290662a81503203bcfb3020826556eca932dad8e8508405b17703b02baae921"
        },
        {
          "name": "教别人用AI，我赚翻了（人人都是产品经理访谈）",
          "url": "https://www.woshipm.com/ai/6467113.html"
        },
        {
          "name": "5个用AI挣钱的人：影响力与陪跑服务的变现路径",
          "url": "https://www.toutiao.com/article/7707038341266407970/"
        },
        {
          "name": "20 AI Digital Products：把一种产品拆成多种格式的IP放大法",
          "url": "https://mavensynergy.com/?p=2514"
        }
      ],
      "tools": [
        {
          "name": "Claude",
          "url": "https://claude.ai/",
          "kind": "网页入口",
          "note": "免费层可写文章与内容规划"
        },
        {
          "name": "Canva AI",
          "url": "https://www.canva.com/",
          "kind": "网页入口",
          "note": "免费层做封面与配图"
        },
        {
          "name": "剪映 AI",
          "url": "https://www.capcut.cn/",
          "kind": "下载安装",
          "note": "图文转视频、自动字幕"
        },
        {
          "name": "秘塔写作猫",
          "url": "https://xiezuocat.com/",
          "kind": "网页入口",
          "note": "免费版可去AI味润色，部分高级功能收费"
        },
        {
          "name": "扣子 Coze",
          "url": "https://www.coze.cn/",
          "kind": "网页入口",
          "note": "个人版免费额度，可做选题与内容规划智能体"
        },
        {
          "name": "讯飞星火",
          "url": "https://xinghuo.xfyun.cn/",
          "kind": "网页入口",
          "note": "官方免费额度，可批量生成内容初稿"
        }
      ],
      "tags": [
        "个人IP",
        "内容",
        "多平台"
      ],
      "tier": 100,
      "discoveredAt": "2026-11-24",
      "status": "active"
    },
    {
      "id": "m-c1-manju",
      "group": "一、C端轻资产变现",
      "track": "AI漫剧代工与剪映模板售卖",
      "tagline": "单价高、可沉淀数字资产",
      "way": "AI漫剧代工接单（新手单集 80-150 元，熟练后 200-400 元，10 集成套 800-1500 元）；同时制作剪映工程文件模板（.剪proj）在闲鱼售卖，单套 9.9-19.9 元，合集包 29.9-49.9 元。剪映模板分两条独立路线：官方模板广场拿平台分成，闲鱼卖工程源文件，互不冲突。",
      "logic": "用 AI 工作流把漫剧/模板制作成本压到极低，代工赚现钱、模板赚被动收入，双线并行、持续铺量。",
      "source": "网络补充",
      "sourceUrl": "https://www.woshipm.com/ai/6461537.html",
      "level": "入门",
      "resources": [
        {
          "name": "2026 AI副业落地全攻略：接单平台分成，避开高门槛坑（公众号原文）",
          "url": "http://mp.weixin.qq.com/s?__biz=MzY4OTUxNjA1Mw==&mid=2247483671&idx=1&sn=16f331a1a90a7fe56e8dbd06f3cfd5a1&chksm=f2c892c7618c5c2c08bfdbba6b83abad663725f7929262c9393a274e299be66080996e52d84a#rd"
        },
        {
          "name": "漫剧从0到1五步流程与报价（人人都是产品经理）",
          "url": "https://www.woshipm.com/ai/6461537.html"
        },
        {
          "name": "做 AI 短剧的人在愁什么：单集算力与 Skills 资产",
          "url": "https://www.woshipm.com/share/6472107.html"
        },
        {
          "name": "Dify 工作流 101",
          "url": "https://docs.dify.ai/zh/learn/tutorials/workflow-101/lesson-01.md"
        },
        {
          "name": "Dify 快速入门",
          "url": "https://docs.dify.ai/zh/quick-start.md"
        },
        {
          "name": "n8n 自托管文档",
          "url": "https://docs.n8n.io/hosting/"
        },
        {
          "name": "可灵 AI 官方免费额度",
          "url": "https://klingai.com/"
        }
      ],
      "tools": [
        {
          "name": "剪映专业版",
          "url": "https://www.capcut.cn/",
          "kind": "下载安装",
          "note": "免费；制作 .剪proj 工程模板售卖或上架官方模板广场拿分成"
        },
        {
          "name": "即梦AI",
          "url": "https://jimeng.jianying.com/",
          "kind": "网页入口",
          "note": "免费额度内生图，适配国内平台审核规则"
        },
        {
          "name": "ComfyUI",
          "url": "https://github.com/comfyanonymous/ComfyUI",
          "kind": "开源自托管",
          "note": "GPL-3.0 开源免费，可本地生成漫剧分镜"
        },
        {
          "name": "Whisper",
          "url": "https://github.com/openai/whisper",
          "kind": "开源自托管",
          "note": "MIT 开源免费，本地转写与配音字幕"
        },
        {
          "name": "FFmpeg",
          "url": "https://www.ffmpeg.org/download.html",
          "kind": "开源自托管",
          "note": "开源免费，批量转码与合成"
        }
      ],
      "tags": [
        "AI漫剧",
        "短剧代工",
        "剪映模板"
      ],
      "tier": 50,
      "discoveredAt": "2026-11-25",
      "status": "active"
    },
    {
      "id": "m-c1-tool-orders",
      "group": "一、C端轻资产变现",
      "track": "AI工具接单与服务赋能",
      "tagline": "零门槛起步，碎片时间可做",
      "way": "用 AI 做文档整理、表格、思维导图、简历优化、述职材料等办公代做；在小红书、闲鱼、知乎等平台发布作品案例接单，前期低价引流积累口碑，熟练后做 AI 咨询与小工具定制。也可把实测筛选过的提示词包、模板资料包上架售卖，一次整理反复成交。",
      "logic": "AI 把内容产出效率提升 10 倍以上，靠高频输出、稳定交付与口碑积累实现持续增收。",
      "source": "网络补充",
      "sourceUrl": "https://upwork.com/resources/ai-tools-for-developers",
      "level": "入门",
      "resources": [
        {
          "name": "如何搭上 AI 行业的风口赚钱：普通人零门槛搞钱实操指南（今日头条）",
          "url": "https://www.toutiao.com/article/7705747690818109952"
        },
        {
          "name": "黄仁勋的提醒：靠AI赚到100万思路并不复杂，真正难的是落地执行（今日头条）",
          "url": "https://www.toutiao.com/a7703172259317301760"
        },
        {
          "name": "Upwork 开发者 AI 工具清单（含免费层）",
          "url": "https://upwork.com/resources/ai-tools-for-developers"
        },
        {
          "name": "Upwork 月度招聘洞察（AI 自动化居首）",
          "url": "https://upwork.com/research/upwork-monthly-hiring-insights-august-2026"
        },
        {
          "name": "a16z：B2A 经济，Agent 成为新客户",
          "url": "https://a16z.com/welcome-to-the-b2a-economy/"
        },
        {
          "name": "Dify Cloud 免费 Sandbox",
          "url": "https://docs.dify.ai/zh/cloud/use-dify/getting-started/introduction.md"
        },
        {
          "name": "n8n 免费社区版文档",
          "url": "https://docs.n8n.io/hosting/"
        }
      ],
      "tools": [
        {
          "name": "闲鱼",
          "url": "https://www.goofish.com/",
          "kind": "网页入口",
          "note": "免费开店，上架提示词包、模板与代做服务"
        },
        {
          "name": "豆包",
          "url": "https://www.doubao.com/",
          "kind": "网页入口",
          "note": "官方免费版，可辅助写方案与脚本"
        },
        {
          "name": "扣子 Coze",
          "url": "https://www.coze.cn/",
          "kind": "网页入口",
          "note": "个人版有免费额度，可零代码搭建交付工作流"
        },
        {
          "name": "GitHub",
          "url": "https://github.com/",
          "kind": "网页入口",
          "note": "免费公开仓库，可托管 Skill 与交付模板"
        },
        {
          "name": "小红书",
          "url": "https://www.xiaohongshu.com/",
          "kind": "网页入口",
          "note": "免费注册发布，用于内容获客"
        }
      ],
      "tags": [
        "AI接单",
        "工具赋能",
        "自由职业"
      ],
      "tier": 50,
      "discoveredAt": "2026-11-25",
      "status": "active"
    },
    {
      "id": "m-c1-shortvideo",
      "group": "一、C端轻资产变现",
      "track": "垂类AI短视频与出海带货",
      "tagline": "低成本讲故事，杠杆最大",
      "way": "选一个熟悉的垂类，用 AI 批量生产内容每周发 5-7 条，靠测试密度找爆款结构；或用 AI 做有剧情的短剧/短片带出话题再植入产品；进阶可做 TikTok Shop 出海，用 AI 生成产品展示视频、英文配音与本地化脚本，挂联盟商品拿佣金。",
      "logic": "AI 把「讲故事」成本降到人人可负担，垂类账号沉淀私域变现，出海赛道竞争密度低、天花板更高。",
      "source": "网络补充",
      "sourceUrl": "https://www.woshipm.com/share/6472107.html",
      "level": "进阶",
      "resources": [
        {
          "name": "180元拍了一条AI短视频，带出50亿话题——普通人的机会来了（觉醒学院）",
          "url": "https://www.jxxy.net/ai/articles/Shenmeili1213-2065745435936112807"
        },
        {
          "name": "短剧行业成本与 Skills 玩法复盘",
          "url": "https://www.woshipm.com/share/6472107.html"
        },
        {
          "name": "HeyGen 官方免费档说明",
          "url": "https://heygen.com/pricing"
        },
        {
          "name": "HeyGen 数字人平台对比",
          "url": "https://heygen.com/blog/best-ai-avatar-platform-corporate-training-videos"
        },
        {
          "name": "Upwork 月度招聘洞察：AI 视频需求",
          "url": "https://upwork.com/research/upwork-monthly-hiring-insights-september-2026"
        },
        {
          "name": "a16z：AI 流量与订单增长数据",
          "url": "https://a16z.com/welcome-to-the-b2a-economy/"
        }
      ],
      "tools": [
        {
          "name": "即梦AI",
          "url": "https://jimeng.jianying.com/",
          "kind": "网页入口",
          "note": "AI 视频/生图，免费额度内可用"
        },
        {
          "name": "CapCut 国际版",
          "url": "https://www.capcut.com/",
          "kind": "网页入口",
          "note": "免费版可导出，部分素材带水印"
        },
        {
          "name": "ElevenLabs",
          "url": "https://elevenlabs.io/",
          "kind": "网页入口",
          "note": "免费层有配音额度，超出需付费"
        },
        {
          "name": "Whisper",
          "url": "https://github.com/openai/whisper",
          "kind": "开源自托管",
          "note": "MIT 开源免费，本地批量字幕"
        }
      ],
      "tags": [
        "短剧出海",
        "AI视频",
        "带货"
      ],
      "tier": 50,
      "discoveredAt": "2026-11-25",
      "status": "active"
    },
    {
      "id": "m-c1-digital-assets",
      "group": "一、C端轻资产变现",
      "track": "AI数字资产与被动收益",
      "tagline": "一次制作，多次售卖",
      "way": "用 AI 批量制作可重复售卖的数字素材：职场 PPT 模板、Excel 表格模板、短视频脚本模板、朋友圈文案、育儿素材等，整理成完整素材包上架闲鱼、小红书、知识星球等平台售卖，一次制作长期被动成交。",
      "logic": "把 AI 产出标准化为可复制的数字资产，前期集中铺量、后期只维护店铺，实现复利式被动收入。",
      "source": "网络补充",
      "sourceUrl": "https://a16z.com/100-gen-ai-apps-7/",
      "level": "入门",
      "resources": [
        {
          "name": "黄仁勋的提醒：靠AI赚到100万思路并不复杂，真正难的是落地执行（今日头条）",
          "url": "https://www.toutiao.com/a7703172259317301760"
        },
        {
          "name": "Lemon Squeezy 官方文档",
          "url": "https://docs.lemonsqueezy.com/"
        },
        {
          "name": "a16z：100 个生成式 AI 应用的收费模式（84% 订阅 / 64% 按量）",
          "url": "https://a16z.com/100-gen-ai-apps-7/"
        },
        {
          "name": "Forbes：一人公司案例与真实规模数据",
          "url": "https://www.forbes.com/councils/forbesbusinesscouncil/2026/09/17/one-person-business-no-longer-means-small"
        },
        {
          "name": "Stable Diffusion WebUI 开源仓库",
          "url": "https://github.com/AUTOMATIC1111/stable-diffusion-webui"
        },
        {
          "name": "Dify 开源仓库",
          "url": "https://github.com/langgenius/dify"
        }
      ],
      "tools": [
        {
          "name": "知识星球",
          "url": "https://www.zsxq.com/",
          "kind": "网页入口",
          "note": "免费注册，可上架付费素材包与专栏"
        },
        {
          "name": "豆包",
          "url": "https://www.doubao.com/",
          "kind": "网页入口",
          "note": "官方免费版，辅助素材文案与选题"
        },
        {
          "name": "腾讯文档",
          "url": "https://docs.qq.com/",
          "kind": "网页入口",
          "note": "免费版可协作与交付说明文档"
        },
        {
          "name": "Gumroad",
          "url": "https://gumroad.com/",
          "kind": "网页入口",
          "note": "免费注册上架，成交后平台抽成"
        },
        {
          "name": "GitHub",
          "url": "https://github.com/",
          "kind": "网页入口",
          "note": "免费公开仓库，可分发开源数字素材"
        }
      ],
      "tags": [
        "数字资产",
        "被动收益",
        "订阅"
      ],
      "tier": 50,
      "discoveredAt": "2026-11-25",
      "status": "active"
    },
    {
      "id": "m-ai-neutral-stack-advisor",
      "group": "二、B端重服务与解决方案",
      "track": "AI工具中立部署顾问",
      "tagline": "2026 下半年最确定的红利之一",
      "way": "为中小企业搭建「不依赖单一供应商」的多模型工具栈（OpenRouter / 本地 Ollama + 多模型路由）并做应急预案，避免被任何一家大模型公司卡脖子；由 OpenAI 切断 Cursor 等事件催生的确定性新需求。",
      "logic": "需求刚性、客单高、方案可复用，模型供应收紧时需求会反复出现，单人可承接高客单咨询与部署。",
      "source": "网络文章",
      "sourceUrl": "https://a16z.com/100-gen-ai-apps-7/",
      "level": "进阶",
      "resources": [
        {
          "name": "AI 工具中立部署 / 多模型迁移顾问服务（每日日报 2026-11-02）",
          "url": "https://www.winkids.tech/article/146"
        },
        {
          "name": "a16z：多模型路由与中立选型优势",
          "url": "https://a16z.com/100-gen-ai-apps-7/"
        },
        {
          "name": "LiteLLM 开源多模型网关",
          "url": "https://github.com/BerriAI/litellm"
        }
      ],
      "tools": [
        {
          "name": "OpenRouter",
          "url": "https://openrouter.ai/",
          "kind": "网页入口",
          "note": "多模型聚合路由，统一接入多家模型"
        },
        {
          "name": "LiteLLM",
          "url": "https://github.com/BerriAI/litellm",
          "kind": "开源自托管",
          "note": "MIT 开源免费，统一多模型接口"
        },
        {
          "name": "Dify",
          "url": "https://github.com/langgenius/dify",
          "kind": "开源自托管",
          "note": "Apache-2.0 开源免费，可自托管 Agent 平台"
        }
      ],
      "tags": [
        "中立部署",
        "多模型路由",
        "B端服务"
      ],
      "tier": 50,
      "discoveredAt": "2026-11-25",
      "status": "active"
    },
    {
      "id": "m-ai-local-merchant-service",
      "group": "二、B端重服务与解决方案",
      "track": "AI便民技能服务（本地商家代运营）",
      "tagline": "冷门、竞争小、需求大",
      "way": "对接本地实体店与小商家的线上宣传需求：用 AI 改写朋友圈文案、店铺简介、团购话术，批量剪辑店铺宣传短视频与产品介绍视频，优化线上店铺图文；单店每月几百到一千元，一天可对接 3-5 家。",
      "logic": "商家普遍不会线上引流、雇人成本高，AI 代运营属刚需服务，复购率高、可长期稳定做，单人即可规模化对接。",
      "source": "网络文章",
      "sourceUrl": "https://a16z.com/welcome-to-the-b2a-economy/",
      "level": "进阶",
      "resources": [
        {
          "name": "AI 便民技能服务对接本地小商家需求（今日头条）",
          "url": "https://www.toutiao.com/a7704320026731446799"
        },
        {
          "name": "AI 数字人无人直播带货（同一来源的延伸赛道）",
          "url": "https://www.toutiao.com/a7704320026731446799"
        },
        {
          "name": "AI 漫剧与短视频代工全流程",
          "url": "https://www.woshipm.com/ai/6461537.html"
        },
        {
          "name": "a16z：B2A 本地商家入口",
          "url": "https://a16z.com/welcome-to-the-b2a-economy/"
        }
      ],
      "tools": [
        {
          "name": "剪映专业版",
          "url": "https://www.capcut.cn/",
          "kind": "下载安装",
          "note": "免费剪辑，批量产出店铺短视频"
        },
        {
          "name": "豆包",
          "url": "https://www.doubao.com/",
          "kind": "网页入口",
          "note": "生成文案与话术初稿"
        },
        {
          "name": "即梦 AI",
          "url": "https://jimeng.jianying.com/",
          "kind": "网页入口",
          "note": "生成海报与配图"
        },
        {
          "name": "抖音来客",
          "url": "https://life.douyin.com/",
          "kind": "网页入口",
          "note": "免费入驻，管理本地商家线索与团购"
        }
      ],
      "tags": [
        "本地商家",
        "代运营",
        "线索获客"
      ],
      "tier": 50,
      "discoveredAt": "2026-11-25",
      "status": "active"
    },
    {
      "id": "m-b1-agentic-commerce",
      "group": "二、B端重服务与解决方案",
      "track": "AI Agent 商务入口优化（B2A / Agentic Commerce）",
      "tagline": "让 Agent 替用户完成评估与下单",
      "way": "为品牌接入商品源、连接器与 MCP，优化被 Agent 选中、引用与结算的全路径。",
      "logic": "a16z 2026-11 指出 GEO 只解决「发现」，Agent 正向评估与购买延伸；其文中引用 Shopify AI 流量同比 8 倍、AI 搜索订单近 13 倍。",
      "source": "网络更新",
      "sourceUrl": "https://a16z.com/welcome-to-the-b2a-economy/",
      "level": "高阶",
      "resources": [
        {
          "name": "a16z：Welcome to the B2A Economy",
          "url": "https://a16z.com/welcome-to-the-b2a-economy/"
        },
        {
          "name": "a16z：100 Gen AI Apps 收费模式",
          "url": "https://a16z.com/100-gen-ai-apps-7/"
        },
        {
          "name": "Stripe 按量计费文档",
          "url": "https://docs.stripe.com/billing/subscriptions/usage-based"
        },
        {
          "name": "Upwork：Agent 开发者需求洞察",
          "url": "https://upwork.com/research/upwork-monthly-hiring-insights-september-2026"
        }
      ],
      "tools": [
        {
          "name": "Stripe",
          "url": "https://stripe.com/",
          "kind": "网页入口",
          "note": "免费注册，按交易收费"
        },
        {
          "name": "Supabase",
          "url": "https://supabase.com/",
          "kind": "网页入口",
          "note": "开源免费层，免费额度适配原型"
        },
        {
          "name": "n8n",
          "url": "https://docs.n8n.io/hosting/",
          "kind": "开源自托管",
          "note": "免费社区版，可自托管商品同步流程"
        }
      ],
      "tags": [
        "B2A",
        "Agentic Commerce",
        "MCP",
        "GEO延伸"
      ],
      "tier": 50,
      "discoveredAt": "2026-11-25",
      "status": "active"
    }
  ],
  "news": [
    {
      "date": "2026-11-24",
      "title": "神机工作台新增 AI 新闻资讯与项目展示板块",
      "summary": "工作台上线「AI 新闻资讯」与「项目展示」两大新板块：新闻板块每日全网搜索当天 AI 资讯动态并自动去重追加；项目板块收录赛博命理、小道道·命理小筑、上帝AI工作台、招财天团四个项目，并支持一键添加新项目。",
      "url": "https://shenji-resource-workbench.app.workbuddy.host/?sharecode=LWIAFQPA2A",
      "source": "神机工作台"
    },
    {
      "date": "2026-11-24",
      "title": "我国牵头推动全球首个生成式人工智能治理国际标准提案",
      "summary": "市场监管总局发布会披露，我国牵头研制29项基础共性国际标准，并联合多国编制《信息技术 人工智能 生成式人工智能风险应对指南》，系全球首个生成式AI治理国际标准提案，覆盖深度伪造、模型投毒等共性风险。",
      "url": "https://ysxw.cctv.cn/article.html?toc_style_id=feeds_default&item_id=6398958038065858928&channelId=1119",
      "source": "央视新闻"
    },
    {
      "date": "2026-11-24",
      "title": "我国牵头制定的人工智能数据质量国际标准被欧盟采纳",
      "summary": "我国已发布15项人工智能国家标准外文版，牵头制定的《人工智能分析和机器学习的数据质量 第4部分》被欧盟采纳为AI合规评估重要技术参考，78项国标将成体系向12个语种转化，降低大模型与算力出海认证成本。",
      "url": "https://ysxw.cctv.cn/article.html?toc_style_id=feeds_default&item_id=13236240966611172357&channelId=1119",
      "source": "央视新闻"
    },
    {
      "date": "2026-11-24",
      "title": "黄仁勋重返英伟达任CEO，称第二次当CEO会做得更好",
      "summary": "黄仁勋恢复英伟达总裁、首席执行官及董事职务后重返圣克拉拉总部，受到员工热烈欢迎；消息公布后英伟达股价单日大涨31.48%，带动全球AI资产风险偏好修复。",
      "url": "https://news.qq.com/rain/a/20261124A03L2D00",
      "source": "腾讯新闻"
    },
    {
      "date": "2026-11-24",
      "title": "美国俄勒冈、弗吉尼亚两州起诉xAI，指控Grok纵容生成未经同意的性化图片",
      "summary": "两州总检察长分别对马斯克旗下SpaceX及相关实体提起诉讼，指控X平台和Grok未有效阻止生成、传播未经当事人同意的性化图片（其中涉及未成年人），并对平台安全性作误导性宣传。",
      "url": "https://news.qq.com/rain/a/20261124A03L2D00",
      "source": "腾讯新闻"
    },
    {
      "date": "2026-11-24",
      "title": "智谱发布GLM-5.4：首个Loop Transformer旗舰模型，新增视觉与泛Coding能力",
      "summary": "智谱GLM-5.4在GLM-5基座上让28层共享权重循环执行两轮，以循环架构换取更深推理，官方称智能水平达到2-3T级模型效果，并开启覆盖视频、游戏、3D着色器与CAD建模的泛Coding能力。",
      "url": "https://www.sohu.com/a/1105377210_123054285",
      "source": "搜狐科技"
    },
    {
      "date": "2026-11-24",
      "title": "Anthropic推出Claude Ship：AI可审查、修复并批准代码Pull Request",
      "summary": "Anthropic上线Claude Ship测试版，整合代码审查、冲突处理与自动审批三项能力，AI从写代码进一步走到批准合并，团队版与企业版按Token计费，企业可设置使用上限控制流程。",
      "url": "https://aitoolsrecap.com/Blog/ai-news-november-24-2026",
      "source": "AIToolsRecap"
    },
    {
      "date": "2026-11-24",
      "title": "谷歌DeepMind多智能体协同优化量子算法，子程序最高提速290倍",
      "summary": "DeepMind与Google Quantum AI以多组Gemini 4智能体协同生成量子电路，并用Lean形式化验证保证正确性，聚变关键属性计算成本降11.8倍，反正弦子程序最高提速290倍，相关Lean库已开源。",
      "url": "https://itstimeai.com.au/blog/ai-news-roundup-24-november-2026",
      "source": "ItsTimeAI"
    },
    {
      "date": "2026-11-24",
      "title": "蚂蚁集团开源LingSante-3.1医疗大模型，双尺寸均以MIT许可发布",
      "summary": "蚂蚁百灵以MIT许可开源LingSante-3.1系列：flash版560B总参、约25B激活、1M上下文，air-VL版124B总参、5.5B激活、256K上下文，支持文本与图像输入，面向医疗推理与工作流执行。",
      "url": "https://aitoolsrecap.com/Blog/ai-news-november-24-2026",
      "source": "AIToolsRecap"
    },
    {
      "date": "2026-11-24",
      "title": "我国正式启动具身智能数据国家标准研制，十五五将形成20余项国标",
      "summary": "国家数据局披露，具身智能数据国家标准研制正式启动，十五五期间将陆续形成20余项专项国家标准并同步开展试点验证，面向人形机器人、特种作业机器人、工业协作机械臂等应用场景。",
      "url": "https://www.163.com/dy/article/LCGMELBL05199NPP.html",
      "source": "21世纪经济报道"
    },
    {
      "date": "2026-11-24",
      "title": "外媒关注中国AI机器人为上岗做准备，具身智能加速进入真实场景",
      "summary": "参考消息援引法新社报道，深圳智平方200台人形服务机器人已投入使用，机器人咖啡师单日最多售出300杯咖啡；官方数据显示2026年前5月工业企业购进具身智能机器人金额同比增长2.3倍。",
      "url": "https://www.163.com/dy/article/LCGRN5U10514BQ68.html",
      "source": "参考消息"
    },
    {
      "date": "2026-11-24",
      "title": "工信部：我国人工智能开源大模型全球累计下载量突破100亿次",
      "summary": "工信部数据显示，我国AI开源大模型全球累计下载量突破100亿次，下载量与衍生模型数量领跑；月之暗面公布Kimi K3.1 Pro完整模型权重，腾讯混元发布新一代大模型Hy4。",
      "url": "https://so.html5.qq.com/page/real/search_news?docid=70000021_3856b02378239752",
      "source": "人民日报客户端"
    },
    {
      "date": "2026-11-24",
      "title": "OpenAI将GPT-6.2 Sol推送至ChatGPT主入口，GPT-5.6 Sol与Terra将于12月退役",
      "summary": "GPT-6.2 Sol面向Plus、Pro、Business、Enterprise全量推送，带来复杂指令理解、图像细节与标签文字识别等改进；GPT-5.6 Sol与Terra定于12月23日退役以释放算力。",
      "url": "http://mp.weixin.qq.com/s?__biz=MzAwMTExODAwOQ==&mid=2448766690&idx=1&sn=f9dff8294ebeedcbe9d20e8644390ca0&chksm=8f65d72375ae969abb11c105887ba1799f88707dab7964b6b2f024ff5422bb1ea4dd85289206#rd",
      "source": "IT之家"
    },
    {
      "date": "2026-11-24",
      "title": "OpenAI与思科开源Shirudo：为Linux系统提供免重启临时漏洞防护",
      "summary": "OpenAI与思科联合发布Shirudo，基于eBPF在运行中的系统上布设临时防护盾，无需重启即可拦截漏洞利用，已通过Java4Shell攻击拦截测试，采用BSD 2-Clause许可。",
      "url": "http://mp.weixin.qq.com/s?__biz=MzAwMTExODAwOQ==&mid=2448766690&idx=1&sn=f9dff8294ebeedcbe9d20e8644390ca0&chksm=8f65d72375ae969abb11c105887ba1799f88707dab7964b6b2f024ff5422bb1ea4dd85289206#rd",
      "source": "IT之家"
    },
    {
      "date": "2026-11-25",
      "title": "黄仁勋复职后首次召开全员大会，称英伟达不需要接班人计划",
      "summary": "黄仁勋在复职后首次员工全员大会上就此前导致辞职的行为向员工道歉，承认犯下严重个人错误，并表示英伟达拥有多位能干的领导者，不需要常规的接班人计划。",
      "url": "https://so.html5.qq.com/page/real/search_news?docid=70000021_5186b0634ec28552",
      "source": "每日经济新闻"
    },
    {
      "date": "2026-11-25",
      "title": "Anthropic上市第四个交易日收跌6.54%，正式跌破83美元IPO发行价",
      "summary": "Anthropic上市第四个交易日收跌6.54%、报81.905美元，正式跌破83美元IPO发行价，盘后继续走低，市场对其高估值的接受程度仍存分歧。",
      "url": "https://so.html5.qq.com/page/real/search_news?docid=70000021_5186b0634ec28552",
      "source": "每日经济新闻"
    },
    {
      "date": "2026-11-25",
      "title": "戴尔第三财季营收同比增长103%，AI服务器积压订单达1323亿美元创新高",
      "summary": "戴尔2027财年第三季度营收549.37亿美元、同比增长103%，AI优化服务器业务收入同比增长291%，当季新增AI服务器订单602亿美元，期末积压订单1323亿美元均创历史新高。",
      "url": "https://so.html5.qq.com/page/real/search_news?docid=70000021_5186b0634ec28552",
      "source": "每日经济新闻"
    },
    {
      "date": "2026-11-25",
      "title": "DXC与Anthropic推出AI代码安全服务Frontier Code Assurance",
      "summary": "全球IT服务商DXC推出基于Anthropic Claude模型的托管式代码安全服务，可识别、验证企业软件中的安全漏洞并协助修复，补足传统安全扫描工具可能遗漏的漏洞。",
      "url": "https://so.html5.qq.com/page/real/search_news?docid=70000021_5186b0634ec28552",
      "source": "每日经济新闻"
    },
    {
      "date": "2026-11-25",
      "title": "OpenAI与Anthropic内部开始讨论停训，未发布前沿模型被指难以安全发布",
      "summary": "Axios援引二十余名知情人士报道，OpenAI与Anthropic内部未发布的前沿模型能力增长超出现有控制手段，部分员工主张暂停训练更强模型或停止公开发布；OpenAI称新安全准则可能放缓前沿模型发布节奏。",
      "url": "https://k.sina.com.cn/article_5953189932_162d6782c0670554ol.html",
      "source": "机器之心"
    },
    {
      "date": "2026-11-25",
      "title": "Meta个人智能体Muse登陆英国，面向18岁以上用户开放",
      "summary": "Meta宣布其个人智能体Muse向英国18岁以上用户开放，可通过手机、网页与WhatsApp跨服务代办任务，发送邮件或购买前须经用户批准，Muse在美国下载量已超1000万次。",
      "url": "https://www.aiimpacthub.com/ai-news/2026-11-25",
      "source": "AI Impact Hub"
    },
    {
      "date": "2026-11-25",
      "title": "Meta FAIR开源AgentBox，面向HPC与Slurm的多智能体容器编排器",
      "summary": "Meta FAIR发布AgentBox，基于Apptainer在Linux与Slurm集群上运行隔离的智能体容器，面向无需root权限的多智能体HPC研究场景，已在GitHub开源。",
      "url": "https://www.explainx.ai/catch-up-on-ai/2026-11-25",
      "source": "ExplainX"
    },
    {
      "date": "2026-11-25",
      "title": "Sakana发布30B推理模型Namazu Small，25项基准测试超越Nemotron 3 Super",
      "summary": "Sakana AI发布30B参数推理模型Namazu Small，基于英伟达Nemotron 3 Nano基座继续预训练与后训练，官方称在25项基准测试上超越Nemotron 3 Super，详细部署信息将于12月初公布。",
      "url": "https://www.explainx.ai/catch-up-on-ai/2026-11-25",
      "source": "ExplainX"
    },
    {
      "date": "2026-11-25",
      "title": "亚马逊签署协议收购Decart优化技术与团队",
      "summary": "亚马逊宣布已签署协议收购Decart的专有优化技术栈（Decart Optimization Stack），并将Decart创始人与团队纳入亚马逊，交易尚待监管等交割条件完成，未披露收购金额。",
      "url": "https://www.aiimpacthub.com/ai-news/2026-11-25",
      "source": "AI Impact Hub"
    },
    {
      "date": "2026-11-25",
      "title": "上海团队发布全球首个记忆原生大模型MemT1.0 Pro，长历史记忆评测登顶",
      "summary": "上海记忆张量联合英伟达发布MemT1.0 Pro，以原生记忆模块实现快慢双记忆，两项长历史记忆评测与综合得分排名世界第一，实测任务完成率提升约30%、Token消耗降低60%至70%。",
      "url": "https://so.html5.qq.com/page/real/search_news?docid=70000021_5676b05138f47452",
      "source": "看看新闻"
    },
    {
      "date": "2026-11-25",
      "title": "MiniMax发布H3 Family模型矩阵，视频生成低至0.16元/秒起",
      "summary": "MiniMax发布H3 Family模型矩阵，涵盖H3与H3-Image系列旗舰及多个扩展模型，视频生成三档定价0.5元、0.26元、0.16元每秒，H3开源百天衍生模型1472个、下载量超1.48亿次。",
      "url": "http://mp.weixin.qq.com/s?__biz=MzkxOTAwMjQ3OA==&mid=2247485726&idx=1&sn=6fcfe732f11d2adee7d7f59767040c50&chksm=c0c25e85ddad9219410998c0f8ac08a4d01d59e72668e123119dd4178477e467e245def46ecba#rd",
      "source": "观点网"
    },
    {
      "date": "2026-11-25",
      "title": "DeepSeek完成约1055亿元第二轮融资，投后估值约6078亿元",
      "summary": "DeepSeek近日完成工商变更，本轮外部融资统一持股平台新增31名合伙人，市场消息称此轮融资合计募集约1055亿元、投后估值约6078亿元，合伙人涵盖中国移动、腾讯、美团等产业资本。",
      "url": "http://mp.weixin.qq.com/s?__biz=MzkxOTAwMjQ3OA==&mid=2247485726&idx=1&sn=6fcfe732f11d2adee7d7f59767040c50&chksm=c0c25e85ddad9219410998c0f8ac08a4d01d59e72668e123119dd4178477e467e245def46ecba#rd",
      "source": "21财经"
    },
    {
      "date": "2026-11-25",
      "title": "商汤开源SenseNova U1.6多模态模型，8B首次引入原生图像自修正",
      "summary": "商汤科技发布并开源原生多模态模型SenseNova U1.6，首次为8B开源模型引入原生图像自修正能力，可对照原始提示检查并自动修正文字模糊、错字乱码等问题，UltraTextBench密集信息图得分升至92.28。",
      "url": "http://mp.weixin.qq.com/s?__biz=MzkxOTAwMjQ3OA==&mid=2247485726&idx=1&sn=6fcfe732f11d2adee7d7f59767040c50&chksm=c0c25e85ddad9219410998c0f8ac08a4d01d59e72668e123119dd4178477e467e245def46ecba#rd",
      "source": "腾讯新闻"
    },
    {
      "date": "2026-11-25",
      "title": "字节跳动AI个人助理小豆开启邀请制公测",
      "summary": "字节跳动旗下豆包AI个人助理产品小豆正式开启邀请制公测，经用户授权后可接入抖音、飞书、日历等应用，主动跟进任务并执行下单、定时发资料等操作，未来将逐步集成至豆包App。",
      "url": "http://mp.weixin.qq.com/s?__biz=MzkxOTAwMjQ3OA==&mid=2247485726&idx=1&sn=6fcfe732f11d2adee7d7f59767040c50&chksm=c0c25e85ddad9219410998c0f8ac08a4d01d59e72668e123119dd4178477e467e245def46ecba#rd",
      "source": "凤凰网"
    },
    {
      "date": "2026-11-25",
      "title": "百度文心5.5 Flash Preview正式开源，Apache 2.0协议全球开放",
      "summary": "百度文心5.5 Flash Preview正式开源，权重与配套资源已上架Hugging Face与ModelScope，总参数2800亿、支持100万Token上下文、生成速度超200 tokens/s，CodeArena WebDev榜单位列开源模型第二。",
      "url": "http://mp.weixin.qq.com/s?__biz=MzU5NTAzNDI0NA==&mid=2247492417&idx=1&sn=569ada26c70bee3beed27bf15f335928&chksm=ff82cad6e55bf45e8b2df434e2c93d20bce3f47f06938c4fd5c195eb84a8df0df0d6bbabb8ed#rd",
      "source": "百度AI早报"
    }
  ],
  "projects": [
    {
      "id": "cyber-fortune",
      "name": "赛博命理",
      "desc": "赛博算命 · 八字排盘 · 命运推演。录入生辰即可完成八字排盘，自动进行命运推演，用 AI 解读命理格局与人生轨迹，是传统命理与 AI 结合的趣味应用。",
      "url": "https://cyber-fortune-27815.app.workbuddy.host/?sharecode=55KSUQ7TI5",
      "tags": [
        "命理",
        "AI 推演",
        "趣味应用"
      ],
      "addedAt": "2026-11-24",
      "custom": false
    },
    {
      "id": "xiaodaodao",
      "name": "小道道 · 命理小筑",
      "desc": "AI 命理聊天助手，内置玄门知识库 173 篇，支持八字排盘与每日运势。与 AI 对话即可获得命理解答，集知识库、排盘与运势于一体的命理小筑。",
      "url": "https://xiaodaodao.app.workbuddy.host/?sharecode=VNSXQFLIPW#/home",
      "tags": [
        "命理",
        "AI 聊天",
        "知识库"
      ],
      "addedAt": "2026-11-24",
      "custom": false
    },
    {
      "id": "lingfeng-ai-workbench",
      "name": "上帝AI工作台",
      "desc": "AI 漫剧全自动创作流水线。从创作任务配置开始，剧本到提示词全自动生成，配套角色资产、分镜、场景、服饰、武器、光影等全套创作教程，一条龙完成漫剧创作。",
      "url": "https://lingfeng-ai-workbench.app.workbuddy.host/?sharecode=6HXGEIRCI3",
      "tags": [
        "AI 创作",
        "漫剧",
        "工作流"
      ],
      "addedAt": "2026-11-24",
      "custom": false
    },
    {
      "id": "fortune-ip-gallery",
      "name": "招财天团 · 品牌 IP 作品集",
      "desc": "九位角色组成的招财天团品牌 IP 作品集，收录 81 张设定卡、9 种板式与完整视觉规范，是一套可复用的品牌形象与 IP 设定资源库。",
      "url": "https://fortune-ip-gallery.app.workbuddy.host/?sharecode=CULHTLLORN",
      "tags": [
        "品牌 IP",
        "视觉规范",
        "作品集"
      ],
      "addedAt": "2026-11-24",
      "custom": false
    }
  ],
  "updateLog": [
    {
      "date": "2026-11-25",
      "summary": "Token 活动：新增 8 条（含 2 条停服替代），更新 10 条，新增过期 3 条（IteraCompute 推广结束、Mistral 免费 API 取消、GitHub Models 全面停服并保留）。免费服务器/域名资源：新增 3 条、更新 1 条、过期 0 条。GitHub 热门：更新 29 条（今日榜 16 + 本周榜 13 的 Star/Fork/周期新增/排名），新增 0 条。Skill：新增 5 条、更新 15 条、淘汰 5 条（sk-google-agents-cli：GitHub 仓库 404、官网入口 404，无可用 SKILL.md（2026-11-25 实测）；sk-handoff：GitHub 仓库 404、官网入口 404，空壳条目（2026-11-25 实测）；sk-azure-validate：GitHub 仓库 404；实际来源 microsoft/azure-skills 安装量与已有 sk-ms-azure-skills 重复且更低；sk-tailwind-design-system：GitHub 仓库 404；实际来源 wshobson/agents 已被 sk-wshobson-agents 覆盖，重复且 installs 为日期占位；sk-hallmark：此前已按蹭名/空壳条目淘汰，违反「被淘汰条目不得再次加回」规则，本次清除），另有 4 条不合规分类及 3 条越界 tier 归并。教程：新增 12 条（六大分类分布：2/2/2/2/2/2），更新 4 条 tier/sourceUrl。AI 变现：补充 51 条 resources、29 条免费工具链接，移除 5 条失效或无免费层工具，新增赛道 1 条（m-b1-agentic-commerce：AI Agent 商务入口优化 B2A/Agentic Commerce），2 条赛道归入四大板块标准分类。重点关注：Token=AssemblyAI 注册送 $50 语音赠金；免费资源=US.KG 永久免费 .us.kg 域名；GitHub=backnotprop/plannotator（周增 1956 Star）与 google-labs-code/stitch-skills（周增 2626 Star）；Skill=官方 academy-guide 与 brand-guidelines；教程=n8n Academy 免费官方课程与 Datawhale Hello-Robot；变现资源=a16z《Welcome to the B2A Economy》（Shopify AI 流量同比 8 倍、AI 搜索订单近 13 倍，来源 a16z）。收益因人而异，不构成收益承诺；所有工具链接均为官网、官方入口或官方开源仓库。",
      "source": "服务商官网/官方文档、GitHub Trending 今日与本周榜、skills.sh、全球教程与商业研究（a16z/Forbes/Upwork/人人都是产品经理）、2026-11-25 链接实测"
    },
    {
      "date": "2026-11-25",
      "summary": "免费Token新增 7 条（七牛云 Conatus Free 认证每日 1 亿 Token、Regolo.ai 新客 30 天免费、Articul8 Bivia 早期用户 10 亿 Token、LLM.kiwi 免卡免费 API、OpenTyphoon 泰语研究 API、阶跃星辰 Step 5 Preview 长期免费、OVHcloud AI Endpoints 匿名免注册、Gonka Broker 每月免费 Token）；免费资源新增 1 条（Spacefast Automattic 推出的 Personal 永久免费托管）。GitHub 热门新增 18 条（rea、dsh-superagent-prototype、open-design、openmotion、dsh-our-free-model、Claude-Code-Game-Studios、t3code、unslop、hallmark、herdr、pi、marketingskills、OpenMontage、hyperframes、lemo-opuscar、nestjs-agent-skills、claude-best-practices-zh、hello-agents、LLMs-from-scratch）。Skills 新增 5 条（unslop、hallmark、hyperframes、lemo-opuscar、nestjs-agent-skills、claude-best-practices-zh）。教程新增 4 条（HF AI Agents Course、freeCodeCamp MCP Security、Datawhale Hello-Agents、LLMs from Scratch）。变现新增 2 条（AI 工具中立部署顾问、AI 便民技能服务对接本地商家）。两篇公众号文章（每天免费约1亿Tokens、Agnes免费生图）提取的 7 个平台（AnyAPI.ai、RusherAI、APIsFreeLLM、One AI API Key、Packet AI、Inferbase、Agnes AI）经 provider+url 比对均已收录，offers 无重复新增。剔除项：FreeInference（官网公告因安全事件暂停服务）、NovAI（nov.ai 为域名停放页）、AgentRouter（agentrouter.io 为域名停放页）、Dewlance（官网未展示免费套餐）。",
      "source": "公众号原文 2 篇 + 网络搜索与官网核验（free-llm.com、aifree.dev、findarepo.com、github.locker、whatstrending.ai、agentskillshub.top、qiniu.com、regolo.ai、articul8.ai、llm.kiwi、opentyphoon.ai、stepfun.com、ovhcloud.com、gonka.ai、spacefast.com、GitHub API/页面核验）"
    },
    {
      "date": "2026-11-25",
      "summary": "新增 WorkBuddy 邀请送积分（offers +1）：邀请好友双方得积分，新用户注册即得 2,000，分享产物限领 30",
      "source": "https://www.workbuddy.cn/events/invite?inviteCode=myy5gfl52zbt8o9"
    },
    {
      "date": "2026-11-25",
      "summary": "免费Token新增 3 条（Scaleway Generative APIs 新客 100 万 Token、Maritaca AI S5-free 限时不计费、商汤 SenseNova Token Plan 公测免费）；免费资源新增 2 条（Glitch 免费托管、PythonAnywhere 免费 Python 托管）；GitHub 热门新增 6 条（agent-desktop、Scrapling、nanochat、colibri、heretic、orca）；Skills 新增 1 条（Anthropic 官方 Agent Skills 仓库）；教程新增 3 条（HF MCP Course、LangGraph Essentials、LangChain Essentials）；变现新增 4 条（漫剧代工与剪映模板、工具接单、垂类短视频出海、数字资产被动收益）。两篇公众号文章（每天免费约1亿Tokens、Agnes免费生图）提取的平台均已收录，offers 无重复新增。",
      "source": "公众号原文 2 篇 + 网络搜索（perq.sh、free-llm.com、aitujian.cn、ipipp.com、coddykit.com、datahive.pro、vibecodes.net、dev.to、toutiao、jxxy.net 等）"
    },
    {
      "date": "2026-11-25",
      "summary": "AI 新闻资讯板块更新：新增 15 条当天 AI 资讯。",
      "source": "全网搜索"
    },
    {
      "date": "2026-11-24",
      "summary": "Token 活动新增 1 条（zcode-nightly-tokens：ZCode 每晚 3 亿 GLM-5.3-Flash Token，替代已过期的 AutoClaw），更新 2 条、过期 1 条（autoclaw 11-23 截止转 expired；iteracompute 11-24 为今日最后一天，暂保留 ending 并注明复核）。免费资源新增 3 条（is-a.bot 免费子域名、Prisma 永久免费 Serverless、InstaBox 免费 4vCPU/8GiB 云环境），更新 0 条；Oracle Always Free 2 OCPU/12GB 与 AWS 新账户 6 个月额度制已按官网复核，数字无误。GitHub 热门新增 0 条、更新 29 条（今日榜 16 + 本周榜 13 的 star/fork/本周期新增 star/rank），并将 15 条历史月榜英文说明补为中文。Skill 新增 8 条（Prisma Skills、微软 Azure Skills、DeepMind Science、NVIDIA SkillSpector、Obsidian Skills、Caveman、Taste Skill、宝玉技能集），更新 2 条安装量（find-skills 4.5M、frontend-design 1.2M），归并 9 条不合规分类到白名单。淘汰 2 条：sk-remotion-practices（github.com/remotion-dev/remotion-best-practices 返回 404，已迁至 remotion-dev/skills，原链接失效）；sk-beautifulrust（github.com/beautifulrust/rust-skills 返回 404，项目已迁至 morganlinton/BeautifulRust，原链接失效）。教程新增 10 条（≤每类 3、全站 12 上限）：大模型应用与开发 2（OpenAI Academy、Stanford CS224N）、AIGC创意与视觉设计 2（FLUX 官方仓库、InvokeAI）、具身智能与硬件AI 2（MIT Underactuated Robotics、Physical Intelligence openpi）、AI工作流与自动化 1（Anthropic Building Effective Agents）、AI安全、治理与伦理 2（OWASP Agentic V2、MIT AI Risk Repository）、AI商业战略与产品 1（Microsoft AI Business School）；更新 1 条（OWASP LLM Top 10 补 2026 版说明），归并 8 条非白名单分类。变现板块 20 条赛道共补充 72 条资源链接、35 条免费工具链接，移除 1 条失效工具（Bing Image Creator 官方入口 404），归并 5 条赛道到四大板块原名，更新 4 条 tags；新增赛道 0 条（现有框架已覆盖主流模式）。最值得关注：Token 活动 zcode-nightly-tokens（每晚 3 亿免费 Token）；免费资源 Prisma 永久免费 Serverless（免信用卡）；GitHub 项目 elementalsouls/Claude-BugHunter（今日 +1716 star）与 mvanhorn/last30days-skill（本周 +5448 star）；新 Skill Prisma Skills（官方数据库技能包）与 NVIDIA SkillSpector（技能安装前安全扫描）；新教程 OpenAI Academy 与 MIT Underactuated Robotics；变现资源 腾讯云智能体开发平台 ADP（腾讯元器 11-09 停服后的官方替代，含免费权益）。",
      "source": "全网搜索（多来源交叉复核）"
    },
    {
      "date": "2026-11-24",
      "summary": "全网搜索各板块新增资源：offers +8（Cerebras/SambaNova/xAI/Novita/Fireworks/Cohere/Kimi/阿里云百炼）、resources +8（Neon/MongoDB Atlas/SQLPub/Upstash/Turso/DuckDNS/InfinityFree/Koyeb）、githubTrending +15、skills +9、tutorials +8、monetization +5。",
      "source": "全网搜索（多来源交叉复核）"
    },
    {
      "date": "2026-11-24",
      "summary": "免费 Token 额度新增 7 家：AnyAPI.ai（每日约 1 亿 Tokens）、RusherAI（每周 5000 万）、APIsFreeLLM（每日 1000 万）、One AI API Key（每日 500 万 + $10）、Packet AI（3 款模型全免费至 12-16，标 ending）、Inferbase（每月 5000 次）、Agnes AI（免费生图 1K-4K 全 0 元）。均来自用户提供的两篇微信公众号文章，已按 provider 与 url 去重，均为新增。",
      "source": "https://mp.weixin.qq.com/s/9Yo7_yKd1XGg5A6FiQY9CQ"
    },
    {
      "date": "2026-11-24",
      "summary": "免费 Token 额度新增 Agnes AI 免费生图额度（三款模型 1K-4K 全部 0 元），来源为用户提供的微信公众号文章，已去重确认为新增。",
      "source": "https://mp.weixin.qq.com/s/aPuSyCJsFmU7qo382fUmug"
    },
    {
      "date": "2026-11-24",
      "summary": "AI 新闻资讯板块更新：新增 13 条当天 AI 资讯。",
      "source": "全网搜索"
    },
    {
      "date": "2026-11-23",
      "summary": "Skill 大集合新增独立分类「游戏开发 / 游戏特效」，并将 sk-pixelfx 从「多媒体创作」迁入；分类筛选栏、自定义 Skill 表单与每日自动更新规则同步扩展。",
      "source": "https://github.com/patch-gg/pixelfx"
    },
    {
      "date": "2026-11-23",
      "summary": "Skill 大集合新增 pixelfx（patch-gg/pixelfx），归入「多媒体创作」分类，标签为像素特效 / 游戏开发 / Claude Code / AIGC，tier=100。来源为用户提供的微信公众号文章，已核验仓库含 skills/pixelfx/SKILL.md、MIT 许可、8,769 stars / 1,151 forks，并保留官方插件安装命令。",
      "source": "https://mp.weixin.qq.com/s/XnKvRr0ktlPqZsJ43fKoIQ"
    },
    {
      "date": "2026-11-23",
      "summary": "AI 变现全景图补充「免费工具 / 软件下载」：为全部 15 条赛道新增 62 个 tools 条目，覆盖剪映、OBS、GIMP、Krita、Blender、Dify、n8n、Docker Desktop、VS Code、Cursor、Supabase、Cloudflare、Google Search Console 等；链接仅来自官网下载页、官方入口或开源仓库，并注明免费版/免费额度范围。变现页新增独立下载区与统计，搜索可命中工具名称。",
      "source": "https://www.capcut.cn/"
    },
    {
      "date": "2026-11-23",
      "summary": "品牌升级：工作台定名为「神机 · SHENJI」，英文署名 SHENJI · GOD AI，启用 slogan「以神之眼，观万物之机」（备选「神机妙算，先知先行」）。数据内容与自动更新规则不变。",
      "source": "https://github.com/trending"
    },
    {
      "date": "2026-11-23",
      "summary": "每日更新：Token 活动新增 5 条、更新 4 条（无新增过期，尚无早于今日的截止日期）；服务器/域名资源新增 6 条、更新 3 条（Oracle 2 OCPU/12GB 与 AWS 6 个月额度制已复核）；GitHub 榜更新 28 条数据、新增 1 条（今日榜第 16 名）；Skill 新增 6 条、更新 5 条、淘汰 4 条（sk-hallmark（repo 字段不是有效仓库（「hallmark (Anti-AI-slop design)」），仅有第三方 libhunt 文章、无 SKILL.md/README 链接，属空壳条目）；sk-ai-video（蹭名克隆仓库 101-skills/superpowers，安装量靠冒名获取，非 obra/superpowers，属明确蹭名条目）；sk-ai-image（蹭名克隆仓库 magentosh/superpowers，安全社区已点名此类仓库，与官方替代重复）；sk-agentic-awesome（repo 字段不是有效 owner/repo，仅指向第三方 libhunt 文章，无真实仓库和 SKILL.md，属空壳条目））；教程新增 8 条（大模型应用与开发 2 / AIGC创意与视觉设计 1 / 具身智能与硬件AI 2 / AI工作流与自动化 2 / AI安全、治理与伦理 0 / AI商业战略与产品 1）、更新 3 条。最值得关注：Token 活动=腾讯云 TokenHub 每模型 100 万 Token；免费资源=魔搭 ModelScope Notebooks 免费 8 核/32GB CPU + 每月 36 小时 A10；GitHub=elementalsouls/Claude-BugHunter、zhouxiaoka/autoclip；新 Skill=supabase/agent-skills 的 Postgres 最佳实践、vercel-labs 的 web-design-guidelines；新教程=DataTalks.Club LLM Zoomcamp、古月居具身智能最小落地闭环。",
      "source": "https://github.com/trending"
    },
    {
      "date": "2026-11-23",
      "summary": "新增「AI 教程大全」板块，按大模型应用与开发 / AIGC创意与视觉设计 / 具身智能与硬件AI / AI工作流与自动化 / AI安全、治理与伦理 / AI商业战略与产品六大类收录 57 个教程，来源覆盖官方课程、高校慕课、开源项目与中文实战资料。",
      "source": "https://huggingface.co/learn/llm-course"
    },
    {
      "date": "2026-11-23",
      "summary": "新增「Skill 大集合」板块，按文档办公/开发工程/前端设计/浏览器自动化/数据科研/营销增长/多媒体创作/效率记忆/安全审计/资源目录十大类收录 58 个技能与目录；已剔除 101-skills/superpowers、magentosh/superpowers 等蹭名克隆仓库的推荐位，仅保留功能提示并标为低优先级待淘汰。",
      "source": "https://skills.sh/"
    },
    {
      "date": "2026-11-23",
      "summary": "工作台定名为「神机 · SHENJI」（英文署名 SHENJI · GOD AI）；新增 GitHub 热门排行榜，收录 GitHub Trending 今日榜 15 项与本周榜 13 项真实项目。",
      "source": "https://github.com/trending"
    },
    {
      "date": "2026-11-23",
      "summary": "新增「免费服务器 / VPS / 域名」板块，收录 20 条资源（含 Oracle/GCP/Azure/AWS 免费层、国内试用、eu.org 等免费域名），并标注 Freenom 已停服。前端加入过期自动标注、沉底与筛选。",
      "source": "https://devshot.co/blog/cloud-free-tiers-compared"
    },
    {
      "date": "2026-11-23",
      "summary": "初始化工作台：从微信公众号文章提取 6 条活动，并补充 19 条全网主流免费渠道。",
      "source": "https://mp.weixin.qq.com/s/6YO6uWC0mW0q-AOEzBCObA"
    }
  ]
};
