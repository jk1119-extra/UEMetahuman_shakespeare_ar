// ! M_Teeth_air/Default/TGPUSkinVertexFactoryUnlimited/TMobileBasePassPSFMobileDirectionalLightCSMAndSHIndirectPolicyHDRLinear64EnableLocalLights/0/MobileBasePassPixelShader.usf:Main
// Compiled by ShaderConductor
// @Inputs: f4;10:in_var_TEXCOORD10,f4;11:in_var_TEXCOORD11,f4;0:in_var_TEXCOORD0,f4;8:in_var_TEXCOORD8
// @Outputs: f4;0:out_Target0,f1;1:out_Target1
// @PackedUB: View(0): View_ViewToClip(128,16),View_ViewForward(264,3),View_ViewRectMin(512,4),View_ViewSizeAndInvSize(516,4),View_PreExposure(546,1),View_NormalCurvatureToRoughnessScaleBias(732,3),View_SkyLightColor(748,4),View_ReflectionCubemapMaxMip(786,1),View_ReflectionEnvironmentRoughnessMixingScaleBiasAndLargestWeight(792,3),View_IndirectLightingCacheShowFlag(943,1),View_bSubsurfacePostprocessEnabled(987,1),View_SSProfilesTextureSizeAndInvSize(988,4)
// @PackedUB: MobileReflectionCapture(1): MobileReflectionCapture_Params(0,4)
// @PackedUB: Primitive(2): Primitive_Flags(0,1)
// @PackedUB: MobileBasePass(3): MobileBasePass_Forward_NumLocalLights(52,1),MobileBasePass_Forward_CulledGridSize(56,3),MobileBasePass_Forward_LightGridPixelSizeShift(60,1),MobileBasePass_Forward_LightGridZParams(64,3)
// @PackedUB: IndirectLightingCache(4): IndirectLightingCache_DirectionalLightShadowing(20,1),IndirectLightingCache_IndirectLightingSHCoefficients0(24,12),IndirectLightingCache_IndirectLightingSHCoefficients1(36,12),IndirectLightingCache_IndirectLightingSHCoefficients2(48,4)
// @PackedUB: MobileDirectionalLight(5): MobileDirectionalLight_DirectionalLightColor(0,4),MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition(4,4),MobileDirectionalLight_DirectionalLightShadowSize(8,4),MobileDirectionalLight_DirectionalLightDistanceFadeMADAndSpecularScale(12,4),MobileDirectionalLight_DirectionalLightShadowDistances(16,4),MobileDirectionalLight_DirectionalLightScreenToShadow(20,64),MobileDirectionalLight_DirectionalLightShadowMapChannelMask(84,1)
// @PackedUB: Material(6): Material_PreshaderBuffer_1(4,4),Material_PreshaderBuffer_2(8,4),Material_PreshaderBuffer_3(12,4),Material_PreshaderBuffer_4(16,4),Material_PreshaderBuffer_5(20,4),Material_PreshaderBuffer_6(24,4),Material_PreshaderBuffer_7(28,4)
// @PackedUBCopies: 0:128-0:h:0:16,0:264-0:m:0:3,0:512-0:m:4:4,0:516-0:h:16:4,0:546-0:h:20:1,0:732-0:h:24:3,0:748-0:h:28:4,0:786-0:m:8:1,0:792-0:h:32:3,0:943-0:h:36:1,0:987-0:h:40:1,0:988-0:h:44:4,1:0-1:h:0:4,2:0-2:u:0:1,3:52-3:u:0:1,3:56-3:i:0:3,3:60-3:u:4:1,3:64-3:h:0:3,4:20-4:m:0:1,4:24-4:h:0:12,4:36-4:h:12:12,4:48-4:h:24:4,5:0-5:m:0:4,5:4-5:m:4:4,5:8-5:m:8:4,5:12-5:m:12:4,5:16-5:m:16:4,5:20-5:h:0:64,5:84-5:u:0:1,6:4-6:h:0:4,6:8-6:h:4:4,6:12-6:h:8:4,6:16-6:h:12:4,6:20-6:h:16:4,6:24-6:h:20:4,6:28-6:h:24:4
// @Samplers: MobileBasePass_Forward_ForwardLocalLightBuffer(0:1),MobileBasePass_Forward_NumCulledLightsGrid(1:1),MobileBasePass_Forward_CulledLightDataGrid(2:1),View_SSProfilesTexture(3:1[View_SSProfilesSampler]),View_SSProfilesPreIntegratedTexture(4:1[View_SSProfilesPreIntegratedSampler]),MobileReflectionCapture_Texture(5:1[MobileReflectionCapture_TextureSampler]),MobileDirectionalLight_DirectionalLightShadowTexture(6:1[MobileDirectionalLight_DirectionalLightShadowSampler]),Material_Texture2D_0(7:1[Material_Texture2D_0Sampler]),Material_Texture2D_1(8:1[Material_Texture2D_1Sampler]),Material_Texture2D_2(9:1[Material_Texture2D_2Sampler]),Material_Texture2D_3(10:1[Material_Texture2D_3Sampler]),Material_Texture2D_4(11:1[Material_Texture2D_4Sampler]),Material_Texture2D_5(12:1[Material_Texture2D_5Sampler]),Material_Texture2D_6(13:1[Material_Texture2D_6Sampler]),Material_Texture2D_7(14:1[Material_Texture2D_7Sampler]),Material_Texture2D_8(15:1[Material_Texture2D_8Sampler]),Material_Texture2D_9(16:1[Material_Texture2D_9Sampler]),Material_Texture2D_10(17:1[Material_Texture2D_10Sampler])
#version 320 es
#if defined(GL_EXT_control_flow_attributes)
#define out_var_SV_Target1 out_Target1
#define out_var_SV_Target0 out_Target0
#define in_var_TEXCOORD8 in_TEXCOORD8
#define in_var_TEXCOORD0 in_TEXCOORD0
#define in_var_TEXCOORD11 in_TEXCOORD11
#define in_var_TEXCOORD10 in_TEXCOORD10
#extension GL_EXT_control_flow_attributes : require
#define SPIRV_CROSS_FLATTEN [[flatten]]
#define SPIRV_CROSS_BRANCH [[dont_flatten]]
#define SPIRV_CROSS_UNROLL [[unroll]]
#define SPIRV_CROSS_LOOP [[dont_unroll]]
#else
#define SPIRV_CROSS_FLATTEN
#define SPIRV_CROSS_BRANCH
#define SPIRV_CROSS_UNROLL
#define SPIRV_CROSS_LOOP
#endif
precision mediump float;
precision highp int;

#define View_SSProfilesTextureSizeAndInvSize (pc0_h[11])
#define View_bSubsurfacePostprocessEnabled (pc0_h[10].x)
#define View_IndirectLightingCacheShowFlag (pc0_h[9].x)
#define View_ReflectionEnvironmentRoughnessMixingScaleBiasAndLargestWeight (pc0_h[8].xyz)
#define View_ReflectionCubemapMaxMip (pc0_m[2].x)
#define View_SkyLightColor (pc0_h[7])
#define View_NormalCurvatureToRoughnessScaleBias (pc0_h[6].xyz)
#define View_PreExposure (pc0_h[5].x)
#define View_ViewSizeAndInvSize (pc0_h[4])
#define View_ViewRectMin (pc0_m[1])
#define View_ViewForward (pc0_m[0].xyz)
#define View_ViewToClip (mat4(pc0_h[0 + 0].xyzw,pc0_h[0 + 1].xyzw,pc0_h[0 + 2].xyzw,pc0_h[0 + 3].xyzw))
#define SPIRV_Cross_CombinedView_SSProfilesTextureView_SSProfilesSampler ps3
#define SPIRV_Cross_CombinedView_SSProfilesPreIntegratedTextureView_SSProfilesPreIntegratedSampler ps4
#define SPIRV_Cross_CombinedMobileReflectionCapture_TextureMobileReflectionCapture_TextureSampler ps5
#define SPIRV_Cross_CombinedMobileDirectionalLight_DirectionalLightShadowTextureMobileDirectionalLight_DirectionalLightShadowSampler ps6
#define SPIRV_Cross_CombinedMaterial_Texture2D_0Material_Texture2D_0Sampler ps7
#define SPIRV_Cross_CombinedMaterial_Texture2D_1Material_Texture2D_1Sampler ps8
#define SPIRV_Cross_CombinedMaterial_Texture2D_2Material_Texture2D_2Sampler ps9
#define SPIRV_Cross_CombinedMaterial_Texture2D_3Material_Texture2D_3Sampler ps10
#define SPIRV_Cross_CombinedMaterial_Texture2D_4Material_Texture2D_4Sampler ps11
#define SPIRV_Cross_CombinedMaterial_Texture2D_5Material_Texture2D_5Sampler ps12
#define SPIRV_Cross_CombinedMaterial_Texture2D_6Material_Texture2D_6Sampler ps13
#define SPIRV_Cross_CombinedMaterial_Texture2D_7Material_Texture2D_7Sampler ps14
#define SPIRV_Cross_CombinedMaterial_Texture2D_8Material_Texture2D_8Sampler ps15
#define SPIRV_Cross_CombinedMaterial_Texture2D_9Material_Texture2D_9Sampler ps16
#define SPIRV_Cross_CombinedMaterial_Texture2D_10Material_Texture2D_10Sampler ps17
uniform mediump vec4 pc0_m[3];
uniform highp vec4 pc0_h[12];


#define MobileReflectionCapture_Params (pc1_h[0])
uniform highp vec4 pc1_h[1];


#define Primitive_Flags (pc2_u[0].x)
uniform uvec4 pc2_u[1];


#define MobileBasePass_Forward_LightGridZParams (pc3_h[0].xyz)
#define MobileBasePass_Forward_LightGridPixelSizeShift (pc3_u[1].x)
#define MobileBasePass_Forward_CulledGridSize (pc3_i[0].xyz)
#define MobileBasePass_Forward_NumLocalLights (pc3_u[0].x)
uniform highp vec4 pc3_h[1];
uniform ivec4 pc3_i[1];
uniform uvec4 pc3_u[2];


#define IndirectLightingCache_IndirectLightingSHCoefficients2 (pc4_h[6])
#define IndirectLightingCache_IndirectLightingSHCoefficients1(Offset) (pc4_h[3 + int(Offset)])
#define IndirectLightingCache_IndirectLightingSHCoefficients0(Offset) (pc4_h[0 + int(Offset)])
#define IndirectLightingCache_DirectionalLightShadowing (pc4_m[0].x)
uniform highp vec4 pc4_h[7];
uniform mediump vec4 pc4_m[1];


#define MobileDirectionalLight_DirectionalLightShadowMapChannelMask (pc5_u[0].x)
#define MobileDirectionalLight_DirectionalLightScreenToShadow(Offset) (mat4(pc5_h[0 + (int(Offset) * 4) + 0].xyzw,pc5_h[0 + (int(Offset) * 4) + 1].xyzw,pc5_h[0 + (int(Offset) * 4) + 2].xyzw,pc5_h[0 + (int(Offset) * 4) + 3].xyzw))
#define MobileDirectionalLight_DirectionalLightShadowDistances (pc5_m[4])
#define MobileDirectionalLight_DirectionalLightDistanceFadeMADAndSpecularScale (pc5_m[3])
#define MobileDirectionalLight_DirectionalLightShadowSize (pc5_m[2])
#define MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition (pc5_m[1])
#define MobileDirectionalLight_DirectionalLightColor (pc5_m[0])
uniform uvec4 pc5_u[1];
uniform highp vec4 pc5_h[16];
uniform mediump vec4 pc5_m[5];


#define Material_PreshaderBuffer_7 (pc6_h[6])
#define Material_PreshaderBuffer_6 (pc6_h[5])
#define Material_PreshaderBuffer_5 (pc6_h[4])
#define Material_PreshaderBuffer_4 (pc6_h[3])
#define Material_PreshaderBuffer_3 (pc6_h[2])
#define Material_PreshaderBuffer_2 (pc6_h[1])
#define Material_PreshaderBuffer_1 (pc6_h[0])
uniform highp vec4 pc6_h[7];


layout(binding = 0) uniform highp samplerBuffer ps0;
layout(binding = 1) uniform highp usamplerBuffer ps1;
layout(binding = 2) uniform highp usamplerBuffer ps2;
uniform highp sampler2D SPIRV_Cross_CombinedMaterial_Texture2D_0Material_Texture2D_0Sampler;
uniform highp sampler2D SPIRV_Cross_CombinedMaterial_Texture2D_1Material_Texture2D_1Sampler;
uniform highp sampler2D SPIRV_Cross_CombinedMaterial_Texture2D_2Material_Texture2D_2Sampler;
uniform highp sampler2D SPIRV_Cross_CombinedMaterial_Texture2D_3Material_Texture2D_3Sampler;
uniform highp sampler2D SPIRV_Cross_CombinedMaterial_Texture2D_4Material_Texture2D_4Sampler;
uniform highp sampler2D SPIRV_Cross_CombinedMaterial_Texture2D_5Material_Texture2D_5Sampler;
uniform highp sampler2D SPIRV_Cross_CombinedMaterial_Texture2D_6Material_Texture2D_6Sampler;
uniform highp sampler2D SPIRV_Cross_CombinedMaterial_Texture2D_7Material_Texture2D_7Sampler;
uniform highp sampler2D SPIRV_Cross_CombinedMaterial_Texture2D_8Material_Texture2D_8Sampler;
uniform highp sampler2D SPIRV_Cross_CombinedMaterial_Texture2D_9Material_Texture2D_9Sampler;
uniform highp sampler2D SPIRV_Cross_CombinedMaterial_Texture2D_10Material_Texture2D_10Sampler;
uniform highp sampler2D SPIRV_Cross_CombinedMobileDirectionalLight_DirectionalLightShadowTextureMobileDirectionalLight_DirectionalLightShadowSampler;
uniform highp sampler2D SPIRV_Cross_CombinedView_SSProfilesTextureView_SSProfilesSampler;
uniform highp sampler2DArray SPIRV_Cross_CombinedView_SSProfilesPreIntegratedTextureView_SSProfilesPreIntegratedSampler;
uniform highp samplerCube SPIRV_Cross_CombinedMobileReflectionCapture_TextureMobileReflectionCapture_TextureSampler;

layout(location = 0) in vec4 in_var_TEXCOORD10;
layout(location = 1) in vec4 in_var_TEXCOORD11;
layout(location = 2) in highp vec4 in_var_TEXCOORD0[1];
layout(location = 3) in highp vec4 in_var_TEXCOORD8;
layout(location = 0) out vec4 out_var_SV_Target0;
layout(location = 1) out highp float out_var_SV_Target1;

vec4 _559;
vec3 _561;
vec4 _562;

void main()
{
    highp float _571 = 1.0 / gl_FragCoord.w;
    highp vec2 _590 = gl_FragCoord.xy - View_ViewRectMin.xy;
    highp vec4 _599 = vec4(((_590 * View_ViewSizeAndInvSize.zw) - vec2(0.5)) * vec2(2.0, -2.0), gl_FragCoord.z, 1.0) * _571;
    highp vec3 _608;
    if (View_ViewToClip[3].w >= 1.0)
    {
        _608 = -View_ViewForward;
    }
    else
    {
        _608 = normalize(-in_var_TEXCOORD8.xyz);
    }
    uint _756;
    vec2 _184 = (texture(SPIRV_Cross_CombinedMaterial_Texture2D_0Material_Texture2D_0Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y)).xy * vec2(2.0)) - vec2(1.0);
    highp vec3 _619 = vec4(_184, sqrt(clamp(1.0 - dot(_184, _184), 0.0, 1.0)), 1.0).xyz * Material_PreshaderBuffer_1.xyz;
    float _92 = _619.z + 1.0;
    vec2 _191 = (texture(SPIRV_Cross_CombinedMaterial_Texture2D_1Material_Texture2D_1Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y)).xy * vec2(2.0)) - vec2(1.0);
    highp vec4 _630 = texture(SPIRV_Cross_CombinedMaterial_Texture2D_2Material_Texture2D_2Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y));
    highp float _633 = _630.x * Material_PreshaderBuffer_1.w;
    vec3 _96 = vec4(_191, sqrt(clamp(1.0 - dot(_191, _191), 0.0, 1.0)), 1.0).xyz * vec3(_633, _633, 1.0);
    vec3 _101 = vec3(_619.xy, _92);
    vec3 _105 = vec3(_96.xy * vec2(-1.0), _96.z);
    vec3 _111 = (_101 * vec3(dot(_101, _105))) - (vec3(_92) * _105);
    float _113 = _111.z + 1.0;
    vec2 _198 = (texture(SPIRV_Cross_CombinedMaterial_Texture2D_3Material_Texture2D_3Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y) * vec2(Material_PreshaderBuffer_2.x)).xy * vec2(2.0)) - vec2(1.0);
    highp vec3 _646 = mix(vec3(0.0, 0.0, 1.0), vec4(_198, sqrt(clamp(1.0 - dot(_198, _198), 0.0, 1.0)), 1.0).xyz, vec3(Material_PreshaderBuffer_2.y));
    vec3 _121 = vec3(_111.xy, _113);
    vec3 _125 = vec3(_646.xy * vec2(-1.0), _646.z);
    vec3 _131 = (_121 * vec3(dot(_121, _125))) - (vec3(_113) * _125);
    float _133 = _131.z + 1.0;
    highp vec4 _650 = texture(SPIRV_Cross_CombinedMaterial_Texture2D_4Material_Texture2D_4Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y));
    vec2 _205 = (_650.xy * vec2(2.0)) - vec2(1.0);
    highp float _653 = sqrt(clamp(1.0 - dot(_205, _205), 0.0, 1.0));
    vec3 _138 = vec3(_131.xy, _133);
    vec3 _141 = vec3(vec4(_205, _653, 1.0).xy * vec2(-1.0), _653);
    vec3 _148 = normalize(mat3(in_var_TEXCOORD10.xyz, cross(in_var_TEXCOORD11.xyz, in_var_TEXCOORD10.xyz) * in_var_TEXCOORD11.w, in_var_TEXCOORD11.xyz) * ((_138 * vec3(dot(_138, _141))) - (vec3(_133) * _141))) * 1.0;
    highp vec3 _658 = (-_608) + ((_148 * dot(_148, _608)) * 2.0);
    highp vec4 _662 = texture(SPIRV_Cross_CombinedMaterial_Texture2D_5Material_Texture2D_5Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y));
    highp vec4 _669 = texture(SPIRV_Cross_CombinedMaterial_Texture2D_6Material_Texture2D_6Sampler, Material_PreshaderBuffer_3.xy);
    highp vec4 _673 = texture(SPIRV_Cross_CombinedMaterial_Texture2D_7Material_Texture2D_7Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y));
    vec3 _149 = _662.xyz;
    highp vec4 _680 = texture(SPIRV_Cross_CombinedMaterial_Texture2D_8Material_Texture2D_8Sampler, Material_PreshaderBuffer_4.xy);
    highp vec4 _686 = texture(SPIRV_Cross_CombinedMaterial_Texture2D_9Material_Texture2D_9Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y));
    float _160 = _686.x;
    vec3 _162 = mix(mix(_149, _669.xyz * (_149 / _673.xyz), vec3(0.669921875)), (_680.xyz * (_149 * vec3(1.0380132198333740234375, 1.27521789073944091796875, 1.815602779388427734375))) * vec3(Material_PreshaderBuffer_4.z), vec3(_160));
    highp vec4 _693 = texture(SPIRV_Cross_CombinedMaterial_Texture2D_10Material_Texture2D_10Sampler, Material_PreshaderBuffer_5.yz);
    float _214 = _693.x;
    float _215 = _693.y;
    float _212 = _693.z;
    vec3 _171 = _630.xyz;
    vec3 _173 = normalize(in_var_TEXCOORD11.xyz);
    vec3 _220 = clamp(mix(_162, _162 * vec3((_214 <= 0.0) ? 0.0 : pow(_214, 0.300048828125), (_215 <= 0.0) ? 0.0 : pow(_215, 0.300048828125), (_212 <= 0.0) ? 0.0 : pow(_212, 0.300048828125)), vec3(_160 * clamp(1.0 - ((1.0 - _686.y) * Material_PreshaderBuffer_6.y), 0.0, 1.0))) * _171, vec3(0.0), vec3(1.0));
    float _221 = clamp((_171 * vec3(smoothstep(0.0, Material_PreshaderBuffer_6.z, dot(((vec3(dot(_608, _173)) * _173) * vec3(2.0)) - _608, _608)) * 0.449951171875)).x, 0.0, 1.0);
    highp float _715 = max(0.015625, clamp(mix(Material_PreshaderBuffer_7.x, Material_PreshaderBuffer_6.w, _160), 0.0, 1.0));
    vec3 _224 = dFdx(_148);
    vec3 _225 = dFdy(_148);
    highp float _721 = clamp(pow(max(dot(_224, _224), dot(_225, _225)), View_NormalCurvatureToRoughnessScaleBias.z), 0.001000000047497451305389404296875, 1.0);
    vec3 _229 = vec3(0.07999999821186065673828125 * _221);
    float _236 = _148.y;
    vec4 _409 = _562;
    _409.y = (-0.48860299587249755859375) * _236;
    float _237 = _148.z;
    vec4 _410 = _409;
    _410.z = 0.48860299587249755859375 * _237;
    float _238 = _148.x;
    vec4 _411 = _410;
    _411.w = (-0.48860299587249755859375) * _238;
    vec3 _239 = _148 * _148;
    vec4 _412 = _559;
    _412.x = (1.09254801273345947265625 * _238) * _236;
    vec4 _413 = _412;
    _413.y = ((-1.09254801273345947265625) * _236) * _237;
    vec4 _414 = _413;
    _414.z = 0.3153919875621795654296875 * ((3.0 * _239.z) - 1.0);
    vec4 _415 = _414;
    _415.w = ((-1.09254801273345947265625) * _238) * _237;
    vec4 _416 = _411;
    _416.x = 0.885601043701171875;
    vec3 _232 = _416.yzw * 2.09375;
    vec4 _233 = vec4(_416.x, _232.x, _232.y, _232.z);
    vec4 _234 = _415 * 0.78515625;
    float _235 = (_239.x - _239.y) * 0.4289104640483856201171875;
    vec3 _417 = vec3(0.0);
    _417.x = (dot(IndirectLightingCache_IndirectLightingSHCoefficients0(0), _233) + dot(IndirectLightingCache_IndirectLightingSHCoefficients1(0), _234)) + (IndirectLightingCache_IndirectLightingSHCoefficients2.x * _235);
    vec3 _418 = _417;
    _418.y = (dot(IndirectLightingCache_IndirectLightingSHCoefficients0(1), _233) + dot(IndirectLightingCache_IndirectLightingSHCoefficients1(1), _234)) + (IndirectLightingCache_IndirectLightingSHCoefficients2.y * _235);
    vec3 _419 = _418;
    _419.z = (dot(IndirectLightingCache_IndirectLightingSHCoefficients0(2), _233) + dot(IndirectLightingCache_IndirectLightingSHCoefficients1(2), _234)) + (IndirectLightingCache_IndirectLightingSHCoefficients2.z * _235);
    vec3 _230 = max(vec3(0.0), _419);
    vec4 _406;
    do
    {
        _756 = Primitive_Flags;
        if (((_756 & 2u) != 0u) && (View_IndirectLightingCacheShowFlag > 0.0))
        {
            _406 = vec4(IndirectLightingCache_DirectionalLightShadowing, 1.0, 1.0, 1.0);
            break;
        }
        _406 = vec4(1.0);
        break;
    } while(false);
    highp float _764 = _599.w;
    highp vec4 _788;
    int _771 = 0;
    for (;;)
    {
        if (_771 < 4)
        {
            if (_764 < MobileDirectionalLight_DirectionalLightShadowDistances[uint(_771)])
            {
                _788 = MobileDirectionalLight_DirectionalLightScreenToShadow(_771) * vec4(_599.xy, _764, 1.0);
                break;
            }
            _771++;
            continue;
        }
        else
        {
            _788 = vec4(0.0);
            break;
        }
    }
    float _407;
    if (_788.z > 0.0)
    {
        highp vec2 _798 = (_788.xy * MobileDirectionalLight_DirectionalLightShadowSize.xy) - vec2(0.5);
        highp vec2 _799 = fract(_798);
        highp vec2 _803 = (floor(_798) + vec2(1.0)) * MobileDirectionalLight_DirectionalLightShadowSize.zw;
        highp vec4 _809 = vec4((min(1.0 - _788.z, 0.999989986419677734375) * MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.w) - 1.0);
        highp vec4 _811 = clamp((textureGatherOffset(SPIRV_Cross_CombinedMobileDirectionalLight_DirectionalLightShadowTextureMobileDirectionalLight_DirectionalLightShadowSampler, _803, ivec2(-1)) * MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.w) - _809, vec4(0.0), vec4(1.0));
        highp vec4 _816 = clamp((textureGatherOffset(SPIRV_Cross_CombinedMobileDirectionalLight_DirectionalLightShadowTextureMobileDirectionalLight_DirectionalLightShadowSampler, _803, ivec2(1, -1)) * MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.w) - _809, vec4(0.0), vec4(1.0));
        highp vec4 _821 = clamp((textureGatherOffset(SPIRV_Cross_CombinedMobileDirectionalLight_DirectionalLightShadowTextureMobileDirectionalLight_DirectionalLightShadowSampler, _803, ivec2(-1, 1)) * MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.w) - _809, vec4(0.0), vec4(1.0));
        highp vec4 _826 = clamp((textureGatherOffset(SPIRV_Cross_CombinedMobileDirectionalLight_DirectionalLightShadowTextureMobileDirectionalLight_DirectionalLightShadowSampler, _803, ivec2(1)) * MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.w) - _809, vec4(0.0), vec4(1.0));
        highp float _828 = _799.x;
        highp float _829 = 1.0 - _828;
        highp vec4 _856 = _559;
        _856.x = (((_811.w * _829) + _811.z) + _816.w) + (_816.z * _828);
        highp vec4 _860 = _856;
        _860.y = (((_811.x * _829) + _811.y) + _816.x) + (_816.y * _828);
        highp vec4 _864 = _860;
        _864.z = (((_821.w * _829) + _821.z) + _826.w) + (_826.z * _828);
        highp vec4 _868 = _864;
        _868.w = (((_821.x * _829) + _821.y) + _826.x) + (_826.y * _828);
        highp float _869 = _799.y;
        highp float _878 = clamp((_764 * MobileDirectionalLight_DirectionalLightDistanceFadeMADAndSpecularScale.x) + MobileDirectionalLight_DirectionalLightDistanceFadeMADAndSpecularScale.y, 0.0, 1.0);
        _407 = mix(dot(_868, vec4(1.0 - _869, 1.0, 1.0, _869) * 0.111111111938953399658203125), 1.0, _878 * _878);
    }
    else
    {
        _407 = 1.0;
    }
    highp vec4 _897 = vec4(float((MobileDirectionalLight_DirectionalLightShadowMapChannelMask & 1u) != 0u), float((MobileDirectionalLight_DirectionalLightShadowMapChannelMask & 2u) != 0u), float((MobileDirectionalLight_DirectionalLightShadowMapChannelMask & 4u) != 0u), float((MobileDirectionalLight_DirectionalLightShadowMapChannelMask & 8u) != 0u));
    float _275 = _407 * mix(1.0, dot(_406, _897), dot(_897, vec4(1.0)));
    highp float _901 = max(0.0, dot(_148, normalize(_608 + MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.xyz)));
    uint _904 = uint(((vec4(_561.x, _561.y, _561.z, vec4(1.0, 1.0, 1.0, Material_PreshaderBuffer_7.y).w) * View_bSubsurfacePostprocessEnabled).w * 255.0) + 0.5);
    highp vec2 _913 = (vec2(uvec2(5u, _904)) + vec2(0.5)) * View_SSProfilesTextureSizeAndInvSize.zw;
    highp vec4 _915 = textureLod(SPIRV_Cross_CombinedView_SSProfilesTextureView_SSProfilesSampler, _913, 0.0);
    float _289 = _915.z;
    highp float _918 = max(clamp(_715 * (_915.x * 2.0), 0.0, 1.0), 0.0199999995529651641845703125);
    float _293 = clamp(_715 * (_915.y * 2.0), 0.0, 1.0);
    float _279 = mix(_918, _293, _289);
    float _280 = dot(_148, MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.xyz);
    highp float _925 = float(_904);
    highp vec2 _934 = (vec2(uvec2(0u, _904)) + vec2(0.5)) * View_SSProfilesTextureSizeAndInvSize.zw;
    highp vec3 _937 = vec3(1.0) * max(0.0, dot(_148, MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.xyz));
    vec3 _296 = _220 * 0.318407952785491943359375;
    highp float _942 = 1.0 - (_901 * _901);
    float _297 = _918 * _918;
    highp float _943 = _901 * _297;
    highp float _945 = _297 / (_942 + (_943 * _943));
    float _301 = _293 * _293;
    highp float _946 = _901 * _301;
    highp float _948 = _301 / (_942 + (_946 * _946));
    vec4 _315 = (vec4(-1.0, -0.027496337890625, -0.57177734375, 0.022003173828125) * _279) + vec4(1.0, 0.042510986328125, 1.0400390625, -0.040008544921875);
    float _316 = _315.x;
    float _319 = exp2((-9.28125) * clamp(abs(dot(_148, _608)) + 1.0013580322265625e-05, 0.0, 1.0));
    vec2 _326 = (vec2(-1.0400390625, 1.0400390625) * ((min(_316 * _316, _319) * _316) + _315.y)) + _315.zw;
    float _310 = clamp(_221 * 4.0, 0.0, 1.0);
    uvec2 _986 = uvec2(uint(_590.x), uint(_590.y)) >> (uvec2(MobileBasePass_Forward_LightGridPixelSizeShift) & uvec2(31u));
    vec3 _408;
    if (float(MobileReflectionCapture_Params.y > 0.0) != 0.0)
    {
        _408 = textureLod(SPIRV_Cross_CombinedMobileReflectionCapture_TextureMobileReflectionCapture_TextureSampler, _658, (MobileReflectionCapture_Params.y - 1.0) - (1.0 - (1.2001953125 * log2(max(_715, 0.00100040435791015625))))).xyz * View_SkyLightColor.xyz;
    }
    else
    {
        _408 = textureLod(SPIRV_Cross_CombinedMobileReflectionCapture_TextureMobileReflectionCapture_TextureSampler, _658, (View_ReflectionCubemapMaxMip - 1.0) - (1.0 - (1.2001953125 * log2(max(_715, 0.00100040435791015625))))).xyz * MobileReflectionCapture_Params.w;
    }
    vec4 _350 = (vec4(-1.0, -0.027496337890625, -0.57177734375, 0.022003173828125) * _715) + vec4(1.0, 0.042510986328125, 1.0400390625, -0.040008544921875);
    float _351 = _350.x;
    vec2 _359 = (vec2(-1.0400390625, 1.0400390625) * ((min(_351 * _351, _319) * _351) + _350.y)) + _350.zw;
    uint _1036 = ((((min(uint(max(0.0, log2((_571 * MobileBasePass_Forward_LightGridZParams.x) + MobileBasePass_Forward_LightGridZParams.y) * MobileBasePass_Forward_LightGridZParams.z)), uint(MobileBasePass_Forward_CulledGridSize.z - 1)) * uint(MobileBasePass_Forward_CulledGridSize.y)) + _986.y) * uint(MobileBasePass_Forward_CulledGridSize.x)) + _986.x) * 2u;
    uvec4 _1044 = texelFetch(ps1, int(_1036 + 1u));
    uint _1045 = _1044.x;
    uint _1058 = (uint((_756 & 1024u) != 0u) | (uint((_756 & 2048u) != 0u) << 1u)) | (uint((_756 & 4096u) != 0u) << 2u);
    uint _1059 = min(min(texelFetch(ps1, int(_1036)).x, MobileBasePass_Forward_NumLocalLights), MobileBasePass_Forward_NumLocalLights);
    highp vec3 _1061;
    _1061 = ((_230 * _220) + ((((mix(_937 * _275, textureLod(SPIRV_Cross_CombinedView_SSProfilesPreIntegratedTextureView_SSProfilesPreIntegratedSampler, vec3((max(_280 - (max(2.0 * _280, 0.4000000059604644775390625) * (1.0 - sqrt(_275))), -1.0) * 0.5) + 0.5, _721, _925), 0.0).xyz, textureLod(SPIRV_Cross_CombinedView_SSProfilesTextureView_SSProfilesSampler, _934, 0.0).xyz) * _296) * 1.0) + ((_937 * (((_229 * _326.x) + vec3(_310 * _326.y)) * (mix(min(_945 * _945, 2048.0), min(_948 * _948, 2048.0), _289) * ((_279 * 0.25) + 0.25)))) * MobileDirectionalLight_DirectionalLightDistanceFadeMADAndSpecularScale.z)) * (MobileDirectionalLight_DirectionalLightColor.xyz * _275))) + (((_408 * mix(1.0, min(dot(_230, vec3(0.300048828125, 0.58984375, 0.1099853515625)) / max(MobileReflectionCapture_Params.x, 9.9999997473787516355514526367188e-05), View_ReflectionEnvironmentRoughnessMixingScaleBiasAndLargestWeight.z), smoothstep(0.0, 1.0, clamp((_715 * View_ReflectionEnvironmentRoughnessMixingScaleBiasAndLargestWeight.x) + View_ReflectionEnvironmentRoughnessMixingScaleBiasAndLargestWeight.y, 0.0, 1.0)))) * 1.0) * ((_229 * _359.x) + vec3(_310 * _359.y)));
    highp vec3 _1062;
    SPIRV_CROSS_LOOP
    for (uint _1064 = 0u; _1064 < _1059; _1061 = _1062, _1064++)
    {
        uint _1073 = texelFetch(ps2, int(_1045 + _1064)).x * 6u;
        highp vec4 _1075 = texelFetch(ps0, int(_1073));
        highp vec4 _1077 = texelFetch(ps0, int(_1073 + 1u));
        highp vec4 _1079 = texelFetch(ps0, int(_1073 + 2u));
        highp vec4 _1081 = texelFetch(ps0, int(_1073 + 3u));
        highp float _1082 = _1075.w;
        highp float _1083 = _1082 * _1082;
        highp vec3 _1084 = _1075.xyz;
        highp vec3 _1085 = in_var_TEXCOORD8.xyz - _1084;
        if ((dot(_1085, _1085) * _1083) > 1.0)
        {
            _1062 = _1061;
            continue;
        }
        uint _1092 = floatBitsToUint(_1079.w);
        if (((_1092 >> 8u) & _1058) == 0u)
        {
            _1062 = _1061;
            continue;
        }
        highp float _1101 = _1077.w;
        highp vec4 _1116 = vec4(float((_1092 & 1u) != 0u), float((_1092 & 2u) != 0u), float((_1092 & 4u) != 0u), float((_1092 & 8u) != 0u));
        highp vec3 _1117 = _1084 - in_var_TEXCOORD8.xyz;
        highp float _1118 = dot(_1117, _1117);
        highp vec3 _1120 = _1117 * inversesqrt(_1118);
        highp float _1137;
        if (_1101 == 0.0)
        {
            highp float _1129 = _1118 * _1083;
            highp float _1132 = clamp(1.0 - (_1129 * _1129), 0.0, 1.0);
            _1137 = (_1132 * _1132) * (1.0 / (_1118 + 1.0));
        }
        else
        {
            highp vec3 _1124 = _1117 * _1082;
            _1137 = pow(1.0 - clamp(dot(_1124, _1124), 0.0, 1.0), _1101);
        }
        highp float _1148;
        if (((_1092 >> 16u) & 3u) == 2u)
        {
            highp float _1145 = clamp((dot(_1120, _1079.xyz) - _1081.x) * _1081.y, 0.0, 1.0);
            _1148 = _1137 * (_1145 * _1145);
        }
        else
        {
            _1148 = _1137;
        }
        highp vec3 _1195;
        SPIRV_CROSS_BRANCH
        if (_1148 > 0.0)
        {
            float _363 = mix(1.0, dot(_406, _1116), dot(_1116, vec4(1.0)));
            highp float _1156 = max(0.0, dot(_148, normalize(_608 + _1120)));
            highp vec4 _1158 = textureLod(SPIRV_Cross_CombinedView_SSProfilesTextureView_SSProfilesSampler, _913, 0.0);
            float _373 = _1158.z;
            highp float _1161 = max(clamp(_715 * (_1158.x * 2.0), 0.0, 1.0), 0.0199999995529651641845703125);
            float _377 = clamp(_715 * (_1158.y * 2.0), 0.0, 1.0);
            float _364 = mix(_1161, _377, _373);
            float _365 = dot(_148, _1120);
            highp vec3 _1173 = vec3(1.0) * max(0.0, dot(_148, _1120));
            highp float _1178 = 1.0 - (_1156 * _1156);
            float _380 = _1161 * _1161;
            highp float _1179 = _1156 * _380;
            highp float _1181 = _380 / (_1178 + (_1179 * _1179));
            float _384 = _377 * _377;
            highp float _1182 = _1156 * _384;
            highp float _1184 = _384 / (_1178 + (_1182 * _1182));
            vec4 _396 = (vec4(-1.0, -0.027496337890625, -0.57177734375, 0.022003173828125) * _364) + vec4(1.0, 0.042510986328125, 1.0400390625, -0.040008544921875);
            float _397 = _396.x;
            vec2 _405 = (vec2(-1.0400390625, 1.0400390625) * ((min(_397 * _397, _319) * _397) + _396.y)) + _396.zw;
            _1195 = (((mix(_1173 * _363, textureLod(SPIRV_Cross_CombinedView_SSProfilesPreIntegratedTextureView_SSProfilesPreIntegratedSampler, vec3((max(_365 - (max(2.0 * _365, 0.4000000059604644775390625) * (1.0 - sqrt(_363))), -1.0) * 0.5) + 0.5, _721, _925), 0.0).xyz, textureLod(SPIRV_Cross_CombinedView_SSProfilesTextureView_SSProfilesSampler, _934, 0.0).xyz) * _296) * 1.0) + ((_1173 * (((_229 * _405.x) + vec3(_310 * _405.y)) * (mix(min(_1181 * _1181, 2048.0), min(_1184 * _1184, 2048.0), _373) * ((_364 * 0.25) + 0.25)))) * 1.0)) * ((_1077.xyz * _1148) * _363);
        }
        else
        {
            _1195 = vec3(0.0);
        }
        _1062 = _1061 + _1195;
    }
    vec3 _74 = _1061 * 1.0;
    vec4 _420 = vec4(_74.x, _74.y, _74.z, _559.w);
    _420.w = 0.0;
    highp vec3 _1198 = min((_420.xyz * View_PreExposure).xyz, vec3(32512.0, 32512.0, 32256.0));
    out_var_SV_Target0 = vec4(_1198.x, _1198.y, _1198.z, _420.w);
    out_var_SV_Target1 = gl_FragCoord.z;
}

